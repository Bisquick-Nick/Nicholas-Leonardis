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
