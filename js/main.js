// ==================== Hamburger Menu ====================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  function checkScreenSize() {
      if (window.innerWidth <= 768) {
          navLinks.style.display = "none"; 
      } else {
          navLinks.style.display = "flex"; 
      }
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  menuToggle.addEventListener("click", function (event) {
      event.stopPropagation(); 
      if (navLinks.style.display === "none" || navLinks.style.display === "") {
          navLinks.style.display = "flex";  
      } else {
          navLinks.style.display = "none";  
      }
  });

  document.addEventListener("click", function (event) {
      if (window.innerWidth <= 768 && !menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
          navLinks.style.display = "none"; 
      }
  });
});

// ==================== Dropdown Menu ====================
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  if (!dropdownToggle) return;

  dropdownToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      const dropdown = this.parentElement;
      dropdown.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
          if (!dropdown.contains(event.target)) {
              dropdown.classList.remove("open");
          }
      });
  });
});

// ==================== H1 Animation ====================
document.addEventListener("DOMContentLoaded", function () {
  const h1Elements = document.querySelectorAll("h1");

  if (h1Elements.length === 0) return;

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              // Animasyonu engellemek için 'no-animation' sınıfı olan öğeleri kontrol et
              if (entry.isIntersecting && !entry.target.classList.contains("no-animation")) {
                  entry.target.classList.add("animate");
              }
          });
      },
      { threshold: 0.5 }
  );

  h1Elements.forEach((h1) => observer.observe(h1));
});

// ==================== H2 Animation ====================
document.querySelectorAll('h2').forEach((h2) => {
  const text = h2.innerText.split('');
  h2.innerHTML = '';

  text.forEach((letter, index) => {
    const span = document.createElement('span');
    span.innerHTML = letter === ' ' ? '&nbsp;' : letter;
    span.style.setProperty('--delay', `${index * 0.1}s`);
    h2.appendChild(span);
  });
});

const h2Elements = document.querySelectorAll('h2');
const h2Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Sayfa açıldığında h2 öğesinin animasyonu başlasın
      entry.target.querySelectorAll('span').forEach((span) => {
        span.style.animationPlayState = 'running'; 
      });
    }
  });
}, {
  threshold: 0.5
});

h2Elements.forEach((h2) => {
  h2Observer.observe(h2);
});
