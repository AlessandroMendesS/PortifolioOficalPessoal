var options = {
  strings: ["meu design", "Web Designer", "Front-end"],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1200,
  loop: true,
};

var typed = new Typed(".typing", options);


const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {
  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    cursorDot.style.top = clientY + "px";
    cursorDot.style.left = clientX + "px";
    cursorOutline.style.top = clientY + "px";
    cursorOutline.style.left = clientX + "px";
  });

  const interactiveElements = document.querySelectorAll("a, button, .github-btn");

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("cursor-hover");
    });
  });
}


const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}


const designTabContainers = document.querySelectorAll(".design-tabs");

designTabContainers.forEach((container) => {
  const buttons = container.querySelectorAll(".design-tab-btn");
  const contents = container.querySelectorAll(".design-tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");

      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((content) => {
        content.classList.toggle(
          "active",
          content.getAttribute("data-tab") === tab
        );
      });

      btn.classList.add("active");
    });
  });
});


const revealSections = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealSections.forEach((sec) => observer.observe(sec));
} else {

  revealSections.forEach((sec) => sec.classList.add("reveal-visible"));
}
