function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  const whatsappMessage =
    `Hello GS Aluminium!\\n\\n*Name:* ${name}\\n*Email:* ${email}\\n*Phone:* ${phone}\\n*Subject:* ${subject}\\n\\n*Message:*\\n${message}`;

  const whatsappURL =
    `https://wa.me/919495904250?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
  
  // Reset form
  document.querySelector('form').reset();
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
