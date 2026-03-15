// Smooth scroll (future React hook equivalent)
lucide.createIcons();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple product hover log (placeholder for future cart logic)
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.cursor = "pointer";
  });
});
////////////////////////////////////
const section = document.querySelector('.brand-split');

if (section) {
  const image = section.querySelector('.brand-split-image img');
  const text = section.querySelector('.brand-split-text');
  const listItems = section.querySelectorAll('.brand-list li');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add('animate-image');
          text.classList.add('animate-text');

          listItems.forEach((item, index) => {
            item.style.animationDelay = `${0.6 + index * 0.2}s`;
            item.classList.add('animate-list');
          });

          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    }
  );

  observer.observe(section);
}

//////////////////////////////
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => revealObserver.observe(el));
///////////////////////////////////////
const cards = document.querySelectorAll(".product-card");

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.15}s`;
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));

// بدّلي الرقم: كلما زاد = أبطأ
document.documentElement.style.setProperty('--avisSpeed', '28s');

  const navLinks = document.querySelectorAll(".bottom-nav a");
  const indicator = document.querySelector(".nav-indicator");

  function moveIndicator(el) {
    const index = [...navLinks].indexOf(el);
    indicator.style.transform = `translateX(${index * 100}%)`;
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveIndicator(link);
    });
  });

  // initial position
  moveIndicator(document.querySelector(".bottom-nav a.active"));


  
    const desktopLinks = document.querySelectorAll(".nav a");

  desktopLinks.forEach(link => {
    link.addEventListener("click", () => {
      desktopLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
