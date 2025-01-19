const menuToggle = document.querySelector('.menu-toggle');
const closeToggle = document.querySelector('.close-toggle');
const navigation = document.querySelector('.navigation');

// Open Navbar
menuToggle.addEventListener('click', () => {
  navigation.classList.add('active');
  menuToggle.classList.add('active');
  closeToggle.classList.add('active');
});

// Close Navbar
closeToggle.addEventListener('click', () => {
  navigation.classList.remove('active');
  menuToggle.classList.remove('active');
  closeToggle.classList.remove('active');
});

