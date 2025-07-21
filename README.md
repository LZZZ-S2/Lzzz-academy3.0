<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>LZZZ Academy</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Nunito', sans-serif;
      background: url('logo-bg.jpg') no-repeat center center fixed;
      background-size: cover;
      color: #f0f0f0;
      line-height: 1.6;
      backdrop-filter: brightness(0.25);
    }

    header {
      background: rgba(0, 0, 0, 0.6);
      padding: 40px 20px;
      text-align: center;
    }

    header h1 {
      font-size: 3rem;
      color: #00ffff;
      font-weight: 800;
    }

    header p {
      font-size: 1.2rem;
      color: #ccc;
      margin-top: 10px;
      font-weight: 300;
    }

    nav {
      text-align: center;
      margin: 10px 0;
    }

    nav button {
      margin: 0 10px;
      padding: 10px 20px;
      background: #00ffff;
      border: none;
      color: #111;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    nav button:hover,
    nav button:focus {
      background-color: #00cccc;
      outline: none;
    }

    section {
      background: rgba(0, 0, 0, 0.7);
      padding: 60px 20px;
      max-width: 900px;
      margin: 20px auto;
      border-radius: 10px;
    }

    section h2 {
      color: #00ffff;
      margin-bottom: 20px;
    }

    .courses {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .course-card {
      background: rgba(30, 30, 30, 0.9);
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #333;
    }

    .course-card h3 {
      color: #00ffff;
      margin-bottom: 10px;
    }

    .social {
      text-align: center;
      margin-top: 40px;
    }

    .social p {
      font-size: 1.2rem;
      margin: 10px 0;
    }

    footer {
      text-align: center;
      padding: 20px;
      color: #aaa;
      font-size: 0.9rem;
    }

    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 999;
      left: 0; top: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.8);
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .modal.show {
      display: flex;
      opacity: 1;
      pointer-events: auto;
    }

    .modal-content {
      background: #1f1f1f;
      padding: 30px 30px 40px 30px;
      border-radius: 10px;
      max-width: 400px;
      width: 100%;
      color: white;
      position: relative;
      box-shadow: 0 0 20px #00ffffaa;
    }

    .modal-content h3 {
      margin-bottom: 20px;
    }

    .modal-content label {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
      color: #00ffff;
      user-select: none;
    }

    .modal-content input[type="text"],
    .modal-content input[type="password"] {
      width: 100%;
      padding: 10px 40px 10px 10px;
      margin-bottom: 15px;
      background: #111;
      color: white;
      border: 1px solid #333;
      border-radius: 5px;
      font-size: 1rem;
      font-family: 'Nunito', sans-serif;
      position: relative;
    }

    .modal-content input[type="checkbox"] {
      margin-right: 8px;
      vertical-align: middle;
      cursor: pointer;
    }

    .modal-content .password-wrapper {
      position: relative;
    }

    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #00ffff;
      font-size: 18px;
      user-select: none;
    }

    .modal-content button {
      width: 100%;
      padding: 12px;
      background: #00ffff;
      border: none;
      color: black;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: background-color 0.3s ease;
    }

    .modal-content button:hover,
    .modal-content button:focus {
      background-color: #00cccc;
      outline: none;
    }

    .close {
      position: absolute;
      top: 12px;
      right: 15px;
      cursor: pointer;
      color: #aaa;
      font-size: 24px;
      font-weight: 700;
      user-select: none;
      transition: color 0.3s ease;
    }

    .close:hover,
    .close:focus {
      color: #00ffff;
      outline: none;
    }

    /* Responsive */
    @media (max-width: 600px) {
      header h1 {
        font-size: 2rem;
      }
      nav button {
        margin: 5px 0;
        width: 80%;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>LZZZ Academy</h1>
    <p>Unlock your potential.</p>
    <nav>
      <button onclick="openModal('login')" aria-haspopup="dialog" aria-controls="loginModal">Login</button>
      <button onclick="openModal('signup')" aria-haspopup="dialog" aria-controls="signupModal">Sign Up</button>
    </nav>
  </header>

  <section id="about">
    <h2>About Us</h2>
    <p>
      Welcome to LZZZ Academy — the ultimate training ground for becoming a next-level human.
      Whether you're trying to dominate Rainbow Six Siege, master Rizzology, win with your Centrelink paycheck, cure brain cancer, or farm aura like a god — we got you.
      We don’t just teach — we transform.
    </p>
  </section>

  <section id="courses">
    <h2>Our Courses</h2>
    <div class="courses">
      <div class="course-card">
        <h3>R6 Classes</h3>
        <p>We turn controller-throwing bronze bots into callout-speaking, pixel-peeking champions.
Strategy, aim, and mindgames - all in one course.</p>
      </div>
      <div class="course-card">
        <h3>Rizzology</h3>
        <p>Tired of being left on delivered? We teach the ancient, forbidden art of Rizz - confidence, timing, and the perfect message. Become HIM.</p>
      </div>
      <div class="course-card">
        <h3>Professional Gambling</h3>
        <p>Stop losing your entire Centrelink paycheck on multis.
We'll show you how to actually bet smart, read odds, and gamble with style - responsibly (kinda).</p>
      </div>
    </div>
  </section>

  <section id="social">
    <h2>Connect With Us</h2>
    <div class="social">
      <p>🎮 PSN: <strong>LZZZ-S2</strong></p>
      <p>📱 TikTok: <strong>@LZZZ-S2</strong></p>
    </div>
  </section>

  <footer>
    &copy; 2025 LZZZ Academy. All rights reserved.
  </footer>

  <!-- Login Modal -->
  <div class="modal" id="loginModal" role="dialog" aria-modal="true" aria-labelledby="loginTitle" tabindex="-1">
    <div class="modal-content" role="document">
      <button class="close" aria-label="Close login modal" onclick="closeModal('login')">&times;</button>
      <h3 id="loginTitle">Login</h3>
      <label for="loginUser">Username</label>
      <input type="text" placeholder="Username" id="loginUser" autocomplete="username" />
      <label for="loginPass">Password</label>
      <div class="password-wrapper">
        <input type="password" placeholder="Password" id="loginPass" autocomplete="current-password" />
        <span class="toggle-password" tabindex="0" role="button" aria-label="Toggle password visibility" data-target="loginPass">&#128065;</span>
      </div>
      <label><input type="checkbox" id="loginRemember" /> Remember Me</label>
      <button onclick="fakeLogin()">Login</button>
    </div>
  </div>

  <!-- Signup Modal -->
  <div class="modal" id="signupModal" role="dialog" aria-modal="true" aria-labelledby="signupTitle" tabindex="-1">
    <div class="modal-content" role="document">
      <button class="close" aria-label="Close signup modal" onclick="closeModal('signup')">&times;</button>
      <h3 id="signupTitle">Sign Up</h3>
      <label for="signupUser">Username</label>
      <input type="text" placeholder="Username" id="signupUser" autocomplete="username" />
      <label for="signupPass">Password</label>
      <div class="password-wrapper">
        <input type="password" placeholder="Password" id="signupPass" autocomplete="new-password" />
        <span class="toggle-password" tabindex="0" role="button" aria-label="Toggle password visibility" data-target="signupPass">&#128065;</span>
      </div>
      <label><input type="checkbox" id="signupRemember" /> Remember Me</label>
      <button onclick="fakeSignup()">Sign Up</button>
    </div>
  </div>

  <script>
    // Open modal & focus first input
    function openModal(type) {
      const modal = document.getElementById(type + 'Modal');
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      // Focus first input inside modal
      const firstInput = modal.querySelector('input[type="text"], input[type="password"]');
      if (firstInput) firstInput.focus();

      // Add focus trap
      trapFocus(modal);
    }

    // Close modal
    function closeModal(type) {
      const modal = document.getElementById(type + 'Modal');
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      releaseFocusTrap();
      // Return focus to triggering button
      document.querySelector(`button[onclick="openModal('${type}')"]`).focus();
    }

    // Fake login with validation
    function fakeLogin() {
      const user = document.getElementById('loginUser').value.trim();
      const pass = document.getElementById('loginPass').value.trim();
      if (!user || !pass) {
        alert('Please enter both username and password.');
        return;
      }
      alert("Welcome back, " + user + "!");
      closeModal('login');
    }

    // Fake signup with validation
    function fakeSignup() {
      const user = document.getElementById('signupUser').value.trim();
      const pass = document.getElementById('signupPass').value.trim();
      if (!user || !pass) {
        alert('Please enter both username and password.');
        return;
      }
      alert("Account created for " + user + "!");
      closeModal('signup');
    }

    // Close modal on click outside modal-content
    window.addEventListener('click', (e) => {
      const loginModal = document.getElementById('loginModal');
      const signupModal = document.getElementById('signupModal');
      if (e.target === loginModal) closeModal('login');
      if (e.target === signupModal) closeModal('signup');
    });

    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(icon => {
      icon.addEventListener('click', () => {
        const input = document.getElementById(icon.getAttribute('data-target'));
        if (input.type === 'password') {
          input.type = 'text';
          icon.textContent = '🙈';
        } else {
          input.type = 'password';
          icon.textContent = '👁️';
        }
      });
      // Allow keyboard toggle via Enter or Space
      icon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          icon.click();
        }
      });
    });

    // Accessibility: Trap focus inside modal while open
    let focusTrapActive = false;
    let lastFocusedElement = null;
    function trapFocus(modal) {
      if (focusTrapActive) return;
      focusTrapActive = true;
      lastFocusedElement = document.activeElement;

      const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      function handleTab(e) {
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else { // Tab
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
        // Escape closes modal
        if (e.key === 'Escape') {
          if (modal.id === 'loginModal') closeModal('login');
          if (modal.id === 'signupModal') closeModal('signup');
        }
      }
      modal.addEventListener('keydown', handleTab);

      // Store handler so we can remove later
      modal._handleTab = handleTab;
    }

    function releaseFocusTrap() {
      if (!focusTrapActive) return;
      focusTrapActive = false;

      // Remove event listeners
      const modals = [document.getElementById('loginModal'), document.getElementById('signupModal')];
      modals.forEach(modal => {
        if (modal._handleTab) {
          modal.removeEventListener('keydown', modal._handleTab);
          delete modal._handleTab;
        }
      });

      // Restore focus to last focused element before modal opened
      if (lastFocusedElement) lastFocusedElement.focus();
    }
  </script>

</body>
</html>
