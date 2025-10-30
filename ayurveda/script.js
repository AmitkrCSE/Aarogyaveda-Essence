const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const mainContent = document.getElementById("main-content");

menuToggle.addEventListener("click", () => {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-260px";
    mainContent.style.marginLeft = "0";
  } else {
    sidebar.style.left = "0px";
    mainContent.style.marginLeft = "250px";
  }
});





// Banner auto slider with 3D effect
let slides = document.querySelectorAll(".banner-slider .slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change every 4 seconds



// Feedback Form Submission
document.getElementById("feedback-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "🌿 Thank you for your feedback!";
  status.style.color = "#2e7d32";
  this.reset();
});

