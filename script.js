// Form validation for signup
document.querySelector('form[action="/signup"]')?.addEventListener('submit', (event) => {
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match! Please try again.');
    event.preventDefault(); // Prevent form submission
  } else if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    event.preventDefault(); // Prevent form submission
  }
});

// Form validation for login
document.querySelector('form[action="/login"]')?.addEventListener('submit', (event) => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Please fill out both email and password fields.');
    event.preventDefault(); // Prevent form submission
  }
});
