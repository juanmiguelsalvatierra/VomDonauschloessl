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

// Funktion zum Anzeigen/Verstecken
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookie-banner").style.display = "block";
  }

  document.getElementById("cookie-accept").addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
  });
  });