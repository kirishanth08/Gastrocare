# GastroCare - Gastroenterology & Digestive Health Clinic HTML Template

> **Tagline:** “Better Digestion. Better Living.”  
> **Brand Concept:** Clean, clinical, calm, trustworthy, and modern digestive health care website template designed specifically for gastroenterologists, endoscopy centers, and functional GI clinics.

---

## 1. Technology Stack
- **HTML5:** Semantic, accessible markup with ARIA landmarks.
- **CSS3:** Custom design system without generic framework appearance.
- **Vanilla JavaScript:** High-performance, modular scripts with zero framework dependencies.
- **Bootstrap 5:** Strictly utilized for grid, responsive containers, and basic modal/offcanvas utilities. Heavily customized with custom CSS.
- **No Heavy Dependencies:** Absolutely zero React, Vue, jQuery, or chart library bloat.

---

## 2. Exact Brand Color Palette
- **Primary Brand Accent:** `#8B9A6E` (Olive Sage) - CTA buttons, active states, progress indicators, highlights.
- **Main Background:** `#F7F2EB` (Warm Ivory) - Hero sections, main editorial pages.
- **Secondary Background:** `#EAE2D6` (Soft Beige) - Service panels, timeline blocks, highlight cards.
- **Clinical Mist Neutral:** `#EEEEEE` - Form borders, subtle dividers, neutral separators.
- **Pure White Surfaces:** `#FFFFFF` - Clean medical cards, modals, and dropdowns.
- **Text Color:** `#2F352B` - Deep warm charcoal for optimal readability and contrast.
- **Dark Mode ("Calm Clinical Night"):**
  - Background: `#20251F`
  - Secondary: `#2A3028`
  - Cards: `#32392F`
  - Accent: `#8B9A6E`
  - Warm Text: `#F7F2EB`

---

## 3. Project File Structure
```
gastrocare/
│
├── index.html                     # Home 1 - "BETTER DIGESTION STARTS WITH BETTER CARE."
├── home-2.html                    # Home 2 - Editorial Clinical Experience
├── about.html                     # About Us - Clinic history & clinical philosophy
├── services.html                  # Service Directory with live category filter
├── service-details.html           # Upper Endoscopy (EGD) deep-dive & FAQs
├── doctors.html                   # Filterable specialist directory & search
├── doctor-details.html            # Dr. Maya Carter, Chief Gastroenterologist profile
├── digestive-health.html          # Digestive wellness, gut-brain axis & screening
├── endoscopy.html                 # Dedicated endoscopy specialty & suite safety
├── ibs-management.html            # Multidisciplinary IBS care & low-FODMAP guide

├── blog.html                      # Clinical digestive health article library
├── blog-details.html              # Procedural guide & patient preparation insights
├── contact.html                   # Campus info, hours, form & HTML/CSS map visual
├── appointment.html               # Multi-step booking wizard with live summary modal
│
├── auth/
│   ├── login.html                 # Patient portal sign-in with demo switcher
│   ├── register.html              # New patient portal registration
│   └── forgot-password.html       # Password recovery demonstration
│
├── patient-dashboard/
│   ├── dashboard.html             # My GastroCare Portal overview & metrics
│   ├── appointments.html          # Upcoming, completed, and cancelled visits
│   ├── procedure-appointments.html# Dedicated endoscopy & colonoscopy schedules
│   ├── prep-instructions.html     # Interactive procedure checklist & dynamic progress
│   ├── test-results.html          # Two-column diagnostic viewer (Blood, Endo, SIBO)
│   ├── result-details.html        # Comprehensive pathology report viewer
│   ├── medical-history.html       # Patient medical timeline & historic findings
│   ├── documents.html             # Clinical document library & downloads
│   ├── messages.html              # Care team messaging chat interface demo
│   └── profile.html               # Patient demographics & notification toggles
│
├── utility/
│   ├── 404.html                   # "This page took a different route"
│   ├── coming-soon.html           # New clinic wing expansion countdown
│   └── maintenance.html           # Scheduled clinical system upgrade notice
│
├── assets/
│   ├── css/
│   │   ├── style.css              # Core design system & theme variables
│   │   ├── responsive.css         # Breakpoint rules from 320px to 1920px
│   │   └── rtl.css                # Bidirectional right-to-left layout rules
│   │
│   ├── js/
│   │   ├── main.js                # Sticky navbar, scrollspy, back-to-top
│   │   ├── theme.js               # Dark/Light mode manager with localStorage
│   │   ├── rtl.js                 # LTR/RTL layout manager with localStorage
│   │   ├── forms.js               # Form validation & feedback handling
│   │   ├── appointments.js        # Live booking summary & modal generator
│   │   ├── doctors.js             # Specialty tabs & live search filtering
│   │   ├── services.js            # Service category filter logic
│   │   ├── prep.js                # Interactive procedure preparation checklist
│   │   ├── results.js             # Two-column test result viewer synchronizer
│   │   └── dashboard.js           # Mobile sidebar toggle & mock chat handling
│   │
│   └── images/                    # Custom SVG clinical illustrations and portraits
│       ├── logo/                  # gastrocare-logo.svg, favicon.svg
│       ├── hero/                  # home1-consultation.svg, home2-editorial.svg
│       ├── clinic/                # about-facility.svg, services-diagnostic.svg, etc.
│       ├── doctors/               # High-res portraits of 6 lead physicians
│       ├── endoscopy/             # endoscopy-suite.svg, etc.
│       ├── digestive-health/      # ibs-care.svg, wellness-journey.svg
│       ├── blog/                  # 6 unique article cover graphics
│       └── dashboard/             # portal-login.svg, patient-overview.svg
│
└── README.md
```

---

## 4. Key Interactive Features
1. **Interactive Procedure Preparation Checklist (`prep-instructions.html`):**
   - Live completion percentage calculation (0% to 100%).
   - Expandable 72-hour, 24-hour, procedure day, and arrival stages.
   - Non-prescriptive sample template content with safety disclaimers.
2. **Two-Column Diagnostic Result Viewer (`test-results.html`):**
   - Clickable left sidebar for instant right-column rendering.
   - Category and status filters (Available, Reviewed, Pending).
   - Pathology report summary, mucosal observations, and print action.
3. **Live Booking Summary Engine (`appointment.html`):**
   - Real-time updates as user selects service, specialist, date, and time.
   - Confirmation modal with patient recap upon submission.
4. **Instant Doctor Directory Search (`doctors.html`):**
   - Instant search by doctor name, specialty, or condition.
   - One-click specialty pills (Endoscopy, IBS, Colorectal, Hepatology).
5. **Calm Clinical Night Mode:**
   - Seamless dark mode toggle with persistent `localStorage` preference and zero flash of unstyled content (FOUC).
6. **Full Bidirectional (RTL / LTR) Support:**
   - Proper margin, padding, flex, and direction handling across all public pages and dashboard components.

---

## 5. Medical Content Safety
All medical information, preparation steps, laboratory numbers, and doctor schedules are realistic demonstration content. Clear medical disclaimers are featured across all clinical pages stating that preparation instructions and diagnostic interpretations must be received directly from the patient's individual healthcare provider.
