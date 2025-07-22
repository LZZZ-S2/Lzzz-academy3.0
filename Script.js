// ===== CLICK SOUND SETUP =====
const clickSound = new Audio('assets/click.mp3');

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Attach click sound to nav links, buttons, and course cards
document.querySelectorAll('nav a, nav button, .course-card').forEach(el => {
  el.addEventListener('click', () => {
    playClickSound();
  });
});

// ===== MODAL OPEN/CLOSE =====
function openModal(type) {
  const modal = document.getElementById(type + 'Modal');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  const firstInput = modal.querySelector('input[type="text"], input[type="password"]');
  if (firstInput) firstInput.focus();
  trapFocus(modal);
}

function closeModal(type) {
  const modal = document.getElementById(type + 'Modal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  releaseFocusTrap();
  document.querySelector(`button[onclick="openModal('${type}')"]`).focus();
}

// ===== FAKE LOGIN/SIGNUP WITH VALIDATION =====
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

// ===== CLOSE MODAL ON OUTSIDE CLICK =====
window.addEventListener('click', (e) => {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  if (e.target === loginModal) closeModal('login');
  if (e.target === signupModal) closeModal('signup');
});

// ===== PASSWORD VISIBILITY TOGGLE =====
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
  icon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      icon.click();
    }
  });
});

// ===== ACCESSIBILITY: FOCUS TRAP INSIDE MODAL =====
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
    if (e.key === 'Escape') {
      if (modal.id === 'loginModal') closeModal('login');
      if (modal.id === 'signupModal') closeModal('signup');
    }
  }
  modal.addEventListener('keydown', handleTab);

  // Store handler so it can be removed later
  modal._handleTab = handleTab;
}

function releaseFocusTrap() {
  if (!focusTrapActive) return;
  focusTrapActive = false;
  const modals = [document.getElementById('loginModal'), document.getElementById('signupModal')];
  modals.forEach(modal => {
    if (modal._handleTab) {
      modal.removeEventListener('keydown', modal._handleTab);
      delete modal._handleTab;
    }
  });
  if (lastFocusedElement) lastFocusedElement.focus();
}
