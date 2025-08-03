
  // Mobile menu toggle
  const btnMobile = document.getElementById('btn-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  btnMobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Mobile submenu toggle
  document.querySelectorAll('.mobile-dropdown > button').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling;
      if (!submenu) return;
      submenu.classList.toggle('hidden');
      button.querySelector('svg').classList.toggle('rotate-180');
    });
  });

  // Contact form validation and dummy submit
  const contactForm = document.getElementById('contact-form');
  const nameInput = contactForm.querySelector('#name');
  const emailInput = contactForm.querySelector('#email');
  const messageInput = contactForm.querySelector('#message');

  const nameError = contactForm.querySelector('#name-error');
  const emailError = contactForm.querySelector('#email-error');
  const messageError = contactForm.querySelector('#message-error');

  const formMessage = document.getElementById('form-message');

  function validateEmail(email) {
    return /^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email);
  }

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === '') {
      nameError.classList.remove('hidden');
      valid = false;
    } else {
      nameError.classList.add('hidden');
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    } else {
      emailError.classList.add('hidden');
    }

    if (messageInput.value.trim() === '') {
      messageError.classList.remove('hidden');
      valid = false;
    } else {
      messageError.classList.add('hidden');
    }

    if (valid) {
      formMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
      contactForm.reset();
      // In real scenario, here you'd send form data via AJAX or a backend.
    } else {
      formMessage.textContent = '';
    }
  });
 document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let interval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('opacity-100', i === index);
        dot.classList.toggle('opacity-30', i !== index);
      });
      
      currentIndex = index;
    }

    function nextSlide() {
      const newIndex = (currentIndex + 1) % totalSlides;
      showSlide(newIndex);
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        showSlide(index);
        resetAutoSlide();
      });
    });

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }
    

    // Initialize
    showSlide(0);
    startAutoSlide();
  });

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element with an offset
    const headerOffset = 80; // Adjust this value based on your header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  });
});
