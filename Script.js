function openModal(type) {
  document.getElementById(type + 'Modal').style.display = 'flex';
}

function closeModal(type) {
  document.getElementById(type + 'Modal').style.display = 'none';
}

function fakeLogin() {
  const user = document.getElementById('loginUser').value;
  alert(`Welcome back, ${user}! Time to train like LZZZ-S2.`);
  closeModal('login');
}

function fakeSignup() {
  const user = document.getElementById('signupUser').value;
  alert(`Account created for ${user}! Let's get that aura glowing.`);
  closeModal('signup');
}
