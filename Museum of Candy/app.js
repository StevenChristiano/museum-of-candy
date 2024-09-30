const sections = document.querySelectorAll('.content');
const navLinks = document.querySelectorAll('#mainNavbar .nav-link');

// Function to update the active class based on scroll position
window.addEventListener('scroll', function() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});