document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
  });
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  });
  // Function to check if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add animation class when in viewport
function animateOnScroll() {
  const profileSection = document.getElementById('profile-section');
  
  if (isInViewport(profileSection)) {
      profileSection.style.opacity = 1;
      profileSection.style.transform = 'translateY(0)';
  }
}

// Event listener to trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Initial check in case the section is already in the viewport on load
window.addEventListener('load', animateOnScroll);
