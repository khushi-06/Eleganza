// Initialize Locomotive Scroll
function initLocoScroll() {
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });

  // Update ScrollTrigger when Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // Set up ScrollTrigger proxy for the ".main" element
  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // Refresh ScrollTrigger when the window updates
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // After setup, refresh ScrollTrigger and update LocomotiveScroll
  ScrollTrigger.refresh();

  // Get all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Add click event listeners to anchor links
  anchorLinks.forEach(anchorLink => {
      anchorLink.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default anchor link behavior
          const targetId = anchorLink.getAttribute('href').substring(1); // Get the target section's ID
          const targetSection = document.getElementById(targetId); // Find the target section by ID
          if (targetSection) {
              // Scroll to the target section using Locomotive Scroll
              locoScroll.scrollTo(targetSection);
          }
      });
  });
}

// Initialize Locomotive Scroll
initLocoScroll();

// Set up GSAP animations with ScrollTrigger
gsap.to(".hleft", {
  x: 90,
  scrollTrigger: {
      trigger: ".hleft",
      scroller: ".main",
      start: "top 30%",
      end: "top 0",
      scrub: true
  }
});

gsap.to(".hright", {
  x: -50,
  scrollTrigger: {
      trigger: ".hleft",
      scroller: ".main",
      start: "top 30%",
      end: "top 0",
      scrub: true
  }
});
