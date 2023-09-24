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

// var crsr = document.querySelector(".cursor")
// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         var att = elem.getAttribute("data-image")
//         crsr.style.width = "470px"
//         crsr.style.height = "370px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
//     })
//     elem.addEventListener("mouseleave",function(){
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })

// // // Assuming you have an element with the ID "crsr"
// // var crsr = document.getElementById("crsr");

// var boxes = document.querySelectorAll(".box");
// boxes.forEach(function(elem) {
//     elem.addEventListener("mouseenter", function() {
//         var att = elem.getAttribute("data-image");
//         crsr.style.width = "470px";
//         crsr.style.height = "370px";
//         crsr.style.borderRadius = "0";
//         crsr.style.backgroundImage = `url(${att})`;
//     });
//     elem.addEventListener("mouseleave", function() {
//         // Reset the cursor styles or change them as needed
//         crsr.style.width = "20px";
//         crsr.style.height = "20px";
//         crsr.style.borderRadius = "50%";
//         crsr.style.backgroundImage = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
  var crsr = document.querySelector(".cursor");
  var boxes = document.querySelectorAll(".box");

  boxes.forEach(function(elem) {
      elem.addEventListener("mouseenter", function() {
          var att = elem.getAttribute("data-image");
          crsr.style.width = "470px";
          crsr.style.height = "370px";
          crsr.style.borderRadius = "0";
          crsr.style.backgroundImage = `url(${att})`;
      });

      elem.addEventListener("mouseleave", function() {
          elem.style.backgroundColor = "transparent";
          crsr.style.width = "20px";
          crsr.style.height = "20px";
          crsr.style.borderRadius = "50%";
          crsr.style.backgroundImage = "none";
      });
  });
});
