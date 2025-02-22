document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function shuffleSlides() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Shuffle slides automatically every 3 seconds
    setInterval(shuffleSlides, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    // Hide all slides except the first one
    const slides = document.querySelectorAll(".slide");
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
});

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

    const expandButton = document.getElementById('expandButton');
    const expandableSection = document.getElementById('expandableSection');

    expandButton.addEventListener('click', function() {
        expandableSection.classList.toggle('hidden');
    });
});