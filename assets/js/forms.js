/**
 * GastroCare Forms & Universal Validation Engine
 * Enforces strict validation across all forms:
 * - Name fields: Letters, spaces, apostrophes and hyphens only (strictly blocks numbers)
 * - Phone fields: Digits and standard phone symbols only (strictly blocks letters, minimum 10 digits)
 * - Email fields: Valid RFC email structure
 * - Real-time input sanitization, inline error badges, and submit guards
 */
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Password visibility toggle
  const pwdToggles = document.querySelectorAll('.toggle-password-btn');
  pwdToggles.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = document.getElementById(this.getAttribute('data-target'));
      if (input) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '&#128065;' : '&#128584;';
      }
    });
  });

  // Helper: check if input is a Name field
  function isNameField(input) {
    if (input.type === 'hidden' || input.type === 'password' || input.type === 'email' || input.type === 'tel') return false;
    const nameAttr = (input.name || '').toLowerCase();
    const idAttr = (input.id || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    const label = input.closest('.mb-3, .col-md-6, .col-12, .form-group')?.querySelector('label')?.textContent.toLowerCase() || '';

    return (
      input.classList.contains('validate-name') ||
      input.getAttribute('data-validate') === 'name' ||
      nameAttr.includes('name') ||
      idAttr.includes('name') ||
      placeholder.includes('name') ||
      label.includes('name')
    );
  }

  // Helper: check if input is a Phone field
  function isPhoneField(input) {
    if (input.type === 'tel' || input.classList.contains('validate-phone') || input.getAttribute('data-validate') === 'phone') return true;
    const nameAttr = (input.name || '').toLowerCase();
    const idAttr = (input.id || '').toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    const label = input.closest('.mb-3, .col-md-6, .col-12, .form-group')?.querySelector('label')?.textContent.toLowerCase() || '';

    return nameAttr.includes('phone') || idAttr.includes('phone') || placeholder.includes('phone') || label.includes('phone');
  }

  // Helper: get or create feedback element
  function getFeedbackEl(input) {
    let parent = input.parentElement;
    let feedback = parent.querySelector('.gc-field-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'gc-field-feedback small mt-1';
      feedback.style.fontSize = '0.78rem';
      feedback.style.fontWeight = '600';
      feedback.style.transition = 'all 0.2s ease';
      parent.appendChild(feedback);
    }
    return feedback;
  }

  function markFieldInvalid(input, msg) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.style.borderColor = 'var(--gc-danger, #AA4E4E)';
    input.style.backgroundColor = 'rgba(170, 78, 78, 0.04)';
    const fb = getFeedbackEl(input);
    fb.style.color = 'var(--gc-danger, #AA4E4E)';
    fb.textContent = msg;
    fb.style.display = 'block';
  }

  function markFieldValid(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.style.borderColor = 'var(--gc-primary)';
    input.style.backgroundColor = '';
    const fb = getFeedbackEl(input);
    fb.textContent = '';
    fb.style.display = 'none';
  }

  function clearFieldStatus(input) {
    input.classList.remove('is-invalid', 'is-valid');
    input.style.borderColor = '';
    input.style.backgroundColor = '';
    const fb = getFeedbackEl(input);
    fb.textContent = '';
    fb.style.display = 'none';
  }

  // Real-time input handling for all text and tel inputs
  const allInputs = document.querySelectorAll('input, textarea');
  allInputs.forEach(input => {
    // 1. NAME FIELDS: Block numbers in real-time
    if (isNameField(input)) {
      input.setAttribute('autocomplete', 'name');
      input.addEventListener('input', function() {
        if (/\d/.test(this.value)) {
          // Instantly strip numbers
          this.value = this.value.replace(/[0-9]/g, '');
          markFieldInvalid(this, '⚠️ Names cannot contain numbers. Only letters are allowed.');
          setTimeout(() => {
            if (!/\d/.test(this.value) && this.value.trim().length >= 2) {
              markFieldValid(this);
            }
          }, 1800);
        } else if (this.value.trim().length > 0 && this.value.trim().length < 2) {
          markFieldInvalid(this, 'Please enter at least 2 characters.');
        } else if (this.value.trim().length >= 2) {
          markFieldValid(this);
        } else {
          clearFieldStatus(this);
        }
      });

      input.addEventListener('blur', function() {
        const val = this.value.trim();
        if (this.required && !val) {
          markFieldInvalid(this, 'This field is required.');
        } else if (val && (/\d/.test(val) || !/^[A-Za-z\s.'\-()]+$/.test(val))) {
          markFieldInvalid(this, 'Invalid name. Numbers and symbols are not permitted.');
        } else if (val && val.length >= 2) {
          markFieldValid(this);
        }
      });
    }

    // 2. PHONE FIELDS: Block letters in real-time, format digits
    if (isPhoneField(input)) {
      input.setAttribute('inputmode', 'tel');
      input.addEventListener('input', function() {
        // Strip out any alphabetical letters
        if (/[a-zA-Z]/.test(this.value)) {
          this.value = this.value.replace(/[a-zA-Z]/g, '');
          markFieldInvalid(this, '⚠️ Phone numbers cannot contain words or letters.');
          setTimeout(() => {
            const rawDigits = this.value.replace(/\D/g, '');
            if (rawDigits.length >= 10) {
              markFieldValid(this);
            }
          }, 1800);
        }

        // Clean digits
        const raw = this.value.replace(/\D/g, '');
        if (raw.length === 0) {
          clearFieldStatus(this);
          return;
        }

        // Auto-format US phone nicely as user types: (XXX) XXX-XXXX
        if (raw.length <= 10) {
          if (raw.length > 6) {
            this.value = `(${raw.slice(0,3)}) ${raw.slice(3,6)}-${raw.slice(6,10)}`;
          } else if (raw.length > 3) {
            this.value = `(${raw.slice(0,3)}) ${raw.slice(3,6)}`;
          } else if (raw.length > 0) {
            this.value = `(${raw}`;
          }
        }

        if (raw.length >= 10) {
          markFieldValid(this);
        } else {
          markFieldInvalid(this, `Please enter a valid 10-digit phone number (${raw.length}/10 digits).`);
        }
      });

      input.addEventListener('blur', function() {
        const rawDigits = this.value.replace(/\D/g, '');
        if (this.required && !rawDigits) {
          markFieldInvalid(this, 'Phone number is required.');
        } else if (rawDigits.length > 0 && rawDigits.length < 10) {
          markFieldInvalid(this, 'Phone number must have at least 10 digits.');
        } else if (/[a-zA-Z]/.test(this.value)) {
          markFieldInvalid(this, 'Phone number cannot contain letters.');
        } else if (rawDigits.length >= 10) {
          markFieldValid(this);
        }
      });
    }

    // 3. EMAIL FIELDS
    if (input.type === 'email') {
      input.addEventListener('blur', function() {
        const val = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.required && !val) {
          markFieldInvalid(this, 'Email address is required.');
        } else if (val && !emailRegex.test(val)) {
          markFieldInvalid(this, 'Please enter a valid email address (e.g., name@example.com).');
        } else if (val) {
          markFieldValid(this);
        }
      });
    }
  });

  // Universal Form Submission Guard
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      // Skip newsletter forms which only have an email input
      if (form.classList.contains('gc-newsletter-form')) return;

      let isFormValid = true;
      let firstInvalidInput = null;

      // Validate all inputs in this form
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(inp => {
        // Required check
        if (inp.required && !inp.value.trim()) {
          markFieldInvalid(inp, 'This field is required.');
          isFormValid = false;
          if (!firstInvalidInput) firstInvalidInput = inp;
          return;
        }

        // Name check
        if (isNameField(inp)) {
          const val = inp.value.trim();
          if (val && (/\d/.test(val) || !/^[A-Za-z\s.'\-()]+$/.test(val))) {
            markFieldInvalid(inp, 'Invalid name. Letters only (no numbers).');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          } else if (inp.required && val.length < 2) {
            markFieldInvalid(inp, 'Name must be at least 2 characters.');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          }
        }

        // Phone check
        if (isPhoneField(inp)) {
          const rawDigits = inp.value.replace(/\D/g, '');
          if (/[a-zA-Z]/.test(inp.value)) {
            markFieldInvalid(inp, 'Phone numbers cannot contain letters.');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          } else if (inp.required && rawDigits.length < 10) {
            markFieldInvalid(inp, 'Please enter at least 10 digits.');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          } else if (rawDigits.length > 0 && rawDigits.length < 10) {
            markFieldInvalid(inp, 'Phone number must have at least 10 digits.');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          }
        }

        // Email check
        if (inp.type === 'email') {
          const val = inp.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (val && !emailRegex.test(val)) {
            markFieldInvalid(inp, 'Please enter a valid email address.');
            isFormValid = false;
            if (!firstInvalidInput) firstInvalidInput = inp;
          }
        }
      });

      if (!isFormValid) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        if (window.showGCToast) {
          window.showGCToast('⚠️ Please correct highlighted form errors (names cannot have numbers, phone numbers cannot have letters).', '⚠️');
        }
        return false;
      }
    }, true); // Use capture phase so it runs before inline onsubmit handlers!
  });
});
