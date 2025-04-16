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

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");
  const triggers = document.querySelectorAll(".lightbox-trigger");

  // Ensure the lightbox is hidden on page load
  if (lightbox.id !== "hidden-lightbox") {
    lightbox.id = "hidden-lightbox";
  }

  // Open lightbox
  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior
      lightboxImg.src = e.target.src; // Set the clicked image as the lightbox image
      lightbox.id = "lightbox"; // Show the lightbox
    });
  });

  // Close lightbox when clicking the close button
  closeLightbox.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the lightbox container
    lightbox.id = "hidden-lightbox"; // Hide the lightbox
    lightboxImg.src = ""; // Clear the image source
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.id = "hidden-lightbox"; // Hide the lightbox
      lightboxImg.src = ""; // Clear the image source
    }
  });

  // Other functionality (e.g., nav toggle, expandable sections)
  const navToggle = document.querySelector('.nav-toggle');
  const drawer = document.getElementById('drawer');
  const closeDrawer = document.querySelector('.close-drawer');

  if (navToggle && drawer) {
    navToggle.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeDrawer && drawer) {
    closeDrawer.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
});