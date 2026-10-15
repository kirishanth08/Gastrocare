/**
 * GastroCare Gastroenterology & Digestive Health Clinic
 * Dynamic Blog Article Details Controller & Content Store
 * Supports direct loading via ?article=<id> or ?id=<id>
 */
(function() {
  'use strict';

  const BLOG_ARTICLES = {
    'gut-brain': {
      id: 'gut-brain',
      badge: 'GUT-BRAIN AXIS',
      title: 'THE GUT-BRAIN CONNECTION: HOW NEUROMODULATION CALMS IBS SYMPTOMS.',
      author: 'Dr. Maya Carter, MD, FACG',
      authorImg: 'assets/images/doctors/dr-maya-carter.jpg',
      authorRole: 'Executive Medical Director • Harvard Medical School Fellow',
      authorBio: 'Dr. Carter leads our interventional endoscopy and clinical research initiatives at GastroCare Bellevue Pavilion.',
      date: 'October 12, 2026',
      readTime: '6 Min Read',
      img: 'assets/images/blog/blog-1.jpg',
      imgAlt: 'Enteric Nervous System and Gut Brain Axis Illustration',
      pageTitle: 'The Gut-Brain Connection: How Neuromodulation Calms IBS | GastroCare Blog',
      metaDesc: 'Explore how enteric nervous system signaling, visceral hypersensitivity, and low-dose neuromodulators offer lasting relief in refractory IBS.',
      contentHtml: `
        <h3 class="mb-3">Why the Digestive Tract is Known as the "Second Brain"</h3>
        <p class="text-muted">For decades, patients suffering from chronic bloating, visceral cramping, and irregular bowel habits were told that their diagnostic endoscopy appeared "completely normal" and that their distress was purely psychological. Today, neuro-gastroenterology paints a fundamentally different picture.</p>
        <p class="text-muted">The human gastrointestinal tract is innervated by the Enteric Nervous System (ENS), containing over 500 million neurons—more than the entire spinal cord. The ENS communicates continuously with the Central Nervous System via bidirectional signaling along the vagus nerve and the hypothalamic-pituitary-adrenal (HPA) axis.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Key Takeaway:</strong>
            <small>In IBS patients, normal intestinal distension caused by routine gas or digestion is amplified into severe pain signals by a hyperactive central nervous system—a phenomenon known as visceral hypersensitivity.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">The Role of Visceral Neuromodulators</h3>
        <p class="text-muted">When dietary adjustments such as the low-FODMAP protocol do not produce complete remission, gastroenterologists employ visceral neuromodulators. Prescribed at small fractions of the doses used in psychiatry, these agents recalibrate the sensitivity threshold of intestinal pain receptors.</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>1. Tricyclic Neuromodulators (TCAs):</strong> Slow rapid colonic transit and block pain signaling in diarrhea-predominant IBS (IBS-D).</li>
          <li class="mb-2"><strong>2. Selective Serotonin Modulators (SSRIs):</strong> Stimulate delayed transit and alleviate severe abdominal distension in constipation-predominant IBS (IBS-C).</li>
          <li class="mb-2"><strong>3. Gut-Directed Hypnotherapy:</strong> Clinical trials demonstrate that structured vagal relaxation exercises reduce visceral hypersensitivity by over 60%.</li>
        </ul>

        <h3 class="mt-4 mb-3">A Multidisciplinary Approach</h3>
        <p class="text-muted">At GastroCare, we combine prescription motility therapeutics with GI-specialized clinical dietitians and stress resilience protocols to give our patients comprehensive, lasting relief.</p>
      `
    },

    'colon-cancer-screening': {
      id: 'colon-cancer-screening',
      badge: 'PREVENTION & SURVEILLANCE',
      title: 'WHY 45 IS THE NEW 50 FOR COLON CANCER SCREENING.',
      author: 'Dr. Aris Thorne, MD, FACS',
      authorImg: 'assets/images/doctors/dr-aris-thorne.jpg',
      authorRole: 'Colorectal Surgery Lead • Memorial Sloan Kettering Fellow',
      authorBio: 'Dr. Thorne specializes in minimally invasive laparoscopic colorectal resections and complex polyposis syndromes.',
      date: 'September 28, 2026',
      readTime: '5 Min Read',
      img: 'assets/images/blog/blog-2.jpg',
      imgAlt: 'Preventative Colonoscopy Screening Technology',
      pageTitle: 'Why 45 Is the New 50 for Colon Cancer Screening | GastroCare Blog',
      metaDesc: 'Learn why the USPSTF lowered screening guidelines to age 45 and how preventative colonoscopy catches precancerous adenomas early.',
      contentHtml: `
        <h3 class="mb-3">The Urgent Need for Earlier Detection</h3>
        <p class="text-muted">In 2021, the U.S. Preventive Services Task Force (USPSTF) officially updated national clinical guidelines, lowering the recommended start age for routine colorectal cancer screening from 50 to 45. This landmark revision reflects compelling epidemiological evidence: colorectal cancer incidence rates have climbed by over 45% among adults younger than 50 over the last two decades.</p>
        <p class="text-muted">Colorectal cancer almost invariably begins as a benign adenomatous polyp on the intestinal lining. Over a 5-to-10 year window, these polyps can accumulate genetic mutations and transition into invasive adenocarcinoma. By screening starting at age 45, physicians identify and remove lesions during this critical asymptomatic pre-cancerous window.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Crucial Fact:</strong>
            <small>Over 90% of colorectal cancer deaths can be prevented when precancerous polyps are identified and resected during routine screening colonoscopy.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">Colonoscopy vs. Stool-Based DNA Tests</h3>
        <p class="text-muted">While at-home stool DNA or FIT kits provide non-invasive options, they serve purely as detection mechanisms—not prevention. If a stool test returns positive, an immediate diagnostic colonoscopy is still required. In contrast, colonoscopy is both diagnostic and therapeutic:</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>Simultaneous Polypectomy:</strong> Suspect polyps are painlessly removed using cold snare or endoscopic mucosal resection (EMR) in the same session.</li>
          <li class="mb-2"><strong>Artificial Intelligence Assistance:</strong> GastroCare employs AI-assisted optical polyp detection, boosting adenoma detection rates into the top 1% nationally.</li>
          <li class="mb-2"><strong>Low-Volume Prep Comfort:</strong> Modern split-dose bowel preparations require only 16 to 32 oz of active solution, eliminating the unpleasant large-volume prep jugs of the past.</li>
        </ul>

        <h3 class="mt-4 mb-3">Taking Action Before Symptoms Arise</h3>
        <p class="text-muted">Colorectal polyps rarely produce early warning signs like rectal bleeding or altered bowel habits until they reach advanced stages. If you are 45 or older—or have a first-degree family history of colorectal cancer—scheduling a screening consultation is the most effective proactive healthcare decision you can make.</p>
      `
    },

    'sibo-vs-ibs': {
      id: 'sibo-vs-ibs',
      badge: 'MICROBIOME & MOTILITY',
      title: 'IS IT IBS OR SIBO? THE DIAGNOSTIC VALUE OF HYDROGEN BREATH ASSAYS.',
      author: 'Dr. Sophia Chen, MD, PhD',
      authorImg: 'assets/images/doctors/dr-sophia-chen.jpg',
      authorRole: 'Neuro-Gastroenterology & Motility Program Director • Stanford Fellow',
      authorBio: 'Dr. Chen is an internationally recognized authority on high-resolution esophageal manometry, anorectal biofeedback, and complex dysmotility.',
      date: 'September 14, 2026',
      readTime: '7 Min Read',
      img: 'assets/images/blog/blog-3.jpg',
      imgAlt: 'Hydrogen and Methane Breath Testing Diagnostic Procedure',
      pageTitle: 'Is It IBS or SIBO? Diagnostic Hydrogen Breath Assays | GastroCare Blog',
      metaDesc: 'Discover the clinical distinction between IBS and Small Intestinal Bacterial Overgrowth (SIBO) and how breath testing guides targeted antimicrobial treatment.',
      contentHtml: `
        <h3 class="mb-3">When Bloating Isn't Just "Irritable Bowel"</h3>
        <p class="text-muted">Millions of patients diagnosed with Irritable Bowel Syndrome struggle with severe postprandial abdominal distension, excessive gas, and cognitive fatigue. In up to 60% of these patients, the true underlying driver is not generalized functional hypersensitivity, but Small Intestinal Bacterial Overgrowth (SIBO).</p>
        <p class="text-muted">Under normal anatomical conditions, the vast majority of our microbiome resides in the colon (upwards of 10^12 bacteria/mL), while the upper small intestine remains relatively sterile (<10^3 bacteria/mL). When migrating motor complex (MMC) cleansing waves are disrupted, colonic flora migrate backward into the jejunum and ileum, fermenting simple carbohydrates before the host can absorb them.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Pathophysiology Insight:</strong>
            <small>Human cells cannot produce hydrogen or methane gas. Any elevation in breath hydrogen or methane during an oral carbohydrate challenge is direct biological evidence of premature microbial fermentation.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">The Diagnostic Precision of 3-Hour Breath Assays</h3>
        <p class="text-muted">At GastroCare, we utilize non-invasive 3-hour lactulose and glucose breath testing measuring parts per million (PPM) of both hydrogen and methane:</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>Hydrogen-Dominant SIBO:</strong> A rise of ≥20 PPM over baseline within 90 minutes. Strongly correlated with rapid transit, diarrhea, and nutrient malabsorption.</li>
          <li class="mb-2"><strong>Intestinal Methanogen Overgrowth (IMO):</strong> A methane level of ≥10 PPM at any point in the test. Methanogenic archaea (such as Methanobrevibacter smithii) slow peristalsis, causing severe refractory constipation.</li>
          <li class="mb-2"><strong>Hydrogen Sulfide (H2S) SIBO:</strong> Characterized by flatlined curves accompanied by sulfur-smelling gas, visceral pain, and systemic inflammatory symptoms.</li>
        </ul>

        <h3 class="mt-4 mb-3">Targeted Eradication and Motility Restoration</h3>
        <p class="text-muted">Unlike broad-spectrum systemic antibiotics that deplete healthy colonic diversity, SIBO is treated with targeted, non-absorbable agents like rifaximin (often combined with neomycin for methane IMO). Treatment is paired with prokinetic motility agents to restore the migrating motor complex and prevent recurrence.</p>
      `
    },

    'silent-reflux': {
      id: 'silent-reflux',
      badge: 'ESOPHAGEAL HEALTH',
      title: 'SILENT REFLUX: RECOGNIZING THE NON-HEARTBURN SIGNS OF GERD.',
      author: 'Dr. Marcus Reed, MD, MACG',
      authorImg: 'assets/images/doctors/dr-marcus-reed.jpg',
      authorRole: 'Master of the ACG & Diagnostic Dilemmas Lead • UCSF Fellow',
      authorBio: 'With 24+ years of clinical practice, Dr. Reed provides senior expert consultations for complex diagnostic dilemmas and wireless capsule endoscopy.',
      date: 'August 30, 2026',
      readTime: '5 Min Read',
      img: 'assets/images/blog/blog-4.jpg',
      imgAlt: 'Esophageal pH Monitoring and Silent Reflux Diagnosis',
      pageTitle: 'Silent Reflux (LPR): Recognizing Non-Heartburn Signs | GastroCare Blog',
      metaDesc: 'Understand Laryngopharyngeal Reflux (LPR), why silent acid reflux lacks typical heartburn, and how 96-hour wireless Bravo studies pinpoint the root cause.',
      contentHtml: `
        <h3 class="mb-3">When Reflux Bypasses the Chest</h3>
        <p class="text-muted">Most people associate Gastroesophageal Reflux Disease (GERD) with retrosternal burning after meals. However, millions of individuals experience severe esophageal and upper airway damage without ever feeling classical heartburn. This clinical condition is known as Laryngopharyngeal Reflux (LPR), or "silent reflux."</p>
        <p class="text-muted">In silent reflux, aerosolized micro-droplets of gastric acid and the digestive enzyme pepsin travel through the upper esophageal sphincter into the larynx, pharynx, vocal cords, and bronchial tree. While the esophageal lining has evolved protective mucosal barriers, the delicate laryngeal tissues are up to 100 times more vulnerable to enzymatic injury.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Warning Signs of Silent Reflux:</strong>
            <small>Chronic morning throat clearing, unexplained hoarseness, persistent dry cough, globus sensation (feeling of a pill stuck in the throat), and dental enamel erosion are hallmark signs of LPR.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">Definitive Diagnosis with 96-Hour Wireless Bravo Studies</h3>
        <p class="text-muted">Because silent reflux frequently involves weakly acidic or gaseous reflux that fails to respond to empiric high-dose proton pump inhibitors (PPIs), empirical medication trials often fail. At GastroCare, we establish definitive physiological proof using cutting-edge diagnostics:</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>Wireless Bravo pH Capsule:</strong> A tiny miniature capsule temporarily attached to the esophageal mucosa during a brief endoscopy continuously transmits acid exposure data to a wireless recorder for 96 hours during normal daily activities.</li>
          <li class="mb-2"><strong>High-Resolution Esophageal Manometry:</strong> Evaluates lower and upper esophageal sphincter tone and peristaltic clearance strength to rule out achalasia or esophageal motility disorders.</li>
          <li class="mb-2"><strong>Endoscopic Barrett's Surveillance:</strong> High-definition narrow-band imaging (NBI) inspects the squamous-columnar junction for intestinal metaplasia (Barrett's esophagus).</li>
        </ul>

        <h3 class="mt-4 mb-3">Comprehensive Reflux Management</h3>
        <p class="text-muted">Treatment addresses both chemical acid production and physical mechanical barriers: alginate raft formulations to block aerosolized pepsin, evening meal timing protocols, weight management, and endoscopic barrier procedures when indicated.</p>
      `
    },

    'low-fodmap': {
      id: 'low-fodmap',
      badge: 'CLINICAL NUTRITION',
      title: 'NAVIGATING THE LOW-FODMAP DIET WITHOUT LOSING MICROBIOME DIVERSITY.',
      author: 'Dr. Elena Rostova, MD',
      authorImg: 'assets/images/doctors/dr-elena-rostova.jpg',
      authorRole: 'Inflammatory Bowel Disease Clinical Chair • Cleveland Clinic Fellow',
      authorBio: "Dr. Rostova directs GastroCare's specialized nutrition programs and clinical biologic therapy for Crohn's, Colitis, and refractory IBS.",
      date: 'August 16, 2026',
      readTime: '6 Min Read',
      img: 'assets/images/blog/blog-5.jpg',
      imgAlt: 'Nutritious Low FODMAP Whole Foods and Gut Microbiome Science',
      pageTitle: 'Navigating the Low-FODMAP Diet Safely | GastroCare Blog',
      metaDesc: 'Discover the clinical 3-phase low-FODMAP protocol for IBS relief without starving beneficial gut bacteria or compromising microbiome diversity.',
      contentHtml: `
        <h3 class="mb-3">The Promise and Peril of Elimination Diets</h3>
        <p class="text-muted">Developed by researchers at Monash University, the Low-FODMAP diet has emerged as the most clinically validated nutritional intervention for Irritable Bowel Syndrome, delivering significant symptom relief in 70% to 75% of patients. FODMAPs (Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols) are short-chain carbohydrates that draw excess fluid into the bowel and ferment into gas.</p>
        <p class="text-muted">However, a critical misconception has emerged: many patients treat the low-FODMAP diet as a permanent lifestyle. Restricting prebiotic fibers (such as fructo-oligosaccharides and inulin found in onions, garlic, and wheat) over months starves essential bifidobacteria and reduces the production of short-chain fatty acids (SCFAs) like butyrate, which nourish colonocytes and regulate gut immunity.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Clinical Principle:</strong>
            <small>The Low-FODMAP diet is a temporary diagnostic tool, NOT a forever diet. Phase 2 (Reintroduction) and Phase 3 (Personalization) are essential to prevent microbial depletion.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">The Proper 3-Phase Clinical Protocol</h3>
        <p class="text-muted">At GastroCare, our GI-specialized registered dietitians guide patients through structured, safe progression:</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>Phase 1: Strict Elimination (2 to 6 weeks):</strong> Swap high-FODMAP staples for low-FODMAP alternatives (e.g., sourdough spelt instead of wheat, garlic-infused olive oil instead of minced garlic). Stop as soon as symptom control is achieved.</li>
          <li class="mb-2"><strong>Phase 2: Systematic Challenge (6 to 8 weeks):</strong> Reintroduce one specific FODMAP subgroup at a time in escalating doses over 3 days (e.g., testing fructose with honey, lactose with milk, sorbitol with avocado) while logging symptoms.</li>
          <li class="mb-2"><strong>Phase 3: Long-Term Personalization:</strong> Reintegrate all well-tolerated FODMAP groups back into the regular diet, avoiding only your personalized trigger foods in excessive quantities.</li>
        </ul>

        <h3 class="mt-4 mb-3">Preserving Microbial Richness</h3>
        <p class="text-muted">By personalizing your dietary roadmap, you achieve complete control over visceral spasms and urgency while continuing to feed a thriving, resilient intestinal microbiome.</p>
      `
    },

    'fatty-liver-elastography': {
      id: 'fatty-liver-elastography',
      badge: 'HEPATOLOGY & LIVER WELLNESS',
      title: 'METABOLIC FATTY LIVER: THE POWER OF EARLY NON-INVASIVE ELASTOGRAPHY.',
      author: 'Dr. Julian Vance, MD, PhD',
      authorImg: 'assets/images/doctors/dr-julian-vance.jpg',
      authorRole: 'Hepatology Lead & Interventional Endoscopist • Johns Hopkins Fellow',
      authorBio: 'Dr. Vance leads GastroCare’s Comprehensive Liver Wellness Center, specializing in non-invasive FibroScan® elastography and interventional therapeutics.',
      date: 'July 28, 2026',
      readTime: '5 Min Read',
      img: 'assets/images/blog/blog-6.jpg',
      imgAlt: 'Non-Invasive Liver Elastography FibroScan Diagnostic Consultation',
      pageTitle: 'Metabolic Fatty Liver & Non-Invasive FibroScan | GastroCare Blog',
      metaDesc: 'Discover how painless FibroScan ultrasound elastography accurately measures liver stiffness and fat accumulation to reverse MASLD before fibrosis progresses.',
      contentHtml: `
        <h3 class="mb-3">The Silent Epidemic of MASLD</h3>
        <p class="text-muted">Metabolic dysfunction-associated steatotic liver disease (MASLD, formerly known as NAFLD) has quietly become the most common chronic liver condition worldwide, affecting more than 30% of the adult population. Fueled by insulin resistance, metabolic syndrome, and visceral adiposity, excess triglycerides accumulate within hepatocytes.</p>
        <p class="text-muted">The danger of fatty liver lies in its profound silence. Hepatocytes do not possess somatic sensory pain fibers; therefore, as inflammation smolders (MASH) and microscopic scar tissue (fibrosis) stiffens the liver architecture, patients feel entirely normal. Routine liver enzyme blood tests (ALT and AST) are within normal clinical reference ranges in up to 50% of individuals with biopsy-proven progressive fibrosis.</p>

        <div class="gc-disclaimer-box my-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong class="d-block">Diagnostic Breakthrough:</strong>
            <small>Historically, determining whether a fatty liver had developed dangerous fibrosis required a surgical needle biopsy. Today, 10-minute non-invasive elastography delivers superior volumetric assessment with zero pain and zero recovery time.</small>
          </div>
        </div>

        <h3 class="mt-4 mb-3">How Transient Elastography (FibroScan®) Works</h3>
        <p class="text-muted">At GastroCare, we utilize hospital-grade vibration-controlled transient elastography (VCTE) to quantify liver health across two independent quantitative metrics:</p>
        <ul class="list-unstyled text-muted mb-4">
          <li class="mb-2"><strong>Liver Stiffness Measurement (E in kilopascals - kPa):</strong> The probe emits a painless low-frequency mechanical pulse through the intercostal space. Shear wave velocity is tracked via ultrasound; the faster the wave travels, the stiffer the liver tissue, staging fibrosis from F0 (no fibrosis) to F4 (cirrhosis).</li>
          <li class="mb-2"><strong>Controlled Attenuation Parameter (CAP in dB/m):</strong> Measures the acoustic attenuation of ultrasound signals to calculate the exact percentage of hepatic steatosis from S1 (<33% fat) to S3 (>66% fat).</li>
        </ul>

        <h3 class="mt-4 mb-3">Reversing Liver Damage Before It's Too Late</h3>
        <p class="text-muted">The liver is unique among vital organs in its remarkable capacity for regeneration. When steatosis and early-stage fibrosis (F1–F2) are detected early, structured dietary interventions, target cardiovascular conditioning, weight reduction, and emerging metabolic receptor therapeutics can completely reverse liver scarring and restore healthy enzymatic function.</p>
      `
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
   * Render selected blog article
   */
  function renderBlogArticle(articleKey) {
    let key = (articleKey || '').toLowerCase().trim();

    // Map common aliases
    if (key.includes('gut') || key.includes('brain') || key.includes('ibs') || key === '1') key = 'gut-brain';
    else if (key.includes('colon') || key.includes('cancer') || key.includes('screen') || key === '45' || key === '2') key = 'colon-cancer-screening';
    else if (key.includes('sibo') || key.includes('hydrogen') || key.includes('breath') || key === '3') key = 'sibo-vs-ibs';
    else if (key.includes('reflux') || key.includes('gerd') || key.includes('silent') || key === '4') key = 'silent-reflux';
    else if (key.includes('fodmap') || key.includes('diet') || key.includes('microbiome') || key === '5') key = 'low-fodmap';
    else if (key.includes('liver') || key.includes('fatty') || key.includes('elastography') || key.includes('fibro') || key === '6') key = 'fatty-liver-elastography';

    if (!BLOG_ARTICLES[key]) {
      key = 'gut-brain';
    }

    const post = BLOG_ARTICLES[key];
    if (!post) return;

    // Document title & meta
    document.title = post.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.metaDesc);

    // Hero elements
    const badge = document.getElementById('blogBadge');
    if (badge) badge.textContent = post.badge;

    const title = document.getElementById('blogTitle');
    if (title) title.textContent = post.title;

    const author = document.getElementById('blogAuthor');
    if (author) author.textContent = post.author;

    const date = document.getElementById('blogDate');
    if (date) date.textContent = post.date;

    const readTime = document.getElementById('blogReadTime');
    if (readTime) readTime.textContent = post.readTime;

    // Main article image
    const blogImg = document.getElementById('blogImg');
    if (blogImg) {
      blogImg.src = post.img;
      blogImg.alt = post.imgAlt;
    }

    // Article body content
    const bodyContent = document.getElementById('blogBodyContent');
    if (bodyContent) {
      bodyContent.innerHTML = post.contentHtml;
    }

    // Author card elements
    const authorImg = document.getElementById('blogAuthorImg');
    if (authorImg) {
      authorImg.src = post.authorImg;
      authorImg.alt = post.author;
    }

    const authorName = document.getElementById('blogAuthorName');
    if (authorName) authorName.textContent = post.author;

    const authorRole = document.getElementById('blogAuthorRole');
    if (authorRole) authorRole.textContent = post.authorRole;

    const authorBio = document.getElementById('blogAuthorBio');
    if (authorBio) authorBio.textContent = post.authorBio;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const articleParam = getQueryParam('article') || getQueryParam('id') || getQueryParam('post');
    renderBlogArticle(articleParam);
  });
})();
