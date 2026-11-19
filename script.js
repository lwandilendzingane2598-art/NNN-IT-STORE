// JavaScript to handle active link highlighting with local storage
const navLinks = document.querySelectorAll('nav a');
const currentLocation = location.href;

// Set the active link on initial page load
navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links
    link.classList.add('active'); // Add active class to the clicked link
    localStorage.setItem('activeLink', link.href); // Store the active link in local storage
  });
});

// Set the active link from local storage when the page is reloaded
const activeLink = localStorage.getItem('activeLink');
if (activeLink) {
  navLinks.forEach(link => {
    if (link.href === activeLink) {
      link.classList.add('active');
    }
  });
}
