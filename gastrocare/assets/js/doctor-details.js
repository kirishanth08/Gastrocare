/**
 * GastroCare Gastroenterology & Digestive Health Clinic
 * Doctor Details Dynamic Controller & Data Store
 * Supports seamless switching and direct linking via ?doctor=<id>
 */

(function () {
  'use strict';

  const DOCTORS_DATA = {
    'maya-carter': {
      id: 'maya-carter',
      name: 'Dr. Maya Carter, MD, FACG',
      shortName: 'Dr. Carter',
      badge: 'ENDOSCOPY MEDICAL DIRECTOR',
      specialty: 'Lead Gastroenterologist & Therapeutic Endoscopy Specialist',
      lead: "With over 18 years of clinical leadership, Dr. Carter is recognized as one of the Pacific Northwest's leading authorities on screening colonoscopy, polyp removal, and Barrett's esophagus management.",
      photo: 'assets/images/doctors/dr-maya-carter.jpg',
      education: "Harvard Medical School • Brigham and Women's",
      certifications: 'Internal Medicine • Gastroenterology (ABIM)',
      rating: '★★★★★ 4.98 / 5.0 (420+ Reviews)',
      pageTitle: 'Dr. Maya Carter, MD, FACG | Lead Gastroenterologist | GastroCare Clinic',
      metaDesc: "Specialist in diagnostic endoscopy, screening colonoscopy, and Barrett's esophagus surveillance at GastroCare Clinic.",
      bio: [
        "Dr. Maya Carter completed her internal medicine residency and gastroenterology fellowship at Harvard Medical School and Brigham and Women’s Hospital in Boston. She served as an assistant clinical professor before establishing the GastroCare Endoscopy Center of Excellence.",
        "Her clinical philosophy centers on the conviction that diagnostic procedures need never be intimidating. By pioneering low-volume bowel prep formulas and propofol-based conscious sedation protocols, Dr. Carter has helped more than 14,000 patients complete stress-free colonoscopies with an adenoma detection rate consistently in the top 1% nationwide."
      ],
      interests: [
        'High-Definition Screening Colonoscopy',
        'Complex Snare & EMR Polypectomy',
        "Barrett's Esophagus Radiofrequency Ablation",
        'Severe GERD & Esophageal Motility',
        'Endoscopic Mucosal Resection (EMR)',
        'Digital Chromoendoscopy & AI Polyp Detection'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“Dr. Carter is the most reassuring physician I have ever met. She walked me through every detail before the colonoscopy and called me personally with my biopsy results the next day.”',
          author: 'Jennifer T. (Screening Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“Her bedside manner transformed what I thought would be a scary procedure into a quick, peaceful morning nap. Zero cramping afterwards!”',
          author: 'Robert H. (Upper Endoscopy Patient)'
        }
      ],
      clinicDays: 'Monday, Wednesday, Thursday',
      insurances: 'BlueCross, Aetna, Cigna, Medicare, UnitedHealthcare',
      location: 'Suite 400, Bellevue Pavilion',
      procedureText: 'Explore Endoscopy Procedures',
      procedureLink: 'service-details.html?service=endoscopy',
      bookText: 'Book Consultation with Dr. Carter →'
    },

    'julian-vance': {
      id: 'julian-vance',
      name: 'Dr. Julian Vance, MD, PhD',
      shortName: 'Dr. Vance',
      badge: 'HEPATOLOGY & ADVANCED ENDOSCOPY LEAD',
      specialty: 'Senior Interventional Endoscopist & Liver Specialist',
      lead: 'A physician-scientist with over 15 years of interventional endoscopy experience, Dr. Vance specializes in non-invasive liver elastography (FibroScan®), complex biliary diagnostics, and advanced mucosal tissue resection.',
      photo: 'assets/images/doctors/dr-julian-vance.jpg',
      education: 'Johns Hopkins School of Medicine • UCSF Medical Center',
      certifications: 'Gastroenterology & Transplant Hepatology (ABIM)',
      rating: '★★★★★ 4.96 / 5.0 (380+ Reviews)',
      pageTitle: 'Dr. Julian Vance, MD, PhD | Hepatology & Interventional Endoscopy | GastroCare Clinic',
      metaDesc: 'Expertise in liver health, FibroScan elastography, screening colonoscopy, and biliary diagnostics at GastroCare Clinic.',
      bio: [
        'Dr. Julian Vance earned his medical degree and PhD in molecular pathology from the Johns Hopkins University School of Medicine, followed by advanced interventional endoscopy and hepatology fellowships at the University of California, San Francisco (UCSF).',
        'Dr. Vance leads GastroCare’s Comprehensive Liver Wellness and Interventional Center. He specializes in utilizing non-invasive ultrasound-based elastography (FibroScan®) to detect early-stage metabolic liver steatosis and fibrosis without the need for painful surgical needle biopsies.'
      ],
      interests: [
        'Non-Invasive Liver FibroScan® & CAP Steatosis Scoring',
        'Biliary Ductal Evaluation & Interventional ERCP',
        'High-Risk Mucosal Polypectomy & EMR Resection',
        'NAFLD / MASH Metabolic Fatty Liver Reversal',
        'Chronic Viral & Autoimmune Hepatitis Protocols',
        'Advanced Therapeutic Upper GI Endoscopy'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“Dr. Vance performed my FibroScan and thoroughly explained the liver stiffness scores. He put together a clear nutrition and medical roadmap that reversed my elevated ALT levels.”',
          author: 'David K. (Metabolic Liver Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“Brilliant physician-scientist who never rushes you. He explained complex diagnostic imaging in terms that made complete sense. Highly recommend Dr. Vance.”',
          author: 'Sarah M. (Interventional Patient)'
        }
      ],
      clinicDays: 'Tuesday, Thursday, Friday',
      insurances: 'BlueCross, Aetna, Premera, Medicare, Regence',
      location: 'Suite 420, Hepatology & Endoscopy Center',
      procedureText: 'Explore Liver FibroScan®',
      procedureLink: 'service-details.html?service=fibroscan',
      bookText: 'Book Consultation with Dr. Vance →'
    },

    'sophia-chen': {
      id: 'sophia-chen',
      name: 'Dr. Sophia Chen, MD',
      shortName: 'Dr. Chen',
      badge: 'FUNCTIONAL GI & MOTILITY DIRECTOR',
      specialty: 'IBS, SIBO & Gut-Brain Axis Specialist',
      lead: 'Pioneering personalized functional gastroenterology, Dr. Chen integrates clinical microbiome sequencing, quintuple hydrogen/methane breath testing, and gut-directed neuromodulation for chronic digestive disorders.',
      photo: 'assets/images/doctors/dr-sophia-chen.jpg',
      education: 'Stanford University School of Medicine • Mayo Clinic',
      certifications: 'Internal Medicine & Gastroenterology (ABIM)',
      rating: '★★★★★ 4.99 / 5.0 (510+ Reviews)',
      pageTitle: 'Dr. Sophia Chen, MD | IBS & Gut-Brain Motility Specialist | GastroCare Clinic',
      metaDesc: 'Specialist in IBS, SIBO breath testing, gut-brain neuromodulation, and chronic motility disorders at GastroCare Clinic.',
      bio: [
        'Dr. Sophia Chen graduated with honors from Stanford University School of Medicine and completed her specialized gastroenterology fellowship at the Mayo Clinic, where she concentrated on neuro-gastroenterology and gastrointestinal motility.',
        'Recognizing that millions of patients struggle with unexplained bloating, alternating bowel habits, and severe visceral pain, Dr. Chen founded GastroCare’s Functional GI and SIBO Center. Her methodology combines rigorous clinical diagnostics with evidenced-based nutritional microbiome therapies.'
      ],
      interests: [
        'Small Intestinal Bacterial Overgrowth (SIBO) Breath Diagnostics',
        'Irritable Bowel Syndrome (IBS-C, IBS-D, IBS-M) Phenotyping',
        'Gut-Brain Axis Neuromodulation & Visceral Hypersensitivity',
        'Comprehensive Stool Metagenomics & Biomarker Profiling',
        'High-Resolution Esophageal & Anorectal Manometry',
        'Low-FODMAP & Medical Nutrition Therapy Guidance'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“After 5 years of suffering with unexplained bloating and IBS that other doctors dismissed, Dr. Chen’s breath test pinpointed hydrogen-dominant SIBO. Her targeted protocol gave me my life back.”',
          author: 'Amanda L. (Functional GI Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“Empathetic, brilliant, and thorough. She treats the root physiological cause rather than simply masking symptoms with medications. Outstanding care.”',
          author: 'Michael B. (Motility Patient)'
        }
      ],
      clinicDays: 'Monday, Tuesday, Wednesday',
      insurances: 'BlueCross, Aetna, Cigna, Providence, Premera',
      location: 'Suite 310, Functional GI & Motility Suite',
      procedureText: 'Explore SIBO & IBS Diagnostics',
      procedureLink: 'service-details.html?service=sibo',
      bookText: 'Book Consultation with Dr. Chen →'
    },

    'aris-thorne': {
      id: 'aris-thorne',
      name: 'Dr. Aris Thorne, MD',
      shortName: 'Dr. Thorne',
      badge: 'COLORECTAL ONCOLOGY & PREVENTATIVE LEAD',
      specialty: 'Colorectal Diagnostics & Familial Cancer Risk Specialist',
      lead: 'Renowned for gentle, high-precision colonoscopies, Dr. Thorne focuses on genetic cancer risk stratification, Lynch syndrome surveillance, and painless cold-snare polypectomy protocols.',
      photo: 'assets/images/doctors/dr-aris-thorne.jpg',
      education: 'Columbia University Vagelos P&S • NewYork-Presbyterian',
      certifications: 'Gastroenterology (ABIM) • Clinical Cancer Genetics',
      rating: '★★★★★ 4.97 / 5.0 (340+ Reviews)',
      pageTitle: 'Dr. Aris Thorne, MD | Colorectal Diagnostics & Cancer Prevention | GastroCare Clinic',
      metaDesc: 'Board-certified specialist in screening colonoscopy, hereditary colorectal cancer surveillance, and painless polyp removal.',
      bio: [
        'Dr. Aris Thorne completed his medical education at Columbia University Vagelos College of Physicians and Surgeons and his fellowship in digestive diseases and gastrointestinal cancer genetics at NewYork-Presbyterian Hospital.',
        'He directs the High-Risk Colorectal Surveillance Clinic at GastroCare, providing individualized screening intervals, AI-assisted computer-aided polyp detection (CADe), and minimally invasive endoscopic resections that stop colorectal malignancies before they ever develop.'
      ],
      interests: [
        'AI-Assisted Computer-Aided Polyp Detection (CADe)',
        'High-Risk Familial Colorectal Cancer Risk Stratification',
        'Painless Cold-Snare & Underwater Polypectomy',
        'Lynch Syndrome & Polyposis Syndrome Surveillance',
        'Diverticular Disease & Chronic Colonic Spasm Management',
        'Screening Colonoscopy with Warm CO2 Insufflation'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“My family has a multi-generational history of colon polyps. Dr. Thorne created a customized screening roadmap with genetic counseling that gave our entire family immense peace of mind.”',
          author: 'Gregory P. (Preventative Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“The entire colonoscopy experience under Dr. Thorne was dignified, painless, and fast. The warm CO2 insufflation meant zero bloating afterwards.”',
          author: 'Lisa W. (Colonoscopy Patient)'
        }
      ],
      clinicDays: 'Wednesday, Thursday, Friday',
      insurances: 'BlueCross, Medicare, Cigna, UnitedHealthcare, Humana',
      location: 'Suite 405, Colorectal Health Wing',
      procedureText: 'Explore Screening Colonoscopy',
      procedureLink: 'service-details.html?service=colonoscopy',
      bookText: 'Book Consultation with Dr. Thorne →'
    },

    'elena-rostova': {
      id: 'elena-rostova',
      name: 'Dr. Elena Rostova, MD',
      shortName: 'Dr. Rostova',
      badge: 'IBD CLINICAL CHAIR & RESEARCH LEAD',
      specialty: "Crohn's Disease & Ulcerative Colitis Program Director",
      lead: 'Dedicated to achieving deep mucosal healing and long-term clinical remission in inflammatory bowel disease through precision biologic therapy, therapeutic drug monitoring, and non-invasive intestinal biomarker monitoring.',
      photo: 'assets/images/doctors/dr-elena-rostova.jpg',
      education: 'Yale School of Medicine • Mount Sinai IBD Center',
      certifications: 'Internal Medicine & Advanced IBD Gastroenterology',
      rating: '★★★★★ 4.95 / 5.0 (290+ Reviews)',
      pageTitle: "Dr. Elena Rostova, MD | IBD, Crohn's & Colitis Specialist | GastroCare Clinic",
      metaDesc: "Specialist in Crohn's disease, ulcerative colitis, biologic infusion management, and mucosal healing at GastroCare Clinic.",
      bio: [
        'Dr. Elena Rostova received her medical degree from Yale School of Medicine and completed her advanced fellowship in inflammatory bowel diseases at the Mount Sinai Hospital IBD Center in New York.',
        'As Clinical Chair of the IBD Program at GastroCare, Dr. Rostova pioneers individualized therapeutic drug monitoring and strict mucosal healing benchmarks, transitioning patients away from chronic steroids toward long-term steroid-free remission.'
      ],
      interests: [
        'Crohn’s Disease & Ulcerative Colitis Targeted Therapies',
        'Precision Biologic Optimization & Therapeutic Drug Monitoring',
        'Non-Invasive Fecal Calprotectin & Biomarker Surveillance',
        'Intestinal Ultrasound for Point-of-Care Inflammation Scoring',
        'Pregnancy & Family Planning in Inflammatory Bowel Disease',
        'Mucosal Healing Endoscopy & Terminal Ileum Biopsy'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“Dr. Rostova took me from a debilitating Crohn’s flare into complete endoscopic mucosal remission within six months. She is compassionate, brilliant, and responsive.”',
          author: 'Daniel S. (Crohn’s Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“Her mastery of modern biologic therapies is unmatched. She tailored my infusions and monitored my biomarkers so closely that I haven’t had a hospital visit in 3 years.”',
          author: 'Rachel K. (Colitis Patient)'
        }
      ],
      clinicDays: 'Monday, Thursday, Friday',
      insurances: 'BlueCross, Aetna, Cigna, Medicare, Kaiser Permanente (Referral)',
      location: 'Suite 415, IBD Infusion & Care Pavilion',
      procedureText: 'Explore Lab Biomarkers & Stool Tests',
      procedureLink: 'service-details.html?service=lab',
      bookText: 'Book Consultation with Dr. Rostova →'
    },

    'marcus-reed': {
      id: 'marcus-reed',
      name: 'Dr. Marcus Reed, MD, MACG',
      shortName: 'Dr. Reed',
      badge: 'SENIOR CLINICAL CONSULTANT & FOUNDING CHAIR',
      specialty: 'Master of the ACG & Complex Diagnostic Dilemmas Lead',
      lead: 'With 24+ years of clinical tenure, Dr. Reed provides senior expert consultations for complex diagnostic dilemmas, refractory GERD, occult gastrointestinal bleeding, and unexplained abdominal pain syndromes.',
      photo: 'assets/images/doctors/dr-marcus-reed.jpg',
      education: 'University of Pennsylvania School of Medicine • UCSF Medical Center',
      certifications: 'Gastroenterology (ABIM) • Master of the ACG (MACG)',
      rating: '★★★★★ 4.99 / 5.0 (640+ Reviews)',
      pageTitle: 'Dr. Marcus Reed, MD, MACG | Complex Diagnostic Gastroenterology | GastroCare Clinic',
      metaDesc: 'Senior gastroenterology consultant for second opinions, complex GI dilemmas, refractory reflux, and capsule endoscopy.',
      bio: [
        'A recipient of the Master designation from the American College of Gastroenterology, Dr. Marcus Reed completed his medical degree at the University of Pennsylvania and gastroenterology fellowship at UCSF Medical Center.',
        'With nearly a quarter-century of clinical practice, Dr. Reed is widely sought after by physicians across the Pacific Northwest for expert second-opinion evaluations, solving refractory acid reflux cases, and identifying obscure gastrointestinal bleeding via wireless capsule endoscopy.'
      ],
      interests: [
        'Complex Diagnostic Dilemma & Refractory Abdominal Pain Triage',
        'Refractory GERD & 96-Hour Wireless Bravo pH Capsule Studies',
        'Small Bowel Wireless Video Capsule Endoscopy (PillCam)',
        'Occult Gastrointestinal Bleeding & Vascular Malformations',
        'Celiac Disease, Microscopic Colitis & Severe Malabsorption',
        'Second-Opinion Comprehensive Clinical Evaluations'
      ],
      reviews: [
        {
          rating: '★★★★★',
          quote: '“After seeing three different clinics with no answers, Dr. Reed correctly diagnosed my condition during our very first consultation. A master diagnostician with unmatched bedside presence.”',
          author: 'Patricia N. (Diagnostic Consult Patient)'
        },
        {
          rating: '★★★★★',
          quote: '“The depth of clinical knowledge Dr. Reed brings to the table is astounding. He resolved my refractory reflux after a wireless Bravo study that showed exactly what was happening.”',
          author: 'Kevin T. (GERD Patient)'
        }
      ],
      clinicDays: 'Tuesday, Wednesday',
      insurances: 'BlueCross, Aetna, Cigna, Medicare, Premera, Regence',
      location: 'Suite 450, Executive Diagnostic Suite',
      procedureText: 'Explore Comprehensive Consultation',
      procedureLink: 'service-details.html?service=consultation',
      bookText: 'Book Consultation with Dr. Reed →'
    }
  };

  /**
   * Helper to parse query parameter from URL
   */
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Render doctor details on page
   */
  function renderDoctor(doctorKey, updateUrl) {
    let key = (doctorKey || '').toLowerCase().trim();

    // Map common aliases
    if (key.includes('carter') || key === 'maya') key = 'maya-carter';
    else if (key.includes('vance') || key === 'julian') key = 'julian-vance';
    else if (key.includes('chen') || key === 'sophia') key = 'sophia-chen';
    else if (key.includes('thorne') || key === 'aris') key = 'aris-thorne';
    else if (key.includes('rostova') || key === 'elena') key = 'elena-rostova';
    else if (key.includes('reed') || key === 'marcus') key = 'marcus-reed';

    if (!DOCTORS_DATA[key]) {
      key = 'maya-carter';
    }

    const doc = DOCTORS_DATA[key];
    if (!doc) return;

    // 1. Document title & meta
    document.title = doc.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', doc.metaDesc);

    // 2. Hero Elements
    const heroImg = document.getElementById('doctorHeroImg');
    if (heroImg) {
      heroImg.src = doc.photo;
      heroImg.alt = `${doc.name} portrait`;
    }

    const badge = document.getElementById('doctorBadge');
    if (badge) badge.textContent = doc.badge;

    const name = document.getElementById('doctorName');
    if (name) name.textContent = doc.name;

    const subTitle = document.getElementById('doctorSubTitle');
    if (subTitle) subTitle.textContent = doc.specialty;

    const lead = document.getElementById('doctorLead');
    if (lead) lead.textContent = doc.lead;

    const edu = document.getElementById('doctorEdu');
    if (edu) edu.textContent = doc.education;

    const certs = document.getElementById('doctorCerts');
    if (certs) certs.textContent = doc.certifications;

    const rating = document.getElementById('doctorRating');
    if (rating) rating.textContent = doc.rating;

    const heroBookBtn = document.getElementById('doctorHeroBookBtn');
    if (heroBookBtn) {
      heroBookBtn.textContent = doc.bookText;
      heroBookBtn.href = `appointment.html?doctor=${doc.id}`;
    }

    const heroProcBtn = document.getElementById('doctorHeroProcBtn');
    if (heroProcBtn) {
      heroProcBtn.textContent = doc.procedureText;
      heroProcBtn.href = doc.procedureLink;
    }

    // 3. Biography Section
    const bioContainer = document.getElementById('doctorBioContainer');
    if (bioContainer && Array.isArray(doc.bio)) {
      bioContainer.innerHTML = doc.bio
        .map(p => `<p class="text-muted">${p}</p>`)
        .join('');
    }

    // 4. Clinical Interests Grid
    const interestsGrid = document.getElementById('doctorInterestsGrid');
    if (interestsGrid && Array.isArray(doc.interests)) {
      interestsGrid.innerHTML = doc.interests
        .map(
          item => `
          <div class="col-md-6">
            <div class="p-2.5 bg-light rounded-3 border small d-flex align-items-center gap-2" style="font-weight: 500;">
              <span style="color: var(--gc-primary); font-weight: 800;">✓</span>
              <span>${item}</span>
            </div>
          </div>
        `
        )
        .join('');
    }

    // 5. Patient Reviews
    const reviewsContainer = document.getElementById('doctorReviewsContainer');
    if (reviewsContainer && Array.isArray(doc.reviews)) {
      reviewsContainer.innerHTML = doc.reviews
        .map(
          (rev, idx) => `
          <div class="${idx < doc.reviews.length - 1 ? 'border-bottom pb-3 mb-3' : ''}">
            <div class="star-rating mb-1 text-warning">${rev.rating}</div>
            <p class="small text-muted mb-1 fst-italic">${rev.quote}</p>
            <small class="fw-bold text-dark">— ${rev.author}</small>
          </div>
        `
        )
        .join('');
    }

    // 6. Sidebar Widget
    const sidebarAccepting = document.getElementById('doctorSidebarAccepting');
    if (sidebarAccepting) {
      sidebarAccepting.textContent = `${doc.shortName} is currently accepting new adult patients for consultations and procedure slots.`;
    }

    const clinicDays = document.getElementById('doctorClinicDays');
    if (clinicDays) clinicDays.textContent = doc.clinicDays;

    const insurances = document.getElementById('doctorInsurances');
    if (insurances) insurances.textContent = doc.insurances;

    const location = document.getElementById('doctorLocation');
    if (location) location.textContent = doc.location;

    const sidebarBookBtn = document.getElementById('doctorSidebarBookBtn');
    if (sidebarBookBtn) {
      sidebarBookBtn.textContent = `Book with ${doc.shortName}`;
      sidebarBookBtn.href = `appointment.html?doctor=${doc.id}`;
    }

    // 7. Update Active state in Doctor Switcher Bar
    const switcherBtns = document.querySelectorAll('.doctor-switcher-btn');
    switcherBtns.forEach(btn => {
      if (btn.getAttribute('data-doctor') === key) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });

    // 8. Update URL if requested
    if (updateUrl && window.history && window.history.pushState) {
      const newUrl = `${window.location.pathname}?doctor=${key}`;
      window.history.pushState({ doctor: key }, '', newUrl);
    }
  }

  /**
   * Build Interactive Sticky Doctor Switcher Bar
   */
  function buildDoctorSwitcherBar() {
    const mainElem = document.querySelector('main');
    if (!mainElem) return;

    const doctorList = [
      { key: 'maya-carter', label: 'Dr. Maya Carter' },
      { key: 'julian-vance', label: 'Dr. Julian Vance' },
      { key: 'sophia-chen', label: 'Dr. Sophia Chen' },
      { key: 'aris-thorne', label: 'Dr. Aris Thorne' },
      { key: 'elena-rostova', label: 'Dr. Elena Rostova' },
      { key: 'marcus-reed', label: 'Dr. Marcus Reed' }
    ];

    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'service-switcher-bar border-bottom py-2 shadow-xs';
    switcherContainer.style.backgroundColor = 'var(--gc-card-bg, #ffffff)';
    switcherContainer.style.position = 'sticky';
    switcherContainer.style.top = '72px';
    switcherContainer.style.zIndex = '990';

    switcherContainer.innerHTML = `
      <div class="container d-flex align-items-center gap-2 overflow-x-auto py-1" style="scrollbar-width: thin;">
        <span class="small fw-bold text-muted text-uppercase text-nowrap me-2 d-none d-md-inline" style="letter-spacing: 0.5px;">Select Specialist:</span>
        <div class="d-flex align-items-center gap-1.5 flex-nowrap" id="doctorSwitcherPills">
          ${doctorList
            .map(
              item => `
            <button type="button" class="btn btn-sm service-switcher-btn doctor-switcher-btn" data-doctor="${item.key}" style="white-space: nowrap; font-size: 0.8125rem; font-weight: 600; padding: 0.35rem 0.75rem; border-radius: 999px; transition: all 0.2s ease;">
              ${item.label}
            </button>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    const firstSection = mainElem.querySelector('section');
    if (firstSection) {
      mainElem.insertBefore(switcherContainer, firstSection.nextSibling);
    } else {
      mainElem.prepend(switcherContainer);
    }

    const switcherBtns = switcherContainer.querySelectorAll('.doctor-switcher-btn');
    switcherBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedKey = this.getAttribute('data-doctor');
        renderDoctor(selectedKey, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // Handle browser back/forward navigation
  window.addEventListener('popstate', function (event) {
    if (event.state && event.state.doctor) {
      renderDoctor(event.state.doctor, false);
    } else {
      const paramKey = getQueryParam('doctor') || getQueryParam('id') || getQueryParam('name');
      renderDoctor(paramKey || 'maya-carter', false);
    }
  });

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    buildDoctorSwitcherBar();

    const initialDoctor = getQueryParam('doctor') || getQueryParam('id') || getQueryParam('name') || 'maya-carter';
    renderDoctor(initialDoctor, false);
  });
})();
