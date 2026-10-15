/**
 * GastroCare Appointment Booking Engine
 * Interactive validation, doctor sync, live summary calculation & confirmation modal
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const appointmentForm = document.getElementById('appointmentForm');
  if (!appointmentForm) return;

  const doctorSelect = document.getElementById('preferredDoctor');
  const serviceSelect = document.getElementById('serviceSelect');
  const dateInput = document.getElementById('preferredDate');
  const timeSelect = document.getElementById('preferredTime');

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Live Summary Elements
  const summaryService = document.getElementById('sumService');
  const summaryDoctor = document.getElementById('sumDoctor');
  const summaryDateTime = document.getElementById('sumDateTime');

  function updateSummary() {
    if (summaryService && serviceSelect) {
      summaryService.textContent = serviceSelect.options[serviceSelect.selectedIndex]?.text || 'Not selected';
    }
    if (summaryDoctor && doctorSelect) {
      summaryDoctor.textContent = doctorSelect.options[doctorSelect.selectedIndex]?.text || 'Any Available Specialist';
    }
    if (summaryDateTime && dateInput && timeSelect) {
      const d = dateInput.value || 'Date not chosen';
      const t = timeSelect.value || 'Time not chosen';
      summaryDateTime.textContent = `${d} at ${t}`;
    }
  }

  if (serviceSelect) serviceSelect.addEventListener('change', updateSummary);
  if (doctorSelect) doctorSelect.addEventListener('change', updateSummary);
  if (dateInput) dateInput.addEventListener('change', updateSummary);
  if (timeSelect) timeSelect.addEventListener('change', updateSummary);

  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      e.stopPropagation();
      this.classList.add('was-validated');
      return;
    }

    const patientName = document.getElementById('patientName')?.value || 'Valued Patient';
    const email = document.getElementById('patientEmail')?.value || 'email@example.com';
    const phone = document.getElementById('patientPhone')?.value || '';
    const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || 'Gastroenterology Consultation';
    const doctor = doctorSelect?.options[doctorSelect.selectedIndex]?.text || 'Lead Gastroenterologist';
    const date = dateInput?.value || 'Next Available';
    const time = timeSelect?.value || '10:00 AM';

    // Populate Modal
    const modalName = document.getElementById('confPatientName');
    const modalService = document.getElementById('confService');
    const modalDoctor = document.getElementById('confDoctor');
    const modalDateTime = document.getElementById('confDateTime');
    const modalEmail = document.getElementById('confEmail');

    if (modalName) modalName.textContent = patientName;
    if (modalService) modalService.textContent = service;
    if (modalDoctor) modalDoctor.textContent = doctor;
    if (modalDateTime) modalDateTime.textContent = `${date} at ${time}`;
    if (modalEmail) modalEmail.textContent = email;

    // Show bootstrap modal
    const modalElem = document.getElementById('appointmentSuccessModal');
    if (modalElem && window.bootstrap) {
      const modal = new bootstrap.Modal(modalElem);
      modal.show();
    }

    appointmentForm.reset();
    appointmentForm.classList.remove('was-validated');
    updateSummary();
  });
});
