

// ==============================
// SCROLL ANIMATION (AUTO DETECT)
// ==============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up, .fade-left, .fade-right")
  .forEach(el => observer.observe(el));


// ==============================
// TYPEWRITER (HALAMAN MENU)
// ==============================
function typeWriter(element, text, speed = 40) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

const salam = document.getElementById("salam");
if (salam) {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("nama");

  if (nama) {
    typeWriter(salam, `Halo ${nama} 👋 siap belajar hari ini?`);
  }
}


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const ripple = document.createElement("span");

    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const x = e.clientX - this.offsetLeft;
    const y = e.clientY - this.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});


// ==============================
// FORM LOADING + VALIDASI
// ==============================
const form = document.getElementById("formBiodata");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const umur = document.getElementById("umur").value.trim();

    if (!nama || !umur) {
      alert("Nama dan umur wajib diisi!");
      return;
    }

    const btn = form.querySelector("button");
    btn.innerHTML = "Menyimpan...";
    btn.disabled = true;

    setTimeout(() => {
      window.location.href =
        `menu.html?nama=${nama}&umur=${umur}`;
    }, 1000);
  });
}


// ==============================
// CARD CLICK SOUND (OPSIONAL)
// ==============================
const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});


// ==============================
// DARK MODE TOGGLE (GLOBAL)
// ==============================
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// ==============================
// BACKGROUND FLOATING EFFECT
// ==============================
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble-bg");

  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 6000);
}

setInterval(createBubble, 800);