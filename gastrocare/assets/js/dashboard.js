/**
 * GastroCare Patient Portal Dashboard Interactions
 * Mobile sidebar, high-contrast modal workflows, appointment management, 
 * prescription refills, clinical inquiries, and symptom logging.
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // --- Helper: Portal Toast Notification ---
  window.showPortalToast = function(message, type = 'success') {
    let toastEl = document.getElementById('portalLiveToast');
    if (!toastEl) {
      const container = document.createElement('div');
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '1200';
      container.innerHTML = `
        <div id="portalLiveToast" class="toast align-items-center text-white bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body" id="toastMessage"></div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      `;
      document.body.appendChild(container);
      toastEl = document.getElementById('portalLiveToast');
    }

    const toastMsg = document.getElementById('toastMessage');
    if (toastMsg) {
      toastMsg.innerHTML = message;
    }

    if (window.bootstrap && bootstrap.Toast) {
      const bsToast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 4000 });
      bsToast.show();
    } else {
      alert(message);
    }
  };

  // --- 1. Mobile Sidebar Toggle ---
  const sidebar = document.querySelector('.dashboard-sidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      sidebar.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('show');
      }
    });
  }

  // --- 2. Appointment Filter Tabs (Appointments Page) ---
  const apptTabs = document.querySelectorAll('.appt-tab-btn');
  const apptRows = document.querySelectorAll('.appt-row-item');

  if (apptTabs.length && apptRows.length) {
    apptTabs.forEach(btn => {
      btn.addEventListener('click', function() {
        apptTabs.forEach(b => {
          b.classList.remove('active', 'btn-gc-primary');
          b.classList.add('btn-gc-secondary');
        });
        this.classList.add('active', 'btn-gc-primary');
        this.classList.remove('btn-gc-secondary');

        const tab = this.getAttribute('data-tab');
        apptRows.forEach(row => {
          if (tab === 'all' || row.getAttribute('data-status') === tab) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // --- 3. View Appointment Details Modal Trigger ---
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-view-appt');
    if (btn) {
      const title = btn.getAttribute('data-title') || 'Consultation Details';
      const doctor = btn.getAttribute('data-doctor') || 'GastroCare Physician';
      const datetime = btn.getAttribute('data-datetime') || 'Upcoming Slot';
      const loc = btn.getAttribute('data-loc') || 'Pavilion Consultation Wing';
      const notes = btn.getAttribute('data-notes') || 'Please arrive 15 minutes before scheduled time.';

      const modalEl = document.getElementById('apptModal');
      if (modalEl) {
        document.getElementById('modalApptTitle').textContent = title;
        document.getElementById('modalApptDoctor').textContent = doctor;
        document.getElementById('modalApptDateTime').textContent = datetime;
        document.getElementById('modalApptLoc').textContent = loc;
        document.getElementById('modalApptNotes').textContent = notes;

        if (window.bootstrap && bootstrap.Modal) {
          bootstrap.Modal.getOrCreateInstance(modalEl).show();
        }
      } else {
        showPortalToast(`<strong>${title}</strong><br>${doctor}<br>${datetime} at ${loc}`);
      }
    }
  });

  // --- 4. Reschedule Appointment Modal Trigger ---
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-reschedule-appt') || e.target.closest('.action-cancel-appt');
    if (btn) {
      const modalEl = document.getElementById('rescheduleModal');
      if (modalEl) {
        const apptId = btn.getAttribute('data-id') || 'APT-General';
        const hiddenInput = document.getElementById('rescheduleApptId');
        if (hiddenInput) hiddenInput.value = apptId;
        
        if (window.bootstrap && bootstrap.Modal) {
          bootstrap.Modal.getOrCreateInstance(modalEl).show();
        }
      } else {
        if (confirm('Would you like to request rescheduling for this clinical visit?')) {
          showPortalToast('Reschedule request registered. A coordinator will call you to confirm your new slot.');
        }
      }
    }
  });

  // Handle Reschedule Form Submit
  const rescheduleForm = document.getElementById('rescheduleForm');
  if (rescheduleForm) {
    rescheduleForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const dateVal = document.getElementById('rescheduleDate').value;
      const timeVal = document.getElementById('rescheduleTime').value;

      const modalEl = document.getElementById('rescheduleModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      }
      showPortalToast(`&#10003; Reschedule request submitted for <strong>${dateVal} (${timeVal})</strong>. Confirmation will be sent shortly.`);
    });
  }

  // --- 5. Diagnostic Report Preview Modal Trigger ---
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-preview-report');
    if (btn) {
      const title = btn.getAttribute('data-title') || 'Diagnostic Finding';
      const date = btn.getAttribute('data-date') || 'Recent';
      const doctor = btn.getAttribute('data-doctor') || 'Reviewing Physician';
      const findings = btn.getAttribute('data-findings') || 'Findings verified by GI Laboratory.';

      const modalEl = document.getElementById('reportModal');
      if (modalEl) {
        document.getElementById('reportModalTitle').textContent = title;
        document.getElementById('reportModalMeta').textContent = `${date} • ${doctor}`;
        document.getElementById('reportModalFindings').textContent = findings;

        if (window.bootstrap && bootstrap.Modal) {
          bootstrap.Modal.getOrCreateInstance(modalEl).show();
        }
      } else {
        showPortalToast(`<strong>${title}</strong>: ${findings}`);
      }
    }
  });

  // --- 6. Quick Care Inquiries ---
  window.openCareInquiry = function(doctorName) {
    const modalEl = document.getElementById('inquiryModal');
    if (modalEl) {
      const recipientInput = document.getElementById('inquiryRecipient');
      if (recipientInput) recipientInput.value = doctorName;
      if (window.bootstrap && bootstrap.Modal) {
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }
    } else {
      showPortalToast(`Direct message inquiry sent to <strong>${doctorName}</strong>.`);
    }
  };

  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const modalEl = document.getElementById('inquiryModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      }
      showPortalToast('&#10003; Clinical inquiry transmitted to your care provider. Typical reply window: 1 business day.');
      inquiryForm.reset();
    });
  }

  // --- 7. Quick Prescription Refill ---
  window.triggerQuickRefill = function(medName) {
    const modalEl = document.getElementById('refillModal');
    if (modalEl) {
      const select = document.getElementById('refillMedSelect');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.includes(medName.split(' ')[0])) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      if (window.bootstrap && bootstrap.Modal) {
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }
    } else {
      showPortalToast(`Refill request placed for <strong>${medName}</strong>.`);
    }
  };

  const refillForm = document.getElementById('refillForm');
  if (refillForm) {
    refillForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const med = document.getElementById('refillMedSelect').value;
      const modalEl = document.getElementById('refillModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      }
      showPortalToast(`&#10003; Refill order submitted for <strong>${med}</strong>. Forwarded to pharmacy on file.`);
      refillForm.reset();
    });
  }

  // --- 8. Daily Symptom Logger ---
  const dailySymptomForm = document.getElementById('dailySymptomForm');
  if (dailySymptomForm) {
    dailySymptomForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const hydration = document.getElementById('hydrationInput').value;
      const reflux = document.getElementById('refluxSeverity').options[document.getElementById('refluxSeverity').selectedIndex].text;
      const bristol = document.getElementById('bristolScale').options[document.getElementById('bristolScale').selectedIndex].text;

      showPortalToast(`&#10003; Daily Log Saved: <strong>${hydration}L Hydration</strong>, ${reflux}, ${bristol}. Added to clinical records.`);
    });
  }

  // --- 9. Document Actions (Download & View Mockers) ---
  document.querySelectorAll('.btn-download-doc').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const docName = this.getAttribute('data-name') || 'Medical Document';
      showPortalToast(`&#128190; Downloading verified medical PDF: <strong>${docName}</strong>...`);
    });
  });

  // --- 10. Profile Form Update ---
  const profileForm = document.getElementById('patientProfileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const oldText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Saving Changes...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '&#10003; Profile Updated';
        showPortalToast('&#10003; Demographic and notification preferences updated successfully.');
        setTimeout(() => {
          submitBtn.innerHTML = oldText;
          submitBtn.disabled = false;
        }, 2000);
      }, 700);
    });
  }
});
