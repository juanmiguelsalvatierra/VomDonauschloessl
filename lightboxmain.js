

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
      drawer.classList.toggle('open');
    });
  }

  if (closeDrawer && drawer) {
    closeDrawer.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  const expandButton = document.getElementById('expandButton');
  const expandableSection = document.getElementById('expandableSection');

  if (expandButton && expandableSection) {
    expandButton.addEventListener('click', () => {
      expandableSection.classList.toggle('hidden');
    });
  }
});