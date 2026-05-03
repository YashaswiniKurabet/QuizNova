// 15-second looping countdown in the hero visual
const countdownEl = document.getElementById("countdown");
let countdownValue = 15;
let timerId = null;

function startCountdown() {
  if (!countdownEl) return;

  countdownValue = 15;
  countdownEl.textContent = countdownValue;

  clearInterval(timerId);
  timerId = setInterval(() => {
    countdownValue -= 1;
    if (countdownValue <= 0) {
      countdownEl.textContent = "0";
      clearInterval(timerId);

      // Small flash effect when time hits 0
      countdownEl.style.color = "#ff3366";
      setTimeout(() => {
        countdownEl.style.color = "var(--accent)";
        startCountdown(); // restart
      }, 600);
    } else {
      countdownEl.textContent = countdownValue;
    }
  }, 1000);
}

startCountdown();

// Form handler – this is where you hook in your real quiz generator
const quizForm = document.getElementById("quiz-setup-form");

if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(quizForm);
    const topic = formData.get("topic");
    const difficulty = formData.get("difficulty");
    const audience = formData.get("audience");
    const questions = Number(formData.get("questions"));

    // TODO: Replace this with your actual AI quiz generation logic
    console.log({ topic, difficulty, audience, questions });

    alert(
      `Quiz request:\n` +
        `Topic: ${topic}\n` +
        `Difficulty: ${difficulty}\n` +
        `Audience: ${audience}\n` +
        `Questions: ${questions}\n\n` +
        `Now plug this into your AI Quiz Generator logic.`
    );
  });
}