const header = document.getElementById("siteHeader");
const menuButton = document.getElementById("mobileMenuButton");
const nav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".main-nav a");
const contactForm = document.getElementById("contactForm");


// Sticky header effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Mobile navigation
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", open);
});


// Close mobile menu after link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});


// Highlight navigation based on current section
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    });
  },
  {
    rootMargin: "-40% 0px -50% 0px"
  }
);

sections.forEach((section) => observer.observe(section));


// Placeholder contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    "The contact form is ready to be connected to your email or backend."
  );
});


// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();