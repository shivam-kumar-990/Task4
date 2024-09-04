document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const securedPage = document.getElementById('securedPage');

  const regUsername = document.getElementById('regUsername');
  const regPassword = document.getElementById('regPassword');

  const loginUsername = document.getElementById('loginUsername');
  const loginPassword = document.getElementById('loginPassword');

  const userSpan = document.getElementById('user');

  // Registration
  document.getElementById('register').addEventListener('submit', (e) => {
      e.preventDefault();

      const username = regUsername.value.trim();
      const password = regPassword.value.trim();

      if (localStorage.getItem(username)) {
          alert('Username already exists!');
      } else {
          localStorage.setItem(username, password);
          alert('Registration successful!');
          showLoginForm();
      }
  });

  // Login
  document.getElementById('login').addEventListener('submit', (e) => {
      e.preventDefault();

      const username = loginUsername.value.trim();
      const password = loginPassword.value.trim();

      if (localStorage.getItem(username) === password) {
          alert('Login successful!');
          showSecuredPage(username);
      } else {
          alert('Invalid username or password');
      }
  });

  // Logout
  document.getElementById('logout').addEventListener('click', () => {
      showLoginForm();
  });

  // Show Login Form
  function showLoginForm() {
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      securedPage.classList.add('hidden');
  }

  // Show Secured Page
  function showSecuredPage(username) {
      registerForm.classList.add('hidden');
      loginForm.classList.add('hidden');
      securedPage.classList.remove('hidden');
      userSpan.textContent = username;
  }

  // Initial Setup
  showLoginForm();
});
