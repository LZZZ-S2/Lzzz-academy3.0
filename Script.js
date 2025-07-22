// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Open modal & focus first input
function openModal(type) {
  const modal = document.getElementById(type + 'Modal');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  // Focus first input inside modal
  const firstInput = modal.querySelector('input[type="text"], input[type="password"]');
  if (firstInput) firstInput.focus();

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

// Fake login/signup validation
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

// Close modal on click outside modal-content
window.addEventListener('click', (e) => {
  ['loginModal', 'signupModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (e.target === modal) {
      closeModal(id.replace('Modal','').toLowerCase());
    }
  });
});

// Toggle password visibility icons
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
  icon.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      icon.click();
    }
  });
});

// Accessibility focus trap for modals
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
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
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
  modal._handleTab = handleTab;
}

function releaseFocusTrap() {
