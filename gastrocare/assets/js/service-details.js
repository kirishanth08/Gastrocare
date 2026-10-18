/**
 * GastroCare - Dynamic Service Details Engine
 * Dynamically renders customized clinical information for all 12 specialized services
 * based on the '?service=' query parameter or interactive switcher.
 */

(function () {
  'use strict';

  const SERVICES_DATA = {
    consultation: {
      id: 'consultation',
      pageTitle: "Gastroenterology Consultation | GastroCare Clinic",
      metaDesc: "Comprehensive clinical evaluations for persistent abdominal pain, chronic bloating, altered bowel habits, and individualized care plans.",
      heroBadge: "PRIMARY EVALUATION & CLINICAL TRIAGE",
      heroTitle: "COMPREHENSIVE GASTROENTEROLOGY CONSULTATION.",
      heroLead: "In-depth 45-minute physician evaluations designed to uncover root causes of chronic abdominal pain, refractory bloating, altered bowel habits, and complex digestive symptoms without rushing.",
      heroImg: "assets/images/services/service-consultation.jpg",
      heroImgAlt: "Comprehensive Gastroenterology Consultation",
      bookBtnText: "Book Consultation &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Meet Our Physicians",
      secBtnLink: "doctors.html",
      capSubtitle: "CLINICAL EVALUATION FOCUS",
      capHeading: "WHAT WE INVESTIGATE DURING YOUR CONSULTATION.",
      capDesc: "We look beyond isolated symptoms to evaluate gut-brain interaction, prescription drug side effects, microbiome health, and systemic inflammatory indicators.",
      capabilities: [
        {
          title: "Chronic Abdominal Discomfort",
          desc: "Systematic physical exam and differential diagnosis for localized or diffuse upper and lower GI pain."
        },
        {
          title: "Altered Motility & Bowel Habits",
          desc: "Targeted phenotypic classification for persistent constipation, unexplained diarrhea, or alternating patterns."
        },
        {
          title: "Unexplained Nausea & Weight Shifts",
          desc: "Diagnostic triage for gastric emptying disorders, food intolerances, malabsorption, and metabolic shifts."
        },
        {
          title: "High-Risk Family History Triage",
          desc: "Genetic risk stratification and customized screening timelines for colorectal and digestive cancers."
        }
      ],
      quickFactsHeading: "Consultation Quick Facts",
      quickFacts: [
        { label: "Visit Duration", val: "45 Minutes Dedicated Time" },
        { label: "Consultation Mode", val: "In-Person or Secure Telehealth" },
        { label: "Referral Status", val: "Self-Referrals Welcome (No MD Order Required)" },
        { label: "Pre-Visit Intake", val: "Digital Health Questionnaire via Portal" },
        { label: "Insurance Coverage", val: "100% In-Network with Major Providers" }
      ],
      timelineSubtitle: "PATIENT JOURNEY",
      timelineHeading: "YOUR CONSULTATION & CARE WALKTHROUGH.",
      timelineDesc: "From the moment you step into our calm pavilion to your personalized treatment roadmap.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Detailed Intake & Health Audit",
          desc: "Arrive 15 minutes prior. Your nurse records vitals and reviews your complete medical, surgical, and dietary history."
        },
        {
          step: "STEP 2",
          title: "Unhurried Physician Deep-Dive",
          desc: "Your doctor listens attentively to your symptom timeline without interruptions, performing an abdominal examination."
        },
        {
          step: "STEP 3",
          title: "Diagnostic Strategy & Lab Orders",
          desc: "Together, you select necessary non-invasive lab markers, breath testing, or endoscopic evaluations with full cost transparency."
        },
        {
          step: "STEP 4",
          title: "Personalized Care Roadmap",
          desc: "Leave with immediate dietary symptom relief tactics, prescription coordination, and scheduled follow-up nurse check-ins."
        }
      ],
      doctorsSubtitle: "CONSULTING ATTENDING PHYSICIANS",
      doctorsHeading: "PHYSICIANS CONDUCTING GENERAL CONSULTATIONS.",
      doctorsDesc: "Our board-certified gastroenterologists take time to listen and build personalized treatment plans.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY DIRECTOR & CLINICAL LEAD",
          desc: "18+ years of expertise spanning diagnostic triage, complex reflux, and preventative gastrointestinal health.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Marcus Reed, MD, MACG",
          role: "SENIOR CONSULTANT & COMPLEX GI LEAD",
          desc: "Master of the American College of Gastroenterology focusing on diagnostic dilemmas and refractory gut symptoms.",
          image: "assets/images/doctors/dr-marcus-reed.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "TAKE CONTROL OF YOUR DIGESTION",
      ctaHeading: "READY TO GET CLARITY ON YOUR DIGESTIVE HEALTH?",
      ctaLead: "Schedule an unhurried, evidence-based consultation with our board-certified gastroenterology team today.",
      ctaBtnText: "Book Your Consultation Now &rarr;"
    },

    endoscopy: {
      id: 'endoscopy',
      pageTitle: "Upper Endoscopy (EGD) Details | GastroCare Clinic",
      metaDesc: "Comprehensive clinical guide to diagnostic upper endoscopy (EGD), mucosal inspection, preparation guidelines, and gentle recovery.",
      heroBadge: "UPPER DIGESTIVE TRACT IMAGING",
      heroTitle: "HIGH-DEFINITION UPPER ENDOSCOPY (EGD).",
      heroLead: "Gentle, precise mucosal inspection of the esophagus, stomach, and duodenum using Olympus EVIS X1 4K optics, propofol conscious sedation, and tissue-sparing micro-biopsies.",
      heroImg: "assets/images/services/service-endoscopy.jpg",
      heroImgAlt: "Upper Endoscopy Procedure",
      bookBtnText: "Book Upper Endoscopy &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Preparation Checklist",
      secBtnLink: "patient-dashboard/prep-instructions.html",
      capSubtitle: "DIAGNOSTIC CAPABILITIES",
      capHeading: "WHAT WE EVALUATE DURING UPPER ENDOSCOPY.",
      capDesc: "Direct visual endoscopy remains the gold standard because it allows simultaneous diagnosis and therapeutic intervention during a single gentle outpatient session.",
      capabilities: [
        {
          title: "Barrett's Esophagus Surveillance",
          desc: "HD narrow-band optical mapping to detect and monitor precancerous cellular changes in the distal esophagus."
        },
        {
          title: "H. Pylori & Peptic Ulcers",
          desc: "Rapid urease mucosal biopsies and visual ulcer grading to stop gastric erosion and burning pain."
        },
        {
          title: "Celiac Disease Duodenal Biopsies",
          desc: "Targeted villous architecture sampling from the post-bulbar duodenum to definitively confirm celiac disease."
        },
        {
          title: "Eosinophilic Esophagitis (EoE)",
          desc: "Microscopic esophageal ring and furrow analysis to diagnose allergic and inflammatory swallowing issues."
        }
      ],
      quickFactsHeading: "Procedure Quick Facts",
      quickFacts: [
        { label: "Sedation Type", val: "Monitored Propofol Conscious Sedation" },
        { label: "Procedure Duration", val: "12 to 15 Minutes" },
        { label: "Recovery Period", val: "30 to 45 Minutes in Private Bay" },
        { label: "Escort Required", val: "Yes (Adult driver required)" },
        { label: "Results Timeline", val: "Preliminary: Same Day • Biopsy: 48–72 Hrs" }
      ],
      timelineSubtitle: "WHAT TO EXPECT",
      timelineHeading: "YOUR DAY OF PROCEDURE WALKTHROUGH.",
      timelineDesc: "We eliminate procedural anxiety by making every step predictable, gentle, and transparent.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Arrival & Private Intake",
          desc: "Arrive 45 minutes prior. You are greeted in a private pre-op suite where vitals, IV access, and anesthesia consultation take place."
        },
        {
          step: "STEP 2",
          title: "Gentle Propofol Sedation",
          desc: "You are wheeled to the sterile suite. You receive gentle sedation and drift into a peaceful sleep in under 30 seconds."
        },
        {
          step: "STEP 3",
          title: "4K Mucosal Inspection & Biopsy",
          desc: "Dr. Carter examines mucosal surfaces with HD 4K optics. Any samples or cultures are collected with zero pain."
        },
        {
          step: "STEP 4",
          title: "Comfortable Awakening",
          desc: "You awaken in recovery with a warm beverage. Dr. Carter reviews preliminary findings with you and your escort before discharge."
        }
      ],
      doctorsSubtitle: "BOARD-CERTIFIED ENDOSCOPISTS",
      doctorsHeading: "SPECIALISTS PERFORMING UPPER ENDOSCOPY.",
      doctorsDesc: "Meet the physicians who will oversee your procedural comfort and clinical diagnostics.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY DIRECTOR",
          desc: "Over 14,000 completed endoscopies and advanced interventional procedures with a 99.8% patient comfort rating.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Julian Vance, MD, PhD",
          role: "HEPATOLOGY & ADVANCED ENDOSCOPY LEAD",
          desc: "Senior interventional endoscopist specializing in complex mucosal polypectomy, Barrett's, and biliary duct imaging.",
          image: "assets/images/doctors/dr-julian-vance.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "FAST-TRACK SCHEDULING",
      ctaHeading: "NEED AN ACCURATE UPPER GI EVALUATION?",
      ctaLead: "Fast-track appointments available with minimal wait times for diagnostic and urgent upper endoscopy.",
      ctaBtnText: "Schedule Upper Endoscopy Now &rarr;"
    },

    colonoscopy: {
      id: 'colonoscopy',
      pageTitle: "Screening & Diagnostic Colonoscopy | GastroCare Clinic",
      metaDesc: "Painless colorectal cancer screening with 99.8% adenoma detection, warm CO2 insufflation, and low-volume bowel preps.",
      heroBadge: "PREVENTATIVE ONCOLOGY & COLORECTAL HEALTH",
      heroTitle: "PRECISION SCREENING COLONOSCOPY.",
      heroLead: "The undisputed gold standard for colorectal cancer prevention. Achieving a documented 99.8% Adenoma Detection Rate with AI computer-aided polyp detection and warm CO2 comfort insufflation.",
      heroImg: "assets/images/services/service-colonoscopy.jpg",
      heroImgAlt: "Screening Colonoscopy Suite",
      bookBtnText: "Book Colonoscopy &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Prep Guide & Instructions",
      secBtnLink: "patient-dashboard/prep-instructions.html",
      capSubtitle: "PREVENTATIVE & DIAGNOSTIC SCOPE",
      capHeading: "WHAT WE DETECT & PREVENT DURING COLONOSCOPY.",
      capDesc: "Colonoscopy is both diagnostic and curative—precancerous adenomas are identified and removed on the spot before they can ever transform into cancer.",
      capabilities: [
        {
          title: "Precancerous Adenoma Snare Resection",
          desc: "Immediate, painless cold-snare polypectomy of flat, tubular, and sessile serrated polyps."
        },
        {
          title: "Crohn's & Ulcerative Colitis Staging",
          desc: "Direct endoscopic inspection of the colon and terminal ileum with biopsy confirmation of inflammatory activity."
        },
        {
          title: "Diverticular Disease & Bleeding Evaluation",
          desc: "Precise localization of diverticular pouches, vascular malformations, and active bleeding sites."
        },
        {
          title: "AI-Assisted Polyp Detection (CADe)",
          desc: "Deep learning algorithms scan every millimeter of mucosa at 60 fps to spotlight subtle flat lesions."
        }
      ],
      quickFactsHeading: "Colonoscopy Quick Facts",
      quickFacts: [
        { label: "Adenoma Detection Rate (ADR)", val: "99.8% (Top 1% in Washington State)" },
        { label: "Insufflation Medium", val: "100% Medical-Grade Warm CO2 (Zero Gas Pain)" },
        { label: "Bowel Prep Formula", val: "Gentle Split-Dose Low-Volume Solution" },
        { label: "Sedation Method", val: "Monitored Propofol Sedation (Zero Memory of Scope)" },
        { label: "Insurance Status", val: "100% In-Network Covered under ACA Preventative" }
      ],
      timelineSubtitle: "WALKTHROUGH",
      timelineHeading: "YOUR SIMPLE 4-STEP COLONOSCOPY EXPERIENCE.",
      timelineDesc: "Designed from ground up to replace dread with comfort and peace of mind.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Gentle Split-Dose Bowel Prep",
          desc: "Drink half your prep the evening before and the remainder 4 hours prior. Low volume, smooth flavor, gentle on stomach."
        },
        {
          step: "STEP 2",
          title: "Comfortable Pre-Op Arrival",
          desc: "Check into your private suite. Meet your board-certified anesthesiologist and gastroenterologist."
        },
        {
          step: "STEP 3",
          title: "20-Minute Painless Examination",
          desc: "Fall asleep peacefully. Dr. Carter inspects the entire colon and resects any polyps without sensation."
        },
        {
          step: "STEP 4",
          title: "Awakening & Written Report",
          desc: "Wake up feeling completely refreshed. Receive printed color images and pathology follow-up schedule."
        }
      ],
      doctorsSubtitle: "BOARD-CERTIFIED COLORECTAL SPECIALISTS",
      doctorsHeading: "PHYSICIANS PERFORMING COLONOSCOPIES.",
      doctorsDesc: "Our endoscopists maintain an ADR almost 4x higher than the national quality threshold.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY MEDICAL DIRECTOR",
          desc: "Pioneer in low-volume split prep and AI-assisted screening with over 14,000 flawless procedures.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Arthur Pendelton, MD",
          role: "SENIOR COLORECTAL SURVEILLANCE LEAD",
          desc: "16+ years specializing in hereditary colorectal cancer syndromes, Lynch syndrome, and advanced mucosal resection.",
          image: "assets/images/doctors/dr-arthur-pendelton.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "PREVENTION SAVES LIVES",
      ctaHeading: "SCHEDULE YOUR SCREENING COLONOSCOPY.",
      ctaLead: "If you are 45 or older, or have a family history of colon cancer, preventative screening is 100% covered by law.",
      ctaBtnText: "Book Your Screening Today &rarr;"
    },

    ibs: {
      id: 'ibs',
      pageTitle: "IBS & Motility Management Program | GastroCare Clinic",
      metaDesc: "Targeted phenotypic management for IBS-C, IBS-D, visceral hypersensitivity, and gut-directed nutrition therapy.",
      heroBadge: "FUNCTIONAL GASTROINTESTINAL DISORDERS",
      heroTitle: "PERSONALIZED IBS & MOTILITY CLINIC.",
      heroLead: "Comprehensive, multi-modal care combining Rome IV diagnostic phenotyping, gut-brain neuromodulation, dietary low-FODMAP protocols, and non-invasive breath biomarkers.",
      heroImg: "assets/images/services/service-ibs.jpg",
      heroImgAlt: "IBS & Gut Motility Clinic",
      bookBtnText: "Join IBS Program &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "GI Nutrition Counseling",
      secBtnLink: "service-details.html?service=nutrition",
      capSubtitle: "CLINICAL PHENOTYPING",
      capHeading: "WHAT WE TARGET IN OUR IBS CLINIC.",
      capDesc: "Irritable Bowel Syndrome is not in your head. It is a genuine disorder of gut-brain interaction requiring multifaceted biological and dietary intervention.",
      capabilities: [
        {
          title: "Rome IV Phenotyping (IBS-C, IBS-D, IBS-M)",
          desc: "Accurate classification to customize prokinetics, secretagogues, or antispasmodics specifically for your motility pattern."
        },
        {
          title: "Visceral Hypersensitivity Modulation",
          desc: "Targeted peripheral and central neuromodulators to desensitize overactive intestinal pain nerves."
        },
        {
          title: "Microbiome & Biomarker Screening",
          desc: "Fecal calprotectin, celiac serology, and inflammatory testing to rule out organic pathology with 100% certainty."
        },
        {
          title: "GI Dietitian-Led Food Elimination",
          desc: "Structured 3-phase Low-FODMAP protocol to identify specific food triggers without long-term nutritional restriction."
        }
      ],
      quickFactsHeading: "Program Quick Facts",
      quickFacts: [
        { label: "Care Model", val: "Integrated Gastroenterologist + Registered Dietitian" },
        { label: "Diagnostic Basis", val: "Rome IV Consensus Criteria + Biomarker Lab" },
        { label: "Remission Rate", val: "88% Patient Remission at 12 Weeks" },
        { label: "Consultation Mode", val: "In-Person Clinic & Telehealth Follow-ups" },
        { label: "Insurance Status", val: "Covered by Most Commercial & Medicare Plans" }
      ],
      timelineSubtitle: "TREATMENT ROADMAP",
      timelineHeading: "YOUR 4-PHASE PATH TO IBS REMISSION.",
      timelineDesc: "Evidence-backed structure replacing confusing trial-and-error with medical science.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Phenotyping & Biomarker Exclusions",
          desc: "Detailed stool and blood panels rule out IBD, celiac, and infections, establishing your precise motility profile."
        },
        {
          step: "STEP 2",
          title: "Neuromodulation & Motility Therapy",
          desc: "Targeted medications regulate colon transit time and calm hypersensitive visceral nerve endings."
        },
        {
          step: "STEP 3",
          title: "3-Phase Low-FODMAP Reintroduction",
          desc: "Work 1-on-1 with our registered GI dietitians to pinpoint exact carbohydrate triggers and expand your diet."
        },
        {
          step: "STEP 4",
          title: "Sustained Long-Term Gut Wellness",
          desc: "Maintain intestinal tranquility with personalized lifestyle strategies and on-demand portal messaging."
        }
      ],
      doctorsSubtitle: "IBS & MOTILITY FACULTY",
      doctorsHeading: "PHYSICIANS LEADING THE FUNCTIONAL GUT PROGRAM.",
      doctorsDesc: "Specialists in the gut-brain axis, neuro-gastroenterology, and therapeutic nutrition.",
      doctors: [
        {
          name: "Dr. Elena Rostova, MD",
          role: "IBD & MUCOSAL IMMUNOLOGY CHAIR",
          desc: "14+ years specializing in mucosal remission, gut barrier restoration, and biomarker differentiation.",
          image: "assets/images/doctors/dr-elena-rostova.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Sophia Martinez, MD",
          role: "FUNCTIONAL GI & MOTILITY DIRECTOR",
          desc: "Fellowship-trained in neuro-gastroenterology, Rome IV diagnostics, and visceral pain modulation.",
          image: "assets/images/doctors/dr-sophia-martinez.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "BREAK FREE FROM BLOATING",
      ctaHeading: "REGAIN CONTROL OVER YOUR DIGESTIVE COMFORT.",
      ctaLead: "Do not let unpredictable gut symptoms rule your schedule. Start our specialized IBS program today.",
      ctaBtnText: "Schedule IBS Evaluation &rarr;"
    },

    reflux: {
      id: 'reflux',
      pageTitle: "Acid Reflux & GERD Care Center | GastroCare Clinic",
      metaDesc: "Advanced diagnostics for severe heartburn, hiatal hernia, chronic cough, and catheter-free Bravo™ wireless pH monitoring.",
      heroBadge: "ESOPHAGEAL HEALTH & MOTILITY",
      heroTitle: "ADVANCED ACID REFLUX & GERD SOLUTIONS.",
      heroLead: "Definitive diagnostics and modern treatments for persistent heartburn, regurgitation, hiatal hernia, chronic cough, and non-cardiac chest pain using catheter-free wireless telemetry.",
      heroImg: "assets/images/services/service-reflux.jpg",
      heroImgAlt: "Acid Reflux and GERD Care",
      bookBtnText: "Book Reflux Evaluation &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Barrett's Esophagus Care",
      secBtnLink: "service-details.html?service=barretts",
      capSubtitle: "ADVANCED ESOPHAGEAL PHYSIOLOGY",
      capHeading: "HOW WE DIAGNOSE & SOLVE REFRACTORY REFLUX.",
      capDesc: "When over-the-counter antacids and PPIs stop working, our high-resolution motility tools find the mechanical and chemical cause.",
      capabilities: [
        {
          title: "Bravo™ 48-Hour Wireless pH Telemetry",
          desc: "A catheter-free miniature capsule measures real-time esophageal acid exposure while you eat and sleep normally."
        },
        {
          title: "High-Resolution Esophageal Manometry",
          desc: "36-sensor pressure catheter maps swallowing peristalsis and lower esophageal sphincter competency."
        },
        {
          title: "Non-Erosive Reflux (NERD) Triage",
          desc: "Distinguishes true acid exposure from esophageal hypersensitivity and functional heartburn to prevent unnecessary surgeries."
        },
        {
          title: "Hiatal Hernia & Sphincter Grading",
          desc: "Endoscopic flap-valve grading (Hill classification) to determine if endoscopic or surgical repair is indicated."
        }
      ],
      quickFactsHeading: "GERD Diagnostics Quick Facts",
      quickFacts: [
        { label: "pH Telemetry Method", val: "Bravo™ Wireless Capsule (100% Catheter-Free)" },
        { label: "Manometry Precision", val: "High-Resolution Solid State (Chicago Classification v4.0)" },
        { label: "Patient Comfort", val: "Outpatient Placement under Gentle Sedation" },
        { label: "Capsule Passage", val: "Detaches and passes naturally in 5–7 days" },
        { label: "DeMeester Score", val: "Quantitative Reflux Severity Score Delivered via Portal" }
      ],
      timelineSubtitle: "DIAGNOSTIC PATH",
      timelineHeading: "YOUR STEP-BY-STEP REFLUX DIAGNOSTIC TIMELINE.",
      timelineDesc: "Get an undeniable answer to what is causing your heartburn.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Upper Mucosal Endoscopy",
          desc: "Inspect the lining for esophagitis, hiatal hernia, or Barrett’s metaplasia under comfortable conscious sedation."
        },
        {
          step: "STEP 2",
          title: "Wireless Bravo™ Capsule Attachment",
          desc: "A vitamin-sized transmitter is painlessly attached to the esophageal wall without nasal tubes."
        },
        {
          step: "STEP 3",
          title: "48-Hour Real-Life Telemetry",
          desc: "Go home, eat your typical meals, and press recorder buttons whenever you feel reflux symptoms."
        },
        {
          step: "STEP 4",
          title: "Data Correlation & Solution Blueprint",
          desc: "Review your DeMeester acid score with Dr. Carter to finalize targeted medical, endoscopic, or surgical therapy."
        }
      ],
      doctorsSubtitle: "ESOPHAGEAL MOTILITY SPECIALISTS",
      doctorsHeading: "PHYSICIANS LEADING THE GERD CLINIC.",
      doctorsDesc: "Experts in chronic acid reflux, non-cardiac chest discomfort, and anti-reflux procedural planning.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY DIRECTOR",
          desc: "Specialist in Bravo wireless telemetry, endoscopic mucosal inspection, and long-term reflux management.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Marcus Reed, MD, MACG",
          role: "SENIOR CONSULTANT",
          desc: "Master clinician specializing in refractory GERD, PPI non-responders, and complex esophageal motility disorders.",
          image: "assets/images/doctors/dr-marcus-reed.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "STOP LIVING WITH HEARTBURN",
      ctaHeading: "DISCOVER THE ROOT CAUSE OF YOUR ACID REFLUX.",
      ctaLead: "Get definitive catheter-free pH testing and long-term relief from acid regurgitation and chest discomfort.",
      ctaBtnText: "Schedule Reflux Consultation &rarr;"
    },

    lab: {
      id: 'lab',
      pageTitle: "Digestive Biomarkers & Stool Lab | GastroCare Clinic",
      metaDesc: "Advanced non-invasive molecular stool PCR, fecal calprotectin, pancreatic elastase, and celiac serology diagnostics.",
      heroBadge: "NON-INVASIVE MOLECULAR DIAGNOSTICS",
      heroTitle: "DIGESTIVE BIOMARKERS & SPECIALIZED LAB.",
      heroLead: "Advanced clinical biomarker assays identifying gut inflammation, exocrine pancreatic insufficiency, occult bleeding, and enteric pathogen colonization without invasive testing.",
      heroImg: "assets/images/services/service-lab.jpg",
      heroImgAlt: "Digestive Health Diagnostic Lab",
      bookBtnText: "Order Diagnostic Workup &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "SIBO Breath Testing",
      secBtnLink: "service-details.html?service=sibo",
      capSubtitle: "MOLECULAR & IMMUNOLOGICAL PANELS",
      capHeading: "NON-INVASIVE ASSAYS PERFORMED IN OUR LAB.",
      capDesc: "Our high-precision CLIA-certified assays distinguish between functional disorders and organic intestinal inflammation in 48 hours.",
      capabilities: [
        {
          title: "Fecal Calprotectin & Lactoferrin",
          desc: "Quantitative neutrophil migration markers to definitively differentiate between IBS and inflammatory Crohn's/Colitis."
        },
        {
          title: "Multiplex Enteric Pathogen PCR",
          desc: "Rapid molecular screening for 22 bacterial, viral, and parasitic GI pathogens from a single collection."
        },
        {
          title: "Fecal Pancreatic Elastase-1 (PE-1)",
          desc: "Accurately quantifies exocrine pancreatic enzyme output to diagnose maldigestion and chronic pancreatitis."
        },
        {
          title: "Comprehensive Celiac Serology",
          desc: "Quantitative IgA anti-tissue transglutaminase (tTG-IgA) and deamidated gliadin peptides (DGP) panels."
        }
      ],
      quickFactsHeading: "Biomarker Lab Quick Facts",
      quickFacts: [
        { label: "Sample Method", val: "Stool Sample & Blood Serology (Zero Invasiveness)" },
        { label: "Turnaround Time", val: "24 to 48 Hours via Patient Portal" },
        { label: "Collection Convenience", val: "In-Clinic Drop-Off or Prepaid Home Mailer Kits" },
        { label: "Lab Certification", val: "CLIA & CAP Accredited Clinical Molecular Diagnostics" },
        { label: "Insurance Status", val: "Standard Diagnostic Code Covered by Commercial Plans" }
      ],
      timelineSubtitle: "TESTING PROCESS",
      timelineHeading: "HOW OUR NON-INVASIVE LAB TESTING WORKS.",
      timelineDesc: "Fast, hygienic, and convenient from order to clear physician consultation.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Clinical Test Selection",
          desc: "Your physician specifies targeted biomarker panels based on your symptom history during your visit."
        },
        {
          step: "STEP 2",
          title: "Convenient Sample Collection",
          desc: "Collect your sample at home using our sanitary, pre-measured preservation vial and prepaid courier mailer."
        },
        {
          step: "STEP 3",
          title: "Rapid Molecular Immunoassay",
          desc: "Our automated analyzers quantify inflammatory proteins and run multiplex PCR pathogen assays."
        },
        {
          step: "STEP 4",
          title: "Digital Result & Treatment Action",
          desc: "Results automatically sync to your Patient Portal with physician notes and tailored prescription therapies."
        }
      ],
      doctorsSubtitle: "DIAGNOSTIC LAB DIRECTORS",
      doctorsHeading: "PHYSICIANS OVERSEEING THE DIAGNOSTIC LAB.",
      doctorsDesc: "Our clinical directors interpret every complex biomarker panel in context with your health history.",
      doctors: [
        {
          name: "Dr. Elena Rostova, MD",
          role: "IBD CLINICAL CHAIR",
          desc: "Expert in fecal calprotectin kinetics, non-invasive therapeutic monitoring, and biologic optimization.",
          image: "assets/images/doctors/dr-elena-rostova.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Sophia Martinez, MD",
          role: "FUNCTIONAL GI & MOTILITY DIRECTOR",
          desc: "Lead specialist in pancreatic elastase staging, enteric pathogen recovery, and intestinal permeability markers.",
          image: "assets/images/doctors/dr-sophia-martinez.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "GET ANSWERS WITHOUT SURGERY",
      ctaHeading: "FIND OUT WHAT IS CAUSING YOUR SYMPTOMS.",
      ctaLead: "Order comprehensive non-invasive digestive biomarker testing and obtain definitive clinical clarity.",
      ctaBtnText: "Request Lab Testing Today &rarr;"
    },

    sibo: {
      id: 'sibo',
      pageTitle: "SIBO Hydrogen & Methane Breath Lab | GastroCare Clinic",
      metaDesc: "Quintron BreathTracker gas chromatography testing for Small Intestinal Bacterial Overgrowth (SIBO) and Intestinal Methanogen Overgrowth (IMO).",
      heroBadge: "SMALL INTESTINAL BACTERIAL OVERGROWTH",
      heroTitle: "SIBO HYDROGEN & METHANE BREATH TESTING.",
      heroLead: "Gold-standard Quintron BreathTracker gas chromatography accurately diagnosing Small Intestinal Bacterial Overgrowth (SIBO) and Intestinal Methanogen Overgrowth (IMO) for bloating relief.",
      heroImg: "assets/images/services/service-sibo.jpg",
      heroImgAlt: "SIBO Breath Testing Lab",
      bookBtnText: "Book Breath Test &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "IBS Management Center",
      secBtnLink: "service-details.html?service=ibs",
      capSubtitle: "GAS CHROMATOGRAPHY ANALYTICS",
      capHeading: "WHAT OUR SIBO BREATH TEST MEASURES.",
      capDesc: "Normal humans cannot produce hydrogen or methane gas. Any detection in exhaled breath is direct evidence of bacterial fermentation in the small intestine.",
      capabilities: [
        {
          title: "Simultaneous Multi-Gas Detection",
          desc: "Quintron solid-state sensors measure Hydrogen (H2), Methane (CH4), and CO2 normalization simultaneously."
        },
        {
          title: "Intestinal Methanogen Overgrowth (IMO)",
          desc: "Detects Methanobrevibacter smithii colonization responsible for refractory constipation and profound bloating."
        },
        {
          title: "Standardized Substrate Protocols",
          desc: "Standardized pharmaceutical-grade lactulose and glucose solutions to pinpoint proximal and distal small bowel transit."
        },
        {
          title: "Clear Baseline & Rise Thresholds",
          desc: "Strict adherence to the North American Consensus (rise of >=20 ppm H2 or >=10 ppm CH4 within 90 mins)."
        }
      ],
      quickFactsHeading: "Breath Lab Quick Facts",
      quickFacts: [
        { label: "Testing Equipment", val: "Quintron BreathTracker SC Gas Chromatography" },
        { label: "Test Duration", val: "2.5 to 3 Hours (Breath sample captured every 15 mins)" },
        { label: "Test Location", val: "Quiet In-Clinic Suite with WiFi or At-Home Kit" },
        { label: "Prep Requirement", val: "Strict 24-Hour Low-Fermentation Diet & 12-Hour Fast" },
        { label: "Treatment Strategy", val: "Targeted Non-Absorbed Rifaximin / Neomycin & Prokinetics" }
      ],
      timelineSubtitle: "TESTING PROTOCOL",
      timelineHeading: "YOUR 4-STEP SIBO BREATH TEST WALKTHROUGH.",
      timelineDesc: "A straightforward, non-invasive process to identify bacterial overgrowth.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "24-Hour Low-Fermentation Diet",
          desc: "Consume simple baked chicken, white rice, and eggs the day before, followed by an overnight 12-hour water fast."
        },
        {
          step: "STEP 2",
          title: "Baseline Fasting Breath Capture",
          desc: "Blow into the Quintron collection bag to establish your baseline hydrogen and methane gas concentrations."
        },
        {
          step: "STEP 3",
          title: "Drink Substrate & Serial Sampling",
          desc: "Drink the sweet lactulose solution. Capture breath samples every 15 minutes for 150 minutes while relaxing."
        },
        {
          step: "STEP 4",
          title: "Gas Curve Graph & Targeted Therapy",
          desc: "Receive your multi-gas graph. If positive, your doctor prescribes targeted non-absorbed antibiotics and prokinetics."
        }
      ],
      doctorsSubtitle: "BREATH LAB CLINICAL SPECIALISTS",
      doctorsHeading: "PHYSICIANS DIRECTING SIBO & MICROBIOME CARE.",
      doctorsDesc: "Pioneers in small bowel bacterial overgrowth, methane eradication, and post-SIBO motility preservation.",
      doctors: [
        {
          name: "Dr. Sophia Martinez, MD",
          role: "FUNCTIONAL GI & MOTILITY DIRECTOR",
          desc: "Recognized specialist in small intestinal dysbiosis, Quintron curve analysis, and prokinetic motility protocols.",
          image: "assets/images/doctors/dr-sophia-martinez.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Elena Rostova, MD",
          role: "IBD & MUCOSAL IMMUNOLOGY CHAIR",
          desc: "Focuses on post-infectious SIBO, immune-mediated dysmotility, and recurrent methane overgrowth eradication.",
          image: "assets/images/doctors/dr-elena-rostova.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "UNCOVER THE CAUSE OF BLOATING",
      ctaHeading: "GET ACCURATE SIBO BREATH TESTING TODAY.",
      ctaLead: "Stop guessing what foods cause your stomach swelling. Test for SIBO and IMO with gold-standard breath technology.",
      ctaBtnText: "Schedule SIBO Breath Test &rarr;"
    },

    barretts: {
      id: 'barretts',
      pageTitle: "Barrett's Esophagus Ablation (Barrx™) | GastroCare Clinic",
      metaDesc: "Endoscopic surveillance and Barrx™ radiofrequency ablation (RFA) to eradicate precancerous dysplastic Barrett's esophagus.",
      heroBadge: "PREVENTATIVE ESOPHAGEAL ONCOLOGY",
      heroTitle: "BARRETT'S ESOPHAGUS ABLATION (BARRX™).",
      heroLead: "Advanced wide-area optical mapping and radiofrequency ablation (RFA) to completely eradicate dysplastic Barrett’s tissue, dramatically preventing esophageal adenocarcinoma.",
      heroImg: "assets/images/services/service-barretts.jpg",
      heroImgAlt: "Barrett's Esophagus Ablation Suite",
      bookBtnText: "Schedule Barrett's Consult &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Upper Endoscopy Info",
      secBtnLink: "service-details.html?service=endoscopy",
      capSubtitle: "INTERVENTIONAL ONCOLOGY FOCUS",
      capHeading: "HOW BARRX™ RFA ERADICATES PRECANCEROUS CELLS.",
      capDesc: "Radiofrequency energy delivers controlled, uniform thermal energy to the esophageal lining, destroying precancerous cells without damaging deeper layers.",
      capabilities: [
        {
          title: "Circumferential Barrx™ 360 Express",
          desc: "Self-adjusting balloon catheter delivers rapid, uniform 360-degree thermal ablation over extensive metaplastic segments."
        },
        {
          title: "Targeted Focal Barrx™ 90 & Ultra",
          desc: "Endoscope-mounted articulation pads allow precise touch-up ablation on residual Barrett's islands and gastroesophageal junction."
        },
        {
          title: "Narrow-Band Imaging Optical Mapping",
          desc: "High-definition micro-vascular magnification highlights abnormal mucosal pit patterns prior to energy delivery."
        },
        {
          title: "Normal Squamous Epithelial Regeneration",
          desc: "Under high-dose acid suppression, the ablated precancerous tissue is replaced by healthy, normal pink esophageal lining."
        }
      ],
      quickFactsHeading: "Barrx™ RFA Quick Facts",
      quickFacts: [
        { label: "Clinical Success", val: "Over 92% Complete Eradication of Intestinal Metaplasia" },
        { label: "Cancer Risk Reduction", val: "Reduces Esophageal Adenocarcinoma Risk by >90%" },
        { label: "Anesthesia Method", val: "Monitored Propofol Sedation (Zero Procedural Pain)" },
        { label: "Outpatient Status", val: "Discharged Home in 45 Minutes; Normal Diet Resumed Quickly" },
        { label: "Follow-Up Protocol", val: "Routine Surveillance Endoscopy at 3 and 12 Months" }
      ],
      timelineSubtitle: "PROCEDURAL PROCESS",
      timelineHeading: "YOUR BARRX™ RFA DAY-OF-TREATMENT TIMELINE.",
      timelineDesc: "A predictable, minimally invasive outpatient therapy preserving esophageal structure.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "4K Endoscopic Metaplasia Mapping",
          desc: "Dr. Carter performs high-definition optical inspection and measures the exact length and circumference of the segment."
        },
        {
          step: "STEP 2",
          title: "Automated Balloon Energy Delivery",
          desc: "The Barrx™ catheter delivers a millisecond burst of RF energy, precisely penetrating only 1,000 microns into mucosa."
        },
        {
          step: "STEP 3",
          title: "Mucosal Cleaning & Focal Touch-Up",
          desc: "The coagulated surface layer is gently cleaned, and focal pads treat any remaining Barrett's tongue margins."
        },
        {
          step: "STEP 4",
          title: "Regeneration & Surveillance",
          desc: "Awaken comfortably. Take prescribed anti-secretory medication while healthy normal squamous mucosa regrows."
        }
      ],
      doctorsSubtitle: "INTERVENTIONAL ESOPHAGEAL FACULTY",
      doctorsHeading: "PHYSICIANS PERFORMING BARRX™ ABLATION.",
      doctorsDesc: "Our endoscopists possess specialized fellowship training in interventional Barrett's therapeutics.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY DIRECTOR",
          desc: "Harvard-trained interventional endoscopist with over 1,200 successful Barrx radiofrequency procedures completed.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Julian Vance, MD, PhD",
          role: "SENIOR INTERVENTIONAL ENDOSCOPIST",
          desc: "Expert in complex dysplastic mucosal resection, cryotherapy, and advanced radiofrequency surveillance.",
          image: "assets/images/doctors/dr-julian-vance.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "PREVENT ESOPHAGEAL CANCER",
      ctaHeading: "ERADICATE BARRETT’S DYSPLASIA BEFORE IT PROGRESSES.",
      ctaLead: "If you have Barrett's esophagus or long-term chronic GERD, arrange an expert endoscopic assessment.",
      ctaBtnText: "Schedule Barrett's Evaluation &rarr;"
    },

    emr: {
      id: 'emr',
      pageTitle: "Endoscopic Mucosal Resection (EMR) | GastroCare Clinic",
      metaDesc: "Surgical-grade outpatient endoscopic resection of large complex polyps and flat mucosal tumors without open surgery.",
      heroBadge: "SURGICAL-GRADE THERAPEUTIC RESECTION",
      heroTitle: "ENDOSCOPIC MUCOSAL RESECTION (EMR).",
      heroLead: "Outpatient organ-preserving endoscopic resection of large polyps (greater than 20mm), flat sessile serrated lesions, and early mucosal neoplasms without open abdominal surgery.",
      heroImg: "assets/images/services/service-emr.jpg",
      heroImgAlt: "Endoscopic Mucosal Resection EMR",
      bookBtnText: "Book EMR Consultation &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Colonoscopy Program",
      secBtnLink: "service-details.html?service=colonoscopy",
      capSubtitle: "ADVANCED THERAPEUTIC CAPABILITIES",
      capHeading: "PRECISION SURGICAL ENDOSCOPY WITHOUT INCISIONS.",
      capDesc: "EMR bridges the gap between screening endoscopy and traditional bowel surgery, completely lifting and removing challenging lesions.",
      capabilities: [
        {
          title: "Submucosal Fluid Cushion Lift",
          desc: "Injection of viscous colloidal solution elevates the lesion away from the muscular wall, eliminating perforation risk."
        },
        {
          title: "Monopolar High-Frequency Snare Resection",
          desc: "Microprocessor-controlled electrosurgical currents cut and coagulate tissue cleanly in en bloc or piecemeal technique."
        },
        {
          title: "Prophylactic Hemostatic Clipping",
          desc: "Titanium endoscopic clips close the mucosal defect completely to prevent delayed post-polypectomy bleeding."
        },
        {
          title: "Whole-Specimen Histopathology",
          desc: "Intact retrieval enables full microscopic margin analysis to verify complete curability of the polyp."
        }
      ],
      quickFactsHeading: "EMR Procedure Quick Facts",
      quickFacts: [
        { label: "Organ Preservation Rate", val: "99.4% (Avoids Segmental Bowel Resection)" },
        { label: "Hospital Admission", val: "Zero (100% Outpatient Day-Surgery Procedure)" },
        { label: "Anesthesia", val: "Deep Propofol Sedation Monitored by Anesthesiologist" },
        { label: "Discharge Time", val: "Home in 60 to 90 Minutes with Escort" },
        { label: "Surveillance Interval", val: "Routine Scar Check Endoscopy at 6 Months" }
      ],
      timelineSubtitle: "PROCEDURE STEPS",
      timelineHeading: "YOUR OUTPATIENT EMR CLINICAL SEQUENCE.",
      timelineDesc: "Carefully structured for maximum safety, tissue preservation, and swift recovery.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Paris Classification Staging",
          desc: "High-definition optics and chromoendoscopy assess polyp borders, pit pattern, and lifting sign suitability."
        },
        {
          step: "STEP 2",
          title: "Targeted Submucosal Fluid Injection",
          desc: "A colored fluid cushion is injected beneath the polyp, creating a safe protective barrier above the muscular wall."
        },
        {
          step: "STEP 3",
          title: "Electrocautery Snare Excision",
          desc: "The lesion is captured in a specialized braided snare and excised cleanly without damaging underlying bowel tissue."
        },
        {
          step: "STEP 4",
          title: "Defect Closure with Hemostatic Clips",
          desc: "Clips are deployed over the mucosal margin to seal blood vessels. The specimen is dispatched for histology."
        }
      ],
      doctorsSubtitle: "ADVANCED INTERVENTIONAL ENDOSCOPISTS",
      doctorsHeading: "PHYSICIANS PERFORMING MUCOSAL RESECTIONS.",
      doctorsDesc: "Our senior faculty receives regional referrals for complex flat polyps and difficult-to-reach lesions.",
      doctors: [
        {
          name: "Dr. Julian Vance, MD, PhD",
          role: "ADVANCED INTERVENTIONAL LEAD",
          desc: "Fellowship-trained in complex endoscopic mucosal resection (EMR) with over 3,000 successful large-polyp excisions.",
          image: "assets/images/doctors/dr-julian-vance.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Arthur Pendelton, MD",
          role: "SENIOR COLORECTAL CONSULTANT",
          desc: "Authority on right-sided sessile serrated lesions and multi-clip defect closure techniques.",
          image: "assets/images/doctors/dr-arthur-pendelton.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "AVOID UNNECESSARY SURGERY",
      ctaHeading: "HAVE A LARGE OR DIFFICULT POLYP TO REMOVE?",
      ctaLead: "Get a second opinion from our advanced interventional endoscopy team before scheduling invasive bowel surgery.",
      ctaBtnText: "Schedule EMR Consultation &rarr;"
    },

    nutrition: {
      id: 'nutrition',
      pageTitle: "Clinical GI Medical Nutrition | GastroCare Clinic",
      metaDesc: "Personalized dietary therapy led by registered GI dietitians for Low-FODMAP, celiac gluten-free transitions, and IBD meal planning.",
      heroBadge: "MEDICAL NUTRITION THERAPY (MNT)",
      heroTitle: "CLINICAL GI MEDICAL NUTRITION & DIETETICS.",
      heroLead: "Evidence-based nutrition therapy led by registered GI dietitians specializing in low-FODMAP reintroduction, celiac disease, eosinophilic esophagitis, gastroparesis, and IBD.",
      heroImg: "assets/images/services/service-nutrition.jpg",
      heroImgAlt: "Clinical GI Medical Nutrition",
      bookBtnText: "Book Nutrition Visit &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "IBS Management Center",
      secBtnLink: "service-details.html?service=ibs",
      capSubtitle: "THERAPEUTIC DIETARY DISCIPLINES",
      capHeading: "SPECIALIZED NUTRITION PROTOCOLS WE LEAD.",
      capDesc: "Forget generic fad diets. Our board-certified GI registered dietitians craft biological eating protocols aligned with your medical charts.",
      capabilities: [
        {
          title: "3-Phase Low-FODMAP Reintroduction",
          desc: "Systematic elimination, structured challenge phases, and personalized dietary expansion for lasting IBS control."
        },
        {
          title: "Celiac Disease & Gluten Cross-Contact",
          desc: "In-depth grocery, pantry, and supplement audits to eliminate hidden gluten exposures preventing mucosal healing."
        },
        {
          title: "IBD Anti-Inflammatory Meal Regimens",
          desc: "Targeted Mediterranean and Crohn's Disease Exclusion Diet (CDED) protocols to support medical mucosal remission."
        },
        {
          title: "Micronutrient Malabsorption Correction",
          desc: "Targeted correction of Vitamin B12, Iron, Zinc, and Vitamin D deficiencies common in chronic digestive conditions."
        }
      ],
      quickFactsHeading: "Nutrition Clinic Quick Facts",
      quickFacts: [
        { label: "Dietitian Credentials", val: "Registered Dietitian Nutritionist (RDN) specializing in GI" },
        { label: "Visit Duration", val: "Initial 60 Min • 30–45 Min Progress Sessions" },
        { label: "Consultation Formats", val: "Bellevue Pavilion or Convenient Telehealth across WA" },
        { label: "Clinical Integration", val: "Direct Electronic Health Record Sync with Your Gastroenterologist" },
        { label: "Insurance Status", val: "Covered by Many Commercial Insurers under Medical Nutrition" }
      ],
      timelineSubtitle: "NUTRITIONAL JOURNEY",
      timelineHeading: "YOUR 4-STAGE DIETARY REHABILITATION ROADMAP.",
      timelineDesc: "Empowering you with culinary confidence and freedom from food fear.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "7-Day Symptom & Intake Audit",
          desc: "We analyze your eating habits, bowel motility patterns, and nutritional deficiencies before you arrive."
        },
        {
          step: "STEP 2",
          title: "Targeted Therapeutic Phase",
          desc: "Implement a temporary, gut-soothing elimination protocol tailored to your diagnosis (IBS, SIBO, or IBD)."
        },
        {
          step: "STEP 3",
          title: "Structured Food Reintroduction",
          desc: "Systematically test individual food groups to pinpoint exact triggers without restricting your culinary enjoyment."
        },
        {
          step: "STEP 4",
          title: "Lifelong Sustainable Eating Blueprint",
          desc: "Receive customized recipes, restaurant navigation guides, and ongoing direct dietitian chat support via Portal."
        }
      ],
      doctorsSubtitle: "CLINICAL NUTRITION DIRECTORS",
      doctorsHeading: "PHYSICIANS COLLABORATING ON MEDICAL NUTRITION.",
      doctorsDesc: "Our gastroenterologists work hand-in-gaw with our dedicated GI dietitians on every patient care plan.",
      doctors: [
        {
          name: "Dr. Elena Rostova, MD",
          role: "IBD CLINICAL CHAIR",
          desc: "Champion of dietary anti-inflammatory regimens in conjunction with biologic therapies for ulcerative colitis and Crohn's.",
          image: "assets/images/doctors/dr-elena-rostova.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Sophia Martinez, MD",
          role: "FUNCTIONAL GI LEAD",
          desc: "Specialist in gut-brain dietary triggers, visceral hypersensitivity calming foods, and low-FODMAP personalization.",
          image: "assets/images/doctors/dr-sophia-martinez.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "EAT WITHOUT FEAR",
      ctaHeading: "HEAL YOUR GUT WITH TARGETED CLINICAL NUTRITION.",
      ctaLead: "Partner with a dedicated gastrointestinal registered dietitian to transform your relationship with food.",
      ctaBtnText: "Schedule Nutrition Consultation &rarr;"
    },

    fibroscan: {
      id: 'fibroscan',
      pageTitle: "Non-Invasive Liver Health & FibroScan® | GastroCare Clinic",
      metaDesc: "Painless transient elastography measuring liver fibrosis and fatty steatosis (MASLD) in under 10 minutes without surgery.",
      heroBadge: "TRANSIENT LIVER ELASTOGRAPHY",
      heroTitle: "NON-INVASIVE LIVER HEALTH & FIBROSCAN®.",
      heroLead: "Painless ultrasound shear wave elastography measuring liver stiffness (fibrosis) and Controlled Attenuation Parameter (fatty liver steatosis / MASLD) in under 10 minutes without needles.",
      heroImg: "assets/images/clinic/services-diagnostic.jpg",
      heroImgAlt: "Non-Invasive FibroScan Liver Health",
      bookBtnText: "Book FibroScan® Test &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "Meet Hepatology Team",
      secBtnLink: "doctors.html",
      capSubtitle: "ULTRASOUND SHEAR WAVE PHYSICS",
      capHeading: "WHAT FIBROSCAN® MEASURES IN 10 MINUTES.",
      capDesc: "FibroScan eliminates the need for painful liver needle biopsies by passing a gentle, imperceptible mechanical shear wave through hepatic tissue.",
      capabilities: [
        {
          title: "Liver Stiffness Measurement (kPa)",
          desc: "Precise quantitative score ranging from F0 (normal) to F4 (cirrhosis) to detect asymptomatic scarring early."
        },
        {
          title: "Controlled Attenuation Parameter (CAP)",
          desc: "Accurately quantifies fat percentage within liver cells (dB/m) for metabolic fatty liver disease (MASLD/MASH)."
        },
        {
          title: "100% Needle-Free & Non-Invasive",
          desc: "Zero surgical incisions, zero sedation, zero internal organ puncture risk, and zero recovery downtime."
        },
        {
          title: "Longitudinal Disease Monitoring",
          desc: "Repeatable annual scoring allows objective measurement of liver healing after lifestyle or therapeutic interventions."
        }
      ],
      quickFactsHeading: "FibroScan® Quick Facts",
      quickFacts: [
        { label: "Exam Duration", val: "Under 10 Minutes Total" },
        { label: "Procedural Sensation", val: "Painless (Gentle light tapping on right ribcage)" },
        { label: "Preparation Required", val: "3-Hour Water-Only Fast Prior to Scan" },
        { label: "Results Timeline", val: "Immediate Numerical Score Provided Before You Leave" },
        { label: "Insurance Status", val: "Covered by Commercial Insurance & Medicare with Established CPT Code" }
      ],
      timelineSubtitle: "SCAN PROTOCOL",
      timelineHeading: "YOUR 4-STEP FIBROSCAN® WALKTHROUGH.",
      timelineDesc: "The simplest, fastest diagnostic procedure in modern hepatology.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Arrive Fasted for 3 Hours",
          desc: "Refrain from food for 3 hours before your appointment to ensure optimal liver acoustic transmission."
        },
        {
          step: "STEP 2",
          title: "Comfortable Private Positioning",
          desc: "Lie comfortably on your back with your right arm raised behind your head to open the intercostal rib spaces."
        },
        {
          step: "STEP 3",
          title: "Gentle 10-Pulse Measurement",
          desc: "The technologist applies ultrasound gel and holds the probe against your side. You feel a gentle, harmless tap."
        },
        {
          step: "STEP 4",
          title: "Instant Results Counseling",
          desc: "Dr. Vance reviews your stiffness (kPa) and fat score (CAP) with you immediately and designs a liver protection plan."
        }
      ],
      doctorsSubtitle: "HEPATOLOGY CLINICAL FACULTY",
      doctorsHeading: "PHYSICIANS OVERSEEING LIVER CARE.",
      doctorsDesc: "Our board-certified hepatologists specialize in fatty liver reversal, viral hepatitis, and fibrosis prevention.",
      doctors: [
        {
          name: "Dr. Julian Vance, MD, PhD",
          role: "HEPATOLOGY PROGRAM DIRECTOR",
          desc: "Johns Hopkins fellowship-trained hepatologist leading regional research in metabolic liver disease and elastography.",
          image: "assets/images/doctors/dr-julian-vance.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Marcus Reed, MD, MACG",
          role: "SENIOR CONSULTANT",
          desc: "Authority on elevated liver enzymes, alcohol-associated liver recovery, and long-term cirrhosis prevention.",
          image: "assets/images/doctors/dr-marcus-reed.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "PROTECT YOUR LIVER TODAY",
      ctaHeading: "CHECK YOUR LIVER HEALTH PAINLESSLY.",
      ctaLead: "Fatty liver disease produces zero symptoms until advanced. Schedule an accurate, 10-minute FibroScan today.",
      ctaBtnText: "Schedule FibroScan® Today &rarr;"
    },

    capsule: {
      id: 'capsule',
      pageTitle: "Capsule Endoscopy (PillCam™ SB3) | GastroCare Clinic",
      metaDesc: "Swallow a miniature wireless camera capsule capturing over 50,000 HD images of the 20-foot small intestine.",
      heroBadge: "WIRELESS SMALL INTESTINE IMAGING",
      heroTitle: "CAPSULE ENDOSCOPY (PILLCAM™ SB3).",
      heroLead: "Swallow a vitamin-sized camera capsule that captures over 50,000 high-resolution images as it travels through the 20-foot small intestine, detecting occult bleeding, Crohn's, and ulcers.",
      heroImg: "assets/images/endoscopy/endoscopy-suite.jpg",
      heroImgAlt: "Capsule Endoscopy PillCam",
      bookBtnText: "Book Capsule Test &rarr;",
      bookBtnLink: "appointment.html",
      secBtnText: "View Upper Endoscopy",
      secBtnLink: "service-details.html?service=endoscopy",
      capSubtitle: "WIRELESS ENDOSCOPIC VISUALIZATION",
      capHeading: "EXPLORING THE HARD-TO-REACH SMALL INTESTINE.",
      capDesc: "Standard upper endoscopy and colonoscopy inspect the upper and lower tracts, leaving roughly 20 feet of small intestine untouched. PillCam visualizes every inch.",
      capabilities: [
        {
          title: "Obscure GI Bleeding & Anemia",
          desc: "Pinpoints vascular arteriovenous malformations (AVMs) and angioectasias causing unexplained iron-deficiency anemia."
        },
        {
          title: "Small Bowel Crohn's Disease",
          desc: "Directly visualizes aphthous ulcers, mucosal cobblestoning, and strictures beyond standard colonoscopy scope reach."
        },
        {
          title: "Small Intestinal Polyposis Syndromes",
          desc: "Comprehensive surveillance for Peutz-Jeghers and familial adenomatous polyposis (FAP) throughout the jejunum and ileum."
        },
        {
          title: "Refractory Celiac Disease & Ulcers",
          desc: "Evaluates non-responsive celiac disease for ulcerative jejunitis or enteropathy-associated T-cell lymphoma."
        }
      ],
      quickFactsHeading: "PillCam™ SB3 Quick Facts",
      quickFacts: [
        { label: "Capsule Dimensions", val: "11mm x 26mm (Smooth, Vitamin-Sized Capsule)" },
        { label: "Optics & Capture Rate", val: "Adaptive 2 to 6 Frames per Second (Over 50,000 HD Images)" },
        { label: "Patient Freedom", val: "Leave Clinic Immediately & Resume Normal Activities" },
        { label: "Sedation Needed", val: "Zero Sedation (No IV, No Grogginess, Drive Yourself Home)" },
        { label: "Capsule Excretion", val: "Discharged and Passed Naturally into Toilet (Disposable)" }
      ],
      timelineSubtitle: "EXAMINATION STEPS",
      timelineHeading: "YOUR 4-STEP CAPSULE ENDOSCOPY WALKTHROUGH.",
      timelineDesc: "High-tech diagnostics that adapt to your everyday life.",
      timelineSteps: [
        {
          step: "STEP 1",
          title: "Gentle Evening Clear-Liquid Prep",
          desc: "A brief liquid preparation the evening before cleanses the small bowel to ensure crystal-clear photography."
        },
        {
          step: "STEP 2",
          title: "Swallow Capsule with Water",
          desc: "Arrive at 8:00 AM. Fasten our lightweight sensor belt around your waist and swallow the pill with a glass of water."
        },
        {
          step: "STEP 3",
          title: "Go About Your Normal Day",
          desc: "Leave our clinic. Walk, work, or relax while the PillCam transmits images to your waist-mounted recorder."
        },
        {
          step: "STEP 4",
          title: "Return Recorder & Video Review",
          desc: "Return the recorder that afternoon. Dr. Carter analyzes the 50,000 frames using RAPID AI video software."
        }
      ],
      doctorsSubtitle: "CAPSULE IMAGING FACULTY",
      doctorsHeading: "PHYSICIANS INTERPRETING CAPSULE ENDOSCOPIES.",
      doctorsDesc: "Our endoscopists have interpreted thousands of PillCam studies for obscure bleeding and small bowel Crohn’s.",
      doctors: [
        {
          name: "Dr. Maya Carter, MD, FACG",
          role: "ENDOSCOPY MEDICAL DIRECTOR",
          desc: "Specialist in video capsule endoscopy interpretation, small bowel enteroscopy, and occult vascular bleeding.",
          image: "assets/images/doctors/dr-maya-carter.jpg",
          profileUrl: "doctor-details.html"
        },
        {
          name: "Dr. Marcus Reed, MD, MACG",
          role: "SENIOR CONSULTANT",
          desc: "Recognized leader in diagnostic dilemmas, unexplained iron deficiency, and inflammatory small intestine diseases.",
          image: "assets/images/doctors/dr-marcus-reed.jpg",
          profileUrl: "doctor-details.html"
        }
      ],
      ctaBadge: "UNCOVER DEEP DIGESTIVE SECRETS",
      ctaHeading: "DISCOVER WHAT LIES IN YOUR SMALL INTESTINE.",
      ctaLead: "If you have unexplained anemia or suspected Crohn's, request a gentle wireless PillCam™ study today.",
      ctaBtnText: "Schedule Capsule Endoscopy &rarr;"
    }
  };

  /**
   * Helper to get parameter from URL query string
   */
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Render the service content on the page
   */
  function renderService(serviceKey, updateUrl) {
    // Normalize key
    let key = (serviceKey || '').toLowerCase().trim();
    if (!SERVICES_DATA[key]) {
      // Check partial matches or fallback to consultation or endoscopy
      key = 'endoscopy';
    }

    const data = SERVICES_DATA[key];
    if (!data) return;

    // 1. Update Document Title & Meta Description
    document.title = data.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.metaDesc);

    // 2. Update Hero Elements
    const heroBadge = document.getElementById('serviceHeroBadge');
    if (heroBadge) heroBadge.textContent = data.heroBadge;

    const heroTitle = document.getElementById('serviceHeroTitle');
    if (heroTitle) heroTitle.textContent = data.heroTitle;

    const heroLead = document.getElementById('serviceHeroLead');
    if (heroLead) heroLead.textContent = data.heroLead;

    const heroImg = document.getElementById('serviceHeroImg');
    if (heroImg) {
      heroImg.src = data.heroImg;
      heroImg.alt = data.heroImgAlt;
    }

    const bookBtn = document.getElementById('serviceHeroBookBtn');
    if (bookBtn) {
      bookBtn.innerHTML = data.bookBtnText;
      bookBtn.href = data.bookBtnLink;
    }

    const secBtn = document.getElementById('serviceHeroSecondaryBtn');
    if (secBtn) {
      secBtn.textContent = data.secBtnText;
      secBtn.href = data.secBtnLink;
    }

    // Cross-fade animation trigger on Section 2
    const focusSection = document.getElementById('section-clinical-focus');
    if (focusSection) {
      focusSection.classList.add('is-switching');
      setTimeout(() => {
        focusSection.classList.remove('is-switching');
      }, 160);
    }

    // 3. Update Capabilities Section
    const capSubtitle = document.getElementById('serviceCapSubtitle');
    if (capSubtitle) capSubtitle.textContent = data.capSubtitle;

    const capHeading = document.getElementById('serviceCapHeading');
    if (capHeading) capHeading.textContent = data.capHeading;

    const capDesc = document.getElementById('serviceCapDesc');
    if (capDesc) capDesc.textContent = data.capDesc;

    const capGrid = document.getElementById('serviceCapGrid');
    if (capGrid && Array.isArray(data.capabilities)) {
      const capabilityIcons = [
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>'
      ];

      capGrid.innerHTML = data.capabilities
        .map(
          (item, idx) => `
          <div class="col-md-6 fade-up-item is-visible">
            <div class="clinical-focus-card h-100 d-flex flex-column">
              <div class="focus-card-header">
                <div class="focus-icon-pill">
                  ${capabilityIcons[idx % capabilityIcons.length]}
                </div>
                <span class="focus-index-tag">0${idx + 1}</span>
              </div>
              <h5 class="focus-card-title">${item.title}</h5>
              <p class="focus-card-desc mb-0 flex-grow-1">${item.desc}</p>
            </div>
          </div>
        `
        )
        .join('');
    }

    // 4. Update Quick Facts Box
    const quickFactsHeading = document.getElementById('serviceQuickFactsHeading');
    if (quickFactsHeading) quickFactsHeading.textContent = data.quickFactsHeading;

    const quickFactsList = document.getElementById('serviceQuickFactsList');
    if (quickFactsList && Array.isArray(data.quickFacts)) {
      quickFactsList.innerHTML = data.quickFacts
        .map(
          fact => `
          <li class="dossier-fact-item">
            <span class="dossier-fact-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gc-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              ${fact.label}
            </span>
            <span class="dossier-fact-val">${fact.val}</span>
          </li>
        `
        )
        .join('');
    }

    // 5. Update Timeline Steps
    const timelineSubtitle = document.getElementById('serviceTimelineSubtitle');
    if (timelineSubtitle) timelineSubtitle.textContent = data.timelineSubtitle;

    const timelineHeading = document.getElementById('serviceTimelineHeading');
    if (timelineHeading) timelineHeading.textContent = data.timelineHeading;

    const timelineDesc = document.getElementById('serviceTimelineDesc');
    if (timelineDesc) timelineDesc.textContent = data.timelineDesc;

    const timelineStepsContainer = document.getElementById('serviceTimelineSteps');
    if (timelineStepsContainer && Array.isArray(data.timelineSteps)) {
      timelineStepsContainer.innerHTML = data.timelineSteps
        .map(
          step => `
          <div class="col-lg-3 col-md-6">
            <div class="p-4 bg-white rounded-3 border h-100 shadow-sm position-relative d-flex flex-column">
              <span class="badge-gc mb-2 align-self-start">${step.step}</span>
              <h5 class="fs-6 fw-bold mb-2 timeline-step-title">${step.title}</h5>
              <p class="small text-muted mb-0 flex-grow-1 timeline-step-desc">${step.desc}</p>
            </div>
          </div>
        `
        )
        .join('');
    }

    // 6. Update Specialist Doctors
    const doctorsSubtitle = document.getElementById('serviceDoctorsSubtitle');
    if (doctorsSubtitle) doctorsSubtitle.textContent = data.doctorsSubtitle;

    const doctorsHeading = document.getElementById('serviceDoctorsHeading');
    if (doctorsHeading) doctorsHeading.textContent = data.doctorsHeading;

    const doctorsDesc = document.getElementById('serviceDoctorsDesc');
    if (doctorsDesc) doctorsDesc.textContent = data.doctorsDesc;

    const doctorsGrid = document.getElementById('serviceDoctorsGrid');
    if (doctorsGrid && Array.isArray(data.doctors)) {
      const getDoctorKey = (name = '', img = '') => {
        const text = (name + ' ' + img).toLowerCase();
        if (text.includes('carter')) return 'maya-carter';
        if (text.includes('vance')) return 'julian-vance';
        if (text.includes('chen') || text.includes('martinez')) return 'sophia-chen';
        if (text.includes('thorne')) return 'aris-thorne';
        if (text.includes('rostova')) return 'elena-rostova';
        if (text.includes('reed')) return 'marcus-reed';
        return 'maya-carter';
      };

      doctorsGrid.innerHTML = data.doctors
        .map(
          doc => {
            const docKey = getDoctorKey(doc.name, doc.image);
            const docUrl = `doctor-details.html?doctor=${docKey}`;
            return `
          <div class="col-lg-6">
            <div class="doctor-card flex-column flex-sm-row p-3 gap-3 gap-md-4 align-items-sm-center align-items-start h-100">
              <img src="${doc.image}" alt="${doc.name}" class="rounded-3 shadow-xs" style="width: 120px; height: 140px; object-fit: cover; flex-shrink: 0;" onerror="this.src='assets/images/doctors/dr-sophia-chen.jpg'">
              <div class="flex-grow-1" style="min-width: 0;">
                <span class="badge-gc mb-1">${doc.role}</span>
                <h4 class="mb-1 fs-5">${doc.name}</h4>
                <p class="small text-muted mb-2">${doc.desc}</p>
                <a href="${docUrl}" class="btn btn-sm btn-gc-primary">View Full Profile &rarr;</a>
              </div>
            </div>
          </div>
        `;
          }
        )
        .join('');
    }

    // 7. Update CTA
    const ctaBadge = document.getElementById('serviceCtaBadge');
    if (ctaBadge) ctaBadge.textContent = data.ctaBadge;

    const ctaHeading = document.getElementById('serviceCtaHeading');
    if (ctaHeading) ctaHeading.textContent = data.ctaHeading;

    const ctaLead = document.getElementById('serviceCtaLead');
    if (ctaLead) ctaLead.textContent = data.ctaLead;

    const ctaBtn = document.getElementById('serviceCtaBtn');
    if (ctaBtn) ctaBtn.innerHTML = data.ctaBtnText;

    // 8. Update Active State in the Service Switcher Bar
    const switcherBtns = document.querySelectorAll('.service-switcher-btn');
    switcherBtns.forEach(btn => {
      if (btn.getAttribute('data-service') === key) {
        btn.classList.add('active');
        // Scroll into view if needed
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });

    // 9. Update Browser URL if requested
    if (updateUrl && window.history && window.history.pushState) {
      const newUrl = `${window.location.pathname}?service=${key}`;
      window.history.pushState({ service: key }, '', newUrl);
    }
  }

  /**
   * Build Interactive Sticky Service Switcher Bar
   */
  function buildSwitcherBar() {
    const mainElem = document.querySelector('main');
    if (!mainElem) return;

    const serviceKeys = [
      { key: 'consultation', label: 'Consultation' },
      { key: 'endoscopy', label: 'Upper Endoscopy (EGD)' },
      { key: 'colonoscopy', label: 'Colonoscopy Screening' },
      { key: 'ibs', label: 'IBS & Motility' },
      { key: 'reflux', label: 'Acid Reflux / GERD' },
      { key: 'lab', label: 'Biomarkers & Stool Lab' },
      { key: 'sibo', label: 'SIBO Breath Lab' },
      { key: 'barretts', label: "Barrett's Ablation" },
      { key: 'emr', label: 'EMR Polypectomy' },
      { key: 'nutrition', label: 'GI Medical Nutrition' },
      { key: 'fibroscan', label: 'Liver FibroScan®' },
      { key: 'capsule', label: 'Capsule Endoscopy' }
    ];

    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'service-switcher-bar border-bottom py-2 shadow-xs';
    switcherContainer.style.backgroundColor = 'var(--gc-card-bg, #ffffff)';
    switcherContainer.style.position = 'relative';
    switcherContainer.style.top = 'auto';
    switcherContainer.style.zIndex = '10';

    switcherContainer.innerHTML = `
      <div class="container d-flex align-items-center gap-2 overflow-x-auto py-1" style="scrollbar-width: thin;">
        <span class="small fw-bold text-muted text-uppercase text-nowrap me-2 d-none d-md-inline" style="letter-spacing: 0.5px;">Switch Service:</span>
        <div class="d-flex align-items-center gap-1.5 flex-nowrap" id="serviceSwitcherPills">
          ${serviceKeys
            .map(
              item => `
            <button type="button" class="btn btn-sm service-switcher-btn" data-service="${item.key}" style="white-space: nowrap; font-size: 0.8125rem; font-weight: 600; padding: 0.35rem 0.75rem; border-radius: 999px; transition: all 0.2s ease;">
              ${item.label}
            </button>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    // Insert right above the first section in main
    const firstSection = mainElem.querySelector('section');
    if (firstSection) {
      mainElem.insertBefore(switcherContainer, firstSection.nextSibling);
    } else {
      mainElem.prepend(switcherContainer);
    }

    // Attach click listeners
    const switcherBtns = switcherContainer.querySelectorAll('.service-switcher-btn');
    switcherBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedKey = this.getAttribute('data-service');
        renderService(selectedKey, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // Handle browser back/forward navigation
  window.addEventListener('popstate', function (event) {
    if (event.state && event.state.service) {
      renderService(event.state.service, false);
    } else {
      const paramKey = getQueryParam('service');
      renderService(paramKey || 'endoscopy', false);
    }
  });

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    buildSwitcherBar();

    // Read initial param
    const initialService = getQueryParam('service') || getQueryParam('id') || 'endoscopy';
    renderService(initialService, false);
  });
})();
