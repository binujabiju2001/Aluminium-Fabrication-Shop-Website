document.addEventListener("DOMContentLoaded", function () {

  // FACEBOOK
  const fb = document.getElementById("fb");
  if (fb) {
    fb.addEventListener("click", () => {
      window.open("https://www.facebook.com/", "_blank");
    });
  }

  // INSTAGRAM
  const insta = document.getElementById("insta");
  if (insta) {
    insta.addEventListener("click", () => {
      window.open("https://www.instagram.com/", "_blank");
    });
  }

  // NAVBAR ACTIVE LINKS
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.custom-navbar');
  const menu = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');

      if (window.innerWidth < 992 && menu) {
        menu.classList.remove('show');
      }
    });
  });

  // NAVBAR SCROLL EFFECT
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 80);
    });
  }

  // GALLERY LIGHTBOX
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (images.length && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

});
