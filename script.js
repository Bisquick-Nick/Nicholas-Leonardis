// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show success message (for demonstration)
    alert(`Thank you, ${name}! I'll get back to you at ${email}`);

    // Reset form
    this.reset();
});
window.addEventListener('DOMContentLoaded', () => {
  console.log("Site loaded!"); // Test if script runs on live site
});
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.getElementById('mainHeader');

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});