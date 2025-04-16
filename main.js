document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const drawer = document.getElementById('drawer');
  const closeDrawer = document.querySelector('.close-drawer');

  navToggle.addEventListener('click', function() {
    drawer.classList.toggle('open');
  });

  closeDrawer.addEventListener('click', function() {
    drawer.classList.remove('open');
  });
});