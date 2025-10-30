// Herbs data
const herbs = {
  "Tulsi": "Boosts immunity, relieves stress, improves respiratory health.",
  "Neem": "Purifies blood and detoxifies the skin.",
  "Ashwagandha": "Reduces stress and improves energy levels.",
  "Giloy": "Supports immunity and helps recover from fever.",
  "Turmeric": "Natural anti-inflammatory and antioxidant."
};

document.getElementById("herbSearch").addEventListener("input", function() {
  const query = this.value.trim().toLowerCase();
  const results = document.getElementById("herbResults");
  results.innerHTML = "";
  if (query) {
    for (let herb in herbs) {
      if (herb.toLowerCase().includes(query)) {
        const div = document.createElement("div");
        div.classList.add("herb-card");
        div.innerHTML = `<h4>${herb}</h4><p>${herbs[herb]}</p>`;
        results.appendChild(div);
      }
    }
  }
});

// Quiz feature
// Ayurvedic Quiz (20 Dynamic Questions)
const quizData = [
  { q: "Which herb is called 'Indian Ginseng'?", a: "Ashwagandha", options: ["Tulsi", "Ashwagandha", "Neem", "Giloy"] },
  { q: "Which herb is known to detoxify blood?", a: "Neem", options: ["Turmeric", "Brahmi", "Neem", "Tulsi"] },
  { q: "Which herb is a natural immunity booster?", a: "Giloy", options: ["Ashwagandha", "Tulsi", "Giloy", "Neem"] },
  { q: "Which spice is famous for its anti-inflammatory properties?", a: "Turmeric", options: ["Black Pepper", "Turmeric", "Cinnamon", "Clove"] },
  { q: "Which herb is often used to relieve stress?", a: "Brahmi", options: ["Brahmi", "Amla", "Neem", "Giloy"] },
  { q: "Which herb is used to improve digestion?", a: "Triphala", options: ["Tulsi", "Triphala", "Ashwagandha", "Neem"] },
  { q: "Which herb is good for skin glow?", a: "Aloe Vera", options: ["Giloy", "Aloe Vera", "Tulsi", "Neem"] },
  { q: "Which fruit is rich in Vitamin C and used in Ayurveda?", a: "Amla", options: ["Jamun", "Amla", "Bael", "Tulsi"] },
  { q: "Which herb helps regulate blood sugar levels?", a: "Jamun", options: ["Ashwagandha", "Jamun", "Brahmi", "Amla"] },
  { q: "Which plant is called 'Holy Basil'?", a: "Tulsi", options: ["Neem", "Tulsi", "Giloy", "Brahmi"] },
  { q: "Which spice helps in improving metabolism?", a: "Black Pepper", options: ["Black Pepper", "Turmeric", "Cinnamon", "Cardamom"] },
  { q: "Which herb is used in Ayurvedic memory tonics?", a: "Shankhpushpi", options: ["Amla", "Neem", "Shankhpushpi", "Tulsi"] },
  { q: "Which herb helps in liver detoxification?", a: "Kalmegh", options: ["Ashwagandha", "Kalmegh", "Neem", "Amla"] },
  { q: "Which plant’s juice is used to cool the body?", a: "Aloe Vera", options: ["Tulsi", "Aloe Vera", "Neem", "Giloy"] },
  { q: "Which spice helps improve blood circulation?", a: "Cinnamon", options: ["Cinnamon", "Clove", "Cardamom", "Turmeric"] },
  { q: "Which Ayurvedic herb is used for fever treatment?", a: "Giloy", options: ["Giloy", "Amla", "Tulsi", "Neem"] },
  { q: "Which herb promotes hair growth?", a: "Bhringraj", options: ["Amla", "Tulsi", "Bhringraj", "Neem"] },
  { q: "Which spice supports weight loss?", a: "Fenugreek", options: ["Cumin", "Fenugreek", "Turmeric", "Cinnamon"] },
  { q: "Which plant is known as the 'Queen of Herbs'?", a: "Tulsi", options: ["Tulsi", "Amla", "Giloy", "Neem"] },
  { q: "Which herb is most used in Ayurvedic eye treatments?", a: "Triphala", options: ["Brahmi", "Triphala", "Neem", "Amla"] }
];

let current = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const quizProgress = document.getElementById("quizProgress");
const nextBtn = document.getElementById("nextQuestion");
const scoreDisplay = document.getElementById("quizScore");

function loadQuestion() {
  quizContainer.innerHTML = "";
  scoreDisplay.textContent = "";
  if (current < quizData.length) {
    const q = quizData[current];
    quizProgress.textContent = `Question ${current + 1} / ${quizData.length}`;
    const question = document.createElement("h4");
    question.textContent = q.q;
    quizContainer.appendChild(question);

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => handleAnswer(btn, opt, q.a);
      quizContainer.appendChild(btn);
    });
  } else {
    showFinalScore();
  }
}

function handleAnswer(button, selected, correct) {
  const allButtons = quizContainer.querySelectorAll("button");
  allButtons.forEach(b => (b.disabled = true));

  if (selected === correct) {
    button.style.background = "#388e3c";
    score++;
  } else {
    button.style.background = "#c62828";
    allButtons.forEach(b => {
      if (b.textContent === correct) b.style.background = "#81c784";
    });
  }
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current <= quizData.length) loadQuestion();
});

function showFinalScore() {
  quizContainer.innerHTML = `<h3>🎉 You completed the quiz!</h3>`;
  quizProgress.textContent = `Score: ${score} / ${quizData.length}`;
  scoreDisplay.textContent = `🌿 Great work! You answered ${score} out of ${quizData.length} questions correctly.`;
  nextBtn.style.display = "none";
}

loadQuestion();


// Daily Tip feature
const tips = [
  "Drink warm water with lemon to detox every morning.",
  "Include turmeric in your diet for natural immunity.",
  "Do deep breathing (Pranayama) daily for clarity.",
  "Use Tulsi tea to calm your mind and body.",
  "Sleep early to balance your doshas naturally."
];

const tipDisplay = document.getElementById("dailyTip");
const newTipBtn = document.getElementById("newTip");

function showRandomTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipDisplay.textContent = randomTip;
}

newTipBtn.addEventListener("click", showRandomTip);
showRandomTip();
