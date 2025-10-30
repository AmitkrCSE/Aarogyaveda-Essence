// Filter Services
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    serviceCards.forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'flex' : 'none';
    });
  });
});

// Dynamic Counters
function animateCounter(id, endValue, duration) {
  let start = 0;
  const element = document.getElementById(id);
  const increment = endValue / (duration / 50);
  const counter = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start);
  }, 50);
}
animateCounter('customers', 1250, 3000);
animateCounter('products', 230, 3000);
animateCounter('consults', 540, 3000);

// Blog Hover Effects
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px) rotateX(2deg)';
    card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0) rotateX(0)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});
