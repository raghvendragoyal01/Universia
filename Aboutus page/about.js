document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Scroll-based animations for sections
    const animateOnScroll = () => {
      const sections = document.querySelectorAll(".about-section, .explore-universe, .photo-gallery, .team-section");
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
          section.classList.add("animate-visible");
        } else {
          section.classList.remove("animate-visible");
        }
      });
    };
  
  
  
    // Photo gallery zoom effect on click
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");
  
        const zoomedImage = document.createElement("img");
        zoomedImage.src = item.src;
        zoomedImage.classList.add("zoomed-image");
  
        overlay.appendChild(zoomedImage);
        document.body.appendChild(overlay);
  
        overlay.addEventListener("click", () => {
          document.body.removeChild(overlay);
        });
      });
    });
  
    // Glow effect on team member images on hover
    const teamImages = document.querySelectorAll(".team-image img");
    teamImages.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        image.style.filter = "drop-shadow(0 0 20px #ffcc00)";
      });
      image.addEventListener("mouseleave", () => {
        image.style.filter = "none";
      });
    });
  });
  