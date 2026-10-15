/**
 * GastroCare Test Results Viewer
 * Two-column interactive interface, status filtering & details panel synchronizer
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Demo Results Data
  const resultsData = {
    'res-1': {
      title: 'Upper Endoscopy & Mucosal Biopsy Report',
      date: 'October 12, 2026',
      doctor: 'Dr. Maya Carter, MD, FACG',
      category: 'Endoscopy & Pathology',
      status: 'Available',
      statusClass: 'badge-available',
      summary: 'Normal esophageal squamous mucosa without dysplasia. Mild antral erythema noted; rapid urease test for H. pylori is negative. Duodenal bulb and second portion mucosal architecture intact with normal villous morphology.',
      findings: [
        { label: 'Esophagus', value: 'Z-line regular at 38cm, no ulcerations or strictures.' },
        { label: 'Stomach', value: 'Mild patchy antral erythema; biopsies taken for histopathology.' },
        { label: 'Duodenum', value: 'Smooth folds, negative for celiac blunting.' },
        { label: 'H. Pylori Assay', value: 'Negative (Rapid Urease Test)' }
      ],
      recommendations: 'Continue current acid suppression regimen as discussed during debrief. Routine follow-up in 12 months.'
    },
    'res-2': {
      title: 'Comprehensive Gastrointestinal Blood Panel',
      date: 'October 08, 2026',
      doctor: 'Dr. Julian Vance, MD, PhD',
      category: 'Blood Chemistry',
      status: 'Reviewed',
      statusClass: 'badge-reviewed',
      summary: 'Complete metabolic profile and complete blood count within reference intervals. Serum ferritin 64 ng/mL (Normal). Tissue transglutaminase (tTG-IgA) antibody negative (< 2.0 U/mL), excluding celiac sprue.',
      findings: [
        { label: 'Hemoglobin', value: '14.2 g/dL (Reference: 13.5 - 17.5)' },
        { label: 'Ferritin', value: '64 ng/mL (Reference: 30 - 300)' },
        { label: 'ALT / AST', value: '22 / 24 U/L (Liver enzymes normal)' },
        { label: 'tTG-IgA (Celiac)', value: '1.1 U/mL (Negative < 2.0)' }
      ],
      recommendations: 'No signs of nutritional malabsorption or active inflammation detected on systemic blood work.'
    },
    'res-3': {
      title: 'Fecal Calprotectin Quantitative Assay',
      date: 'September 28, 2026',
      doctor: 'Dr. Sophia Chen, MD',
      category: 'Laboratory Test',
      status: 'Reviewed',
      statusClass: 'badge-reviewed',
      summary: 'Fecal calprotectin concentration measured at 32 ug/g (Reference < 50 ug/g). Strongly indicates functional gastrointestinal etiology rather than inflammatory bowel disease flare.',
      findings: [
        { label: 'Calprotectin', value: '32 ug/g (Normal < 50 ug/g)' },
        { label: 'Fecal Occult Blood', value: 'Negative' },
        { label: 'Fecal Lactoferrin', value: 'Within baseline limits' }
      ],
      recommendations: 'Consistent with irritable bowel syndrome. Proceed with low-FODMAP dietary reintroduction phases.'
    },
    'res-4': {
      title: 'Lactulose Hydrogen & Methane Breath Test (SIBO)',
      date: 'October 16, 2026',
      doctor: 'Dr. Sophia Chen, MD',
      category: 'Functional Diagnostics',
      status: 'Pending',
      statusClass: 'badge-pending',
      summary: 'Specimen kit received by GastroCare Diagnostic Core. Chromatographic analysis in progress. Expected final report release within 24–48 hours.',
      findings: [
        { label: 'Baseline H2', value: 'Analysis in queue' },
        { label: 'Baseline CH4', value: 'Analysis in queue' },
        { label: 'Status', value: 'Specimen verification completed' }
      ],
      recommendations: 'Results will be automatically uploaded to this portal once reviewed by Dr. Sophia Chen.'
    }
  };

  const resultItems = document.querySelectorAll('.results-list-item');
  const detailContainer = document.getElementById('resultDetailViewer');
  const filterBtns = document.querySelectorAll('.result-filter-btn');

  function renderResult(id) {
    const data = resultsData[id];
    if (!data || !detailContainer) return;

    let findingsHtml = data.findings.map(f => `
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="text-muted">${f.label}</span>
        <strong class="text-dark">${f.value}</strong>
      </div>
    `).join('');

    detailContainer.innerHTML = `
      <div class="results-detail-panel">
        <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
          <div>
            <span class="badge-gc ${data.statusClass} mb-2">${data.status}</span>
            <h4 class="mb-1">${data.title}</h4>
            <p class="text-muted small mb-0">Ordered by: <strong>${data.doctor}</strong> &bull; Date: <strong>${data.date}</strong></p>
          </div>
          <button class="btn btn-sm btn-gc-outline" onclick="window.print()">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            Print Report
          </button>
        </div>

        <div class="gc-disclaimer-box my-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <small>This demonstration interface is for template purposes. Actual test results should be reviewed with a qualified healthcare professional.</small>
        </div>

        <h5 class="mt-4 mb-2">Clinical Summary</h5>
        <p class="text-muted">${data.summary}</p>

        <h5 class="mt-4 mb-2">Quantitative &amp; Mucosal Findings</h5>
        <div class="mb-4">
          ${findingsHtml}
        </div>

        <h5 class="mt-4 mb-2">Follow-Up &amp; Care Guidance</h5>
        <div class="p-3 bg-secondary rounded border">
          <p class="mb-0 text-dark small">${data.recommendations}</p>
        </div>
      </div>
    `;
  }

  // Handle item click
  resultItems.forEach(item => {
    item.addEventListener('click', function() {
      resultItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      const id = this.getAttribute('data-result-id');
      renderResult(id);
    });
  });

  // Handle Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-gc-primary'));
      filterBtns.forEach(b => b.classList.add('btn-gc-secondary'));
      this.classList.add('active', 'btn-gc-primary');
      this.classList.remove('btn-gc-secondary');

      const filter = this.getAttribute('data-filter');
      resultItems.forEach(item => {
        const itemStatus = item.getAttribute('data-status');
        if (filter === 'all' || itemStatus === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Render first result by default if on results page
  if (resultItems.length && detailContainer) {
    renderResult(resultItems[0].getAttribute('data-result-id'));
  }
});
