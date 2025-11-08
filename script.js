// ===== Responsive Menu Toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Project Card Click =====
function projectClick(projectName) {
  alert(`You clicked on ${projectName}`);
}

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if(name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
      valid = false;
    }

    if(valid) {
      document.getElementById('formSuccess').classList.remove('hidden');
      contactForm.reset();
    }
  });
}
