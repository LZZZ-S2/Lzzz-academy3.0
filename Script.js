// 🔊 Play click sound
function playClick() {
  const clickSound = new Audio("assets/click.mp3");
  clickSound.play();
}

// 🔐 Fake Login System
function fakeLogin() {
  const user = document.getElementById("loginUser").value;
  alert(`Welcome back, ${user || "Gamer"}!`);
  closeModal('login');
}

function fakeSignup() {
  const user = document.getElementById("signupUser").value;
  alert(`Welcome to LZZZ Academy, ${user || "New Legend"}!`);
  closeModal('signup');
}

// 🔓 Modal Handlers
function openModal(type) {
  document.getElementById(`${type}Modal`).style.display = 'flex';
}

function closeModal(type) {
  document.getElementById(`${type}Modal`).style.display = 'none';
}

// 🔒 Close modals if you click outside
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}
