document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  firstNameInput.addEventListener('input', function () {
    if (firstNameInput.value.length <= 3) {
      firstNameInput.setCustomValidity('First name must be longer than 3 characters.');
    } else {
      firstNameInput.setCustomValidity('');
    }
  });

  lastNameInput.addEventListener('input', function () {
    if (lastNameInput.value.length <= 3) {
      lastNameInput.setCustomValidity('Last name must be longer than 3 characters.');
    } else {
      lastNameInput.setCustomValidity('');
    }
  });

  passwordInput.addEventListener('input', function () {
    if (passwordInput.value.length < 8) {
      passwordInput.setCustomValidity('Password must be at least 8 characters.');
    } else {
      passwordInput.setCustomValidity('');
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match.');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  });

  confirmPasswordInput.addEventListener('input', function () {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match.');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  });

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
    }
  });
});
