/**
 * GastroCare Core Main JavaScript
 * Handles sticky navbar, back-to-top, scroll reveals, animated metrics, and accessibility
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Sticky Navbar & Scroll Shadow
  const navbar = document.querySelector('.gc-navbar');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // 2. Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Highlight current page nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.endsWith(currentPath))) {
      link.classList.add('active');
    }
  });

  // 4. Close mobile navbar when clicking outside or clicking link
  const navCollapse = document.querySelector('.navbar-collapse');
  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navCollapse.classList.contains('show') && window.bootstrap) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  // 5. Scroll Reveal Micro-Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if observer unsupported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 6. Animated Metric Counters
  const counters = document.querySelectorAll('.counter-val');
  if ('IntersectionObserver' in window && counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target')) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const increment = target / 35;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
          }, 30);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // 7. Global Toast Notification System
  window.showGCToast = function(msg, icon = '✓') {
    let container = document.querySelector('.gc-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'gc-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'gc-toast';
    toast.innerHTML = `<span style="font-size:1.2rem; color:var(--gc-primary); font-weight:bold;">${icon}</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // 8. Newsletter and Quick Forms Handler
  const newsForms = document.querySelectorAll('.newsletter-form');
  newsForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        window.showGCToast(`Thank you! ${input.value} is subscribed to Digestive Health Updates.`, '📬');
        input.value = '';
      }
    });
  });

  // 9. Interactive Time Slot Buttons
  const timeSlotBtns = document.querySelectorAll('.time-slot-btn');
  timeSlotBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      timeSlotBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const timeInput = document.getElementById('selectedTimeSlot');
      if (timeInput) timeInput.value = this.textContent.trim();
    });
  });

  // 10. Interactive Gut Health Assessment Quiz Widget
  const quizOptions = document.querySelectorAll('.quiz-option-btn');
  const btnCalculateQuiz = document.getElementById('btnCalculateQuiz');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizProgressText = document.getElementById('quizProgressText');
  const quizPercentBadge = document.getElementById('quizPercentBadge');
  const quizIncompleteNotice = document.getElementById('quizIncompleteNotice');
  const resultBox = document.getElementById('quizResultBox');

  function updateQuizState(triggerCalculate = false) {
    const allGroups = document.querySelectorAll('.quiz-question-group');
    if (!allGroups.length) return;

    let answeredCount = 0;
    let totalScore = 0;
    let unansweredGroups = [];

    allGroups.forEach((g, idx) => {
      const sel = g.querySelector('.quiz-option-btn.selected');
      if (sel) {
        answeredCount++;
        totalScore += parseInt(sel.getAttribute('data-weight') || '1', 10);
      } else {
        unansweredGroups.push(idx + 1);
      }
    });

    const percent = Math.round((answeredCount / allGroups.length) * 100);
    if (quizProgressBar) quizProgressBar.style.width = percent + '%';
    if (quizPercentBadge) quizPercentBadge.textContent = percent + '% Complete';
    if (quizProgressText) {
      if (answeredCount === allGroups.length) {
        quizProgressText.textContent = 'All 3 questions completed! Clinical assessment ready.';
      } else {
        quizProgressText.textContent = `Assessment Progress: ${answeredCount} of ${allGroups.length} questions answered`;
      }
    }

    if (answeredCount === allGroups.length || triggerCalculate) {
      if (answeredCount === allGroups.length) {
        if (quizIncompleteNotice) quizIncompleteNotice.classList.add('d-none');
        if (resultBox) {
          resultBox.classList.remove('d-none');
          const title = document.getElementById('quizResultTitle');
          const desc = document.getElementById('quizResultDesc');
          const badge = document.getElementById('quizResultBadge');
          const scoreDisplay = document.getElementById('quizScoreDisplay');

          if (scoreDisplay) scoreDisplay.textContent = `${totalScore} / 9`;

          if (totalScore >= 7) {
            if (badge) {
              badge.textContent = 'High Motility / Mucosal Flags Detected';
              badge.className = 'badge bg-danger text-white mb-2 p-2 px-3 fw-bold';
            }
            if (title) title.textContent = 'Comprehensive Specialist Evaluation Recommended';
            if (desc) desc.textContent = 'Your responses indicate frequent postprandial discomfort or motility irregularities. A targeted consultation with Dr. Maya Carter or our Endoscopy & Motility team is recommended to evaluate for potential IBS, SIBO, or mucosal inflammation.';
          } else if (totalScore >= 4) {
            if (badge) {
              badge.textContent = 'Moderate Functional Sensitivity';
              badge.className = 'badge bg-warning text-dark mb-2 p-2 px-3 fw-bold';
            }
            if (title) title.textContent = 'Targeted Dietary & Gut Microbiome Optimization';
            if (desc) desc.textContent = 'Your symptoms suggest mild-to-moderate functional gut sensitivities or episodic dysbiosis. A non-invasive comprehensive biomarker check and dietary low-FODMAP protocol review can provide rapid symptom relief.';
          } else {
            if (badge) {
              badge.textContent = 'Digestive Health Stable';
              badge.className = 'badge bg-success text-white mb-2 p-2 px-3 fw-bold';
            }
            if (title) title.textContent = 'Low Clinical Risk Profile';
            if (desc) desc.textContent = 'Your digestive motility and upper GI indicators appear healthy and well-regulated. Continue balanced nutrition, hydration, and schedule routine preventative screenings as age-appropriate.';
          }

          if (triggerCalculate) {
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      } else if (triggerCalculate) {
        if (quizIncompleteNotice) {
          quizIncompleteNotice.classList.remove('d-none');
          quizIncompleteNotice.innerHTML = `⚠️ Please select an answer for question(s) <strong>${unansweredGroups.join(', ')}</strong> to calculate your score.`;
        }
      }
    }
  }

  if (quizOptions.length > 0) {
    quizOptions.forEach(btn => {
      btn.addEventListener('click', function() {
        const parentGroup = this.closest('.quiz-question-group');
        if (parentGroup) {
          parentGroup.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
          this.classList.add('selected');
        }
        updateQuizState(false);
      });
    });
  }

  if (btnCalculateQuiz) {
    btnCalculateQuiz.addEventListener('click', function() {
      updateQuizState(true);
    });
  }

  // 11. Home 2: Specialty Center Interactive Suite Tabs
  const h2TabTriggers = document.querySelectorAll('.h2-tab-trigger');
  const h2TabPanes = document.querySelectorAll('.h2-tab-pane');
  if (h2TabTriggers.length > 0) {
    h2TabTriggers.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target-pane');
        if (!targetId) return;
        h2TabTriggers.forEach(t => t.classList.remove('active'));
        h2TabPanes.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  // 12. Home 2: Quick Triage Jump to Suite Tab
  const triageDockBtns = document.querySelectorAll('.h2-triage-btn[data-jump-tab]');
  triageDockBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const tabTarget = this.getAttribute('data-jump-tab');
      const targetTrigger = document.querySelector(`.h2-tab-trigger[data-target-pane="${tabTarget}"]`);
      if (targetTrigger) {
        targetTrigger.click();
        const suitesSection = document.getElementById('specialty-suites');
        if (suitesSection) {
          suitesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 13. Home 2: Interactive Procedure Pricing & Insurance Calculator
  const calcToggleBtns = document.querySelectorAll('.h2-calc-toggle-btn');
  const calcProcOptions = document.querySelectorAll('.h2-proc-option');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcSubtext = document.getElementById('calcSubtext');
  const calcBreakdownList = document.getElementById('calcBreakdownList');
  const calcCoverageNotice = document.getElementById('calcCoverageNotice');

  function updatePriceEstimator() {
    if (!calcPriceDisplay) return;
    const activeToggle = document.querySelector('.h2-calc-toggle-btn.active');
    const isInsurance = activeToggle && activeToggle.getAttribute('data-mode') === 'insurance';
    const selectedProc = document.querySelector('.h2-proc-option.selected') || calcProcOptions[0];
    if (!selectedProc) return;

    const selfPayPrice = parseInt(selectedProc.getAttribute('data-selfpay') || '1450', 10);
    const insuranceCopay = parseInt(selectedProc.getAttribute('data-copay') || '0', 10);

    if (isInsurance) {
      calcPriceDisplay.textContent = insuranceCopay === 0 ? '$0' : `$${insuranceCopay}`;
      if (calcSubtext) {
        calcSubtext.textContent = insuranceCopay === 0 
          ? 'Typical Copay with In-Network Commercial Insurance (100% Preventative Coverage)'
          : 'Estimated In-Network Specialist Copay / Deductible Share';
      }
      if (calcCoverageNotice) {
        calcCoverageNotice.innerHTML = `🛡️ <strong>In-Network Coverage:</strong> We bill Aetna, BlueCross, Cigna, Medicare, and UnitedHealthcare directly with zero surprise facility markups.`;
      }
      if (calcBreakdownList) {
        calcBreakdownList.innerHTML = `
          <li class="d-flex justify-content-between py-2 border-bottom"><span>Preventative Benefit Tier</span><strong class="text-success">${insuranceCopay === 0 ? '100% Covered' : 'Applicable Deductible'}</strong></li>
          <li class="d-flex justify-content-between py-2 border-bottom"><span>Pre-Authorization Support</span><strong class="text-success">Complimentary</strong></li>
          <li class="d-flex justify-content-between py-2 border-bottom"><span>Dedicated Anesthesia (Propofol)</span><strong class="text-success">In-Network Covered</strong></li>
          <li class="d-flex justify-content-between py-2"><span>Estimated Out-of-Pocket</span><strong class="text-primary">${insuranceCopay === 0 ? '$0 Copay' : '$' + insuranceCopay}</strong></li>
        `;
      }
    } else {
      calcPriceDisplay.textContent = `$${selfPayPrice.toLocaleString()}`;
      if (calcSubtext) {
        calcSubtext.textContent = 'All-Inclusive Bundled Rate (No Hidden Facility or Anesthesia Bills)';
      }
      if (calcCoverageNotice) {
        calcCoverageNotice.innerHTML = `💎 <strong>Transparent Bundle:</strong> Covers endoscopy suite time, dual-board specialist fee, conscious propofol sedation, and digital recovery report.`;
      }
      if (calcBreakdownList) {
        const docFee = Math.round(selfPayPrice * 0.42);
        const facilityFee = Math.round(selfPayPrice * 0.38);
        const anesthesiaFee = selfPayPrice - docFee - facilityFee;
        calcBreakdownList.innerHTML = `
          <li class="d-flex justify-content-between py-2 border-bottom"><span>Board Specialist Procedure Fee</span><strong>$${docFee}</strong></li>
          <li class="d-flex justify-content-between py-2 border-bottom"><span>AAAHC Certified Endoscopy Suite</span><strong>$${facilityFee}</strong></li>
          <li class="d-flex justify-content-between py-2 border-bottom"><span>Certified Propofol MAC Sedation</span><strong>$${anesthesiaFee}</strong></li>
          <li class="d-flex justify-content-between py-2"><span>Bundled Outpatient Total</span><strong class="text-primary">$${selfPayPrice.toLocaleString()}</strong></li>
        `;
      }
    }
  }

  if (calcToggleBtns.length > 0) {
    calcToggleBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        calcToggleBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        updatePriceEstimator();
      });
    });
  }

  if (calcProcOptions.length > 0) {
    calcProcOptions.forEach(opt => {
      opt.addEventListener('click', function() {
        calcProcOptions.forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        updatePriceEstimator();
      });
    });
    updatePriceEstimator();
  }

  // ---------------------------------------------------------
  // 8. GastroCare Legal & Patient Policy Pop-up Modal Controller
  // ---------------------------------------------------------
  const LEGAL_CONTENT = {
    privacy: {
      badge: 'HIPAA & PHI Protected',
      updated: 'Last Revised: October 2026',
      title: 'Notice of Privacy Practices & Patient Privacy Policy',
      html: `
        <div class="alert alert-light border d-flex gap-3 align-items-start mb-4 p-3 rounded-3">
          <div class="fs-3">🛡️</div>
          <div>
            <strong class="d-block mb-1">HIPAA Omnibus Rule &amp; PHI Protection Compliance</strong>
            <p class="small mb-0 text-muted">This Notice of Privacy Practices outlines how your Protected Health Information (PHI) is safeguarded, utilized, and kept confidential across all diagnostic, endoscopic, and clinical consultations at GastroCare Clinic.</p>
          </div>
        </div>

        <h5 class="fw-bold mb-2">1. Collection and Protection of Health Information (PHI)</h5>
        <p>GastroCare strictly complies with the Health Insurance Portability and Accountability Act (HIPAA), the HITECH Act, and state medical confidentiality regulations. We collect medical history, endoscopic video recordings, biopsy pathology findings, lab panels, and insurance coverage solely to provide specialized gastrointestinal care.</p>
        <ul class="mb-3 ps-3">
          <li><strong>Electronic Safeguards:</strong> All electronic health records (EHR) and digital endoscopy imagery are stored behind AES-256 military-grade encryption with multi-factor authentication.</li>
          <li><strong>Physical Safeguards:</strong> Access to procedural suites, laboratory logs, and physical charts is restricted to authorized medical staff with biometric access logs.</li>
        </ul>

        <h5 class="fw-bold mb-2">2. Permitted Uses &amp; Disclosures</h5>
        <p>Your health information is disclosed strictly for:</p>
        <ul class="mb-3 ps-3">
          <li><strong>Treatment Coordination:</strong> Sharing histopathology findings with your referring primary care physician or surgical oncology team.</li>
          <li><strong>Payment &amp; Insurance Billing:</strong> Directly verifying benefits and submitting claims to in-network providers (Medicare, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare).</li>
          <li><strong>Healthcare Operations:</strong> Quality audits by the American Society for Gastrointestinal Endoscopy (ASGE) and AAAHC accreditation boards.</li>
        </ul>

        <h5 class="fw-bold mb-2">3. Your Patient Privacy Rights</h5>
        <p>Under federal law, you hold fundamental rights regarding your health data:</p>
        <ul class="mb-3 ps-3">
          <li><strong>Right to Inspect &amp; Copy:</strong> You may request your complete endoscopic report, colonoscopy photography, and pathology results in paper or digital PDF format within 30 days.</li>
          <li><strong>Right to Confidential Communications:</strong> You may specify whether clinical reminders should be sent via SMS, encrypted patient portal message, or direct phone call.</li>
          <li><strong>Right to an Accounting of Disclosures:</strong> You have the right to receive an itemized list of disclosures GastroCare has made outside of routine treatment and billing.</li>
          <li><strong>Right to Amend:</strong> You may request an amendment to your clinical record if you believe clinical observations or history are incomplete or inaccurate.</li>
        </ul>

        <h5 class="fw-bold mb-2">4. Contacting the Privacy Officer</h5>
        <p>If you have any questions or wish to file a confidential privacy inquiry:</p>
        <div class="p-3 bg-light rounded-3 border">
          <div class="fw-semibold">GastroCare Privacy Compliance Office</div>
          <div class="text-muted small">480 Bellevue Pavilion Way, Suite 400, Digestive Health Pavilion, Seattle, WA 98101</div>
          <div class="text-muted small mt-1">Email: <a href="mailto:privacy@gastrocare-clinic.com" class="text-primary text-decoration-underline">privacy@gastrocare-clinic.com</a> | Phone: (206) 555-0182 (Ext. 4)</div>
        </div>
      `
    },
    terms: {
      badge: 'Clinical Care Charter & Rights',
      updated: 'Last Revised: October 2026',
      title: 'Terms of Service, Care Charter & Patient Bill of Rights',
      html: `
        <div class="alert alert-light border d-flex gap-3 align-items-start mb-4 p-3 rounded-3">
          <div class="fs-3">📋</div>
          <div>
            <strong class="d-block mb-1">Care Charter, Terms of Service &amp; Patient Bill of Rights</strong>
            <p class="small mb-0 text-muted">These terms govern outpatient clinical visits, surgical endoscopy scheduling, portal communications, and your guaranteed rights as a patient of GastroCare Clinic.</p>
          </div>
        </div>

        <h5 class="fw-bold mb-2">1. Patient Bill of Rights</h5>
        <p>Every patient admitted or treated at GastroCare is entitled to dignified, equitable, and evidence-based clinical care:</p>
        <ul class="mb-3 ps-3">
          <li><strong>Informed Consent:</strong> You have the right to receive clear, understandable explanations regarding diagnosis, endoscopic procedures (gastroscopy, colonoscopy, ERCP, pillcam), associated sedation options (propofol MAC), benefits, and foreseeable risks prior to any intervention.</li>
          <li><strong>Respect &amp; Dignity:</strong> Care is provided free from discrimination based on race, color, ethnicity, religion, sexual orientation, gender identity, age, disability, or source of payment.</li>
          <li><strong>Right to Refuse:</strong> You have the full right to refuse any procedure, medication, or clinical protocol after being informed of potential medical consequences.</li>
        </ul>

        <h5 class="fw-bold mb-2">2. Medical Emergencies &amp; Non-Acute Scope</h5>
        <div class="p-3 mb-3 border-start border-4 border-warning bg-light rounded-3 small">
          <strong class="text-warning-emphasis">⚠️ Non-Emergency Notice:</strong> This website, online appointment booking, and patient portal messaging are NOT intended for urgent or emergency situations. If you experience acute abdominal agony, active gastrointestinal hemorrhage (vomiting blood / black tarry stools), chest pain, or severe difficulty swallowing, immediately dial <strong>911</strong> or go to your nearest Emergency Department.
        </div>

        <h5 class="fw-bold mb-2">3. Appointment Rescheduling &amp; Bowel Prep Compliance</h5>
        <ul class="mb-3 ps-3">
          <li><strong>Sedation &amp; Escort Rule:</strong> For safety under MAC propofol anesthesia, patients undergoing endoscopic interventions must arrive with an adult chaperone responsible for accompaniment home.</li>
          <li><strong>24-Hour Rescheduling Notice:</strong> Procedure suite time and dedicated nursing teams are reserved exclusively for you. Please notify us at least 24 hours in advance to reschedule without late fees.</li>
          <li><strong>Pre-Procedure Bowel Prep:</strong> High-definition colonoscopy relies on complete mucosal visualization. Adhering to the split-dose bowel prep kit guidelines ensures thorough lesion detection.</li>
        </ul>

        <h5 class="fw-bold mb-2">4. Transparent Billing &amp; Financial Policy</h5>
        <p class="mb-0">We support fair and transparent pricing. All procedure fees, facility suite costs, and anesthesia bundles are clearly itemized. In-network insurance benefits are submitted directly on your behalf with zero surprise facility balance bills under the federal No Surprises Act.</p>
      `
    },
    rights: {
      badge: 'Patient Bill of Rights',
      updated: 'Last Revised: October 2026',
      title: 'Patient Bill of Rights & Clinical Charter',
      html: `
        <div class="alert alert-light border d-flex gap-3 align-items-start mb-4 p-3 rounded-3">
          <div class="fs-3">⚖️</div>
          <div>
            <strong class="d-block mb-1">GastroCare Patient Bill of Rights</strong>
            <p class="small mb-0 text-muted">As a patient of GastroCare Clinic, your dignity, autonomy, personal safety, and medical decision-making authority are guaranteed under our Care Charter.</p>
          </div>
        </div>

        <h5 class="fw-bold mb-2">1. Respectful &amp; Equitable Care</h5>
        <p>You have the right to considerate, respectful care given by competent personnel at all times, without distinction to race, color, national origin, religion, age, sex, disability, or payment source.</p>

        <h5 class="fw-bold mb-2">2. Complete Clinical Transparency</h5>
        <p>You have the right to receive from your gastroenterologist complete current information concerning your diagnosis, treatment plan, procedural alternatives, and expected prognosis in understandable language.</p>

        <h5 class="fw-bold mb-2">3. Privacy &amp; Record Access</h5>
        <p>You have the right to personal privacy in consultations and examinations, and the right to obtain copies of your endoscopic imagery, histology findings, and lab results without unnecessary delay.</p>

        <h5 class="fw-bold mb-2">4. Grievances &amp; Patient Advocacy</h5>
        <p>You have the right to voice complaints or recommendations regarding care or safety without fear of recrimination. Contact our Patient Advocate directly at (206) 555-0182.</p>
      `
    },
    accessibility: {
      badge: 'WCAG 2.1 Level AA Standard',
      updated: 'Last Revised: October 2026',
      title: 'Accessibility Statement & Universal Inclusion Policy',
      html: `
        <div class="alert alert-light border d-flex gap-3 align-items-start mb-4 p-3 rounded-3">
          <div class="fs-3">♿</div>
          <div>
            <strong class="d-block mb-1">Commitment to Accessible, Universal Healthcare</strong>
            <p class="small mb-0 text-muted">GastroCare is dedicated to ensuring digital and physical accessibility for all patients, caregivers, and visitors, including individuals with sensory, motor, or cognitive disabilities.</p>
          </div>
        </div>

        <h5 class="fw-bold mb-2">1. WCAG 2.1 Conformance Status</h5>
        <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. The GastroCare web portal and clinic resources are designed to conform with <strong>WCAG 2.1 Level AA</strong> benchmarks and Section 508 accessibility guidelines.</p>

        <h5 class="fw-bold mb-2">2. Accessibility Features on GastroCare</h5>
        <ul class="mb-3 ps-3">
          <li><strong>High-Contrast Color Modes:</strong> Switch seamlessly between Daylight Clinical Mode and Calm Clinical Night Mode with text contrast ratios exceeding 4.5:1.</li>
          <li><strong>Keyboard Navigation:</strong> All navigation menus, dropdowns, booking buttons, and form inputs are fully accessible via <kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Space</kbd>, and arrow keys with visible focus rings.</li>
          <li><strong>Screen Reader Compatibility:</strong> Built with semantic HTML5 landmarks, descriptive ARIA labels, and live region announcements for status changes.</li>
          <li><strong>Right-to-Left (RTL) Localization:</strong> One-click RTL layout toggle support for Arabic, Hebrew, and other right-to-left language readers.</li>
          <li><strong>Text Scalability:</strong> Pages adapt fluidly without loss of content or functionality when browser zoom is set up to 200%.</li>
        </ul>

        <h5 class="fw-bold mb-2">3. Physical Facility Accessibility</h5>
        <p>Our physical clinic facilities feature ADA-compliant ground-level entrances, power-assisted sliding doors, wide corridor clearance for wheelchairs and bariatric stretchers, accessible restrooms, and hearing loop equipment in procedure waiting areas.</p>

        <h5 class="fw-bold mb-2">4. Accessibility Feedback &amp; Assistance</h5>
        <p>If you experience any difficulty accessing any content on this website or require documents in an alternative format (large print, audio, braille):</p>
        <div class="p-3 bg-light rounded-3 border">
          <div class="fw-semibold">Accessibility Coordinator &amp; Patient Advocate</div>
          <div class="text-muted small">Phone: (206) 555-0182 (TTY/TDD 711 Relay Services Available)</div>
          <div class="text-muted small mt-1">Email: <a href="mailto:accessibility@gastrocare-clinic.com" class="text-primary text-decoration-underline">accessibility@gastrocare-clinic.com</a></div>
          <div class="text-muted small mt-1">Response Commitment: Accessibility inquiries are reviewed and answered within 1 business day.</div>
        </div>
      `
    }
  };

  function ensureLegalModal() {
    let modal = document.getElementById('gcLegalModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal fade gc-legal-modal';
      modal.id = 'gcLegalModal';
      modal.tabIndex = -1;
      modal.setAttribute('aria-labelledby', 'gcLegalModalLabel');
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header border-bottom d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <span class="badge rounded-pill gc-legal-badge" id="gcLegalBadge">Clinical Policy</span>
                <span class="text-muted small" id="gcLegalUpdated">Effective 2026</span>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body gc-legal-modal-body p-4" id="gcLegalModalBody">
              <h3 class="fw-bold mb-3" id="gcLegalModalLabel">Policy Details</h3>
              <div id="gcLegalContent"></div>
            </div>
            <div class="modal-footer border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div class="text-muted small d-flex align-items-center gap-2">
                <span class="text-success">✔</span>
                <span>Official GastroCare Clinical Documentation</span>
              </div>
              <div class="d-flex gap-2">
                <button type="button" class="btn btn-outline-secondary rounded-pill px-3 py-1 btn-sm" onclick="window.print()">Print</button>
                <button type="button" class="btn btn-primary rounded-pill px-4 py-1 btn-sm" data-bs-dismiss="modal">Close &amp; Accept</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    return modal;
  }

  function openLegalModal(type) {
    const doc = LEGAL_CONTENT[type] || LEGAL_CONTENT.privacy;
    const modalEl = ensureLegalModal();
    const titleEl = modalEl.querySelector('#gcLegalModalLabel');
    const badgeEl = modalEl.querySelector('#gcLegalBadge');
    const updatedEl = modalEl.querySelector('#gcLegalUpdated');
    const contentEl = modalEl.querySelector('#gcLegalContent');

    if (titleEl) titleEl.textContent = doc.title;
    if (badgeEl) badgeEl.textContent = doc.badge;
    if (updatedEl) updatedEl.textContent = doc.updated;
    if (contentEl) contentEl.innerHTML = doc.html;

    if (window.bootstrap && window.bootstrap.Modal) {
      const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    } else {
      // Fallback if bootstrap object isn't globally accessible
      modalEl.classList.add('show');
      modalEl.style.display = 'block';
      let backdrop = document.querySelector('.modal-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }
      const closeButtons = modalEl.querySelectorAll('[data-bs-dismiss="modal"]');
      closeButtons.forEach(btn => {
        btn.onclick = () => {
          modalEl.classList.remove('show');
          modalEl.style.display = 'none';
          if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
        };
      });
    }
  }

  // Intercept clicks on any legal link site-wide
  document.addEventListener('click', function(e) {
    const targetLink = e.target.closest('a');
    if (!targetLink) return;

    const dataLegal = targetLink.getAttribute('data-legal');
    const href = (targetLink.getAttribute('href') || '').toLowerCase();
    const text = (targetLink.textContent || '').trim().toLowerCase();

    let matchedType = null;

    if (dataLegal) {
      matchedType = dataLegal;
    } else if (text.includes('privacy policy') || text === 'privacy') {
      matchedType = 'privacy';
    } else if (text.includes('terms of service') || text.includes('terms') || text.includes('terms & conditions')) {
      matchedType = 'terms';
    } else if (text.includes('patient rights') || text.includes('patient bill of rights') || text.includes('rights')) {
      matchedType = 'rights';
    } else if (text.includes('accessibility statement') || text.includes('accessibility')) {
      matchedType = 'accessibility';
    } else if (href.includes('coming-soon.html') || href.includes('#gclegalmodal')) {
      if (text.includes('privacy')) matchedType = 'privacy';
      else if (text.includes('term')) matchedType = 'terms';
      else if (text.includes('right')) matchedType = 'rights';
      else if (text.includes('access')) matchedType = 'accessibility';
    }

    if (matchedType && LEGAL_CONTENT[matchedType]) {
      e.preventDefault();
      e.stopPropagation();
      openLegalModal(matchedType);
    }
  });

  // Global Medical Document Downloader for all pages
  window.triggerMedicalPdfDownload = function(docName) {
    const cleanName = docName ? (docName.endsWith('.pdf') ? docName : docName + '.pdf') : 'GastroCare_Clinical_Document.pdf';
    const fileTitle = cleanName.replace(/_/g, ' ').replace('.pdf', '');

    const content = `%PDF-1.4\n% GastroCare Clinical Document\nDocument: ${fileTitle}\nDate: ${new Date().toLocaleDateString()}\nPatient: Alex Johnson (DOB: 05/14/1984)\nRecord ID: GC-882910\nClinic: GastroCare Gastroenterology & Digestive Health\nStatus: Official Verified Clinical Record\n\nThis certified clinical document was generated from the GastroCare Patient Portal.\nAll records and pathology reports are confidential and protected under HIPAA regulations.\n`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = cleanName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);

    if (typeof showPortalToast === 'function') {
      showPortalToast(`&#128190; Successfully downloaded: <strong>${cleanName}</strong>`);
    } else if (typeof showToast === 'function') {
      showToast(`&#128190; Successfully downloaded: ${cleanName}`);
    }
  };

  document.addEventListener('click', function(e) {
    const downloadBtn = e.target.closest('.btn-download-doc');
    if (downloadBtn) {
      e.preventDefault();
      const docName = downloadBtn.getAttribute('data-name') || 'Medical_Document.pdf';
      window.triggerMedicalPdfDownload(docName);
    }
  });
});

