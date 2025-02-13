onload = () => {
  document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Beautiful",
    "Gorgeous",
    "Stunning",
    "Radiant",
    "Charming",
    "Elegant",
    "Lovely",
    "Amazing",
    "Fabulous",
    "Wonderful",
    "Adorable",
    "Brilliant",
    "Exceptional",
    "Delightful",
    "Magnificent",
    "Phenomenal",
    "Remarkable",
    "Outstanding",
    "Spectacular",
    "Impressive"
  ];

  const floatingWordsContainer = document.querySelector(".floating-words");

  // Function to create a floating word element
  function createFloatingWord(text) {
    const word = document.createElement("div");
    word.classList.add("floating-word");
    word.textContent = text;

    // Randomize starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    word.style.left = `${startX}px`;
    word.style.top = `${startY}px`;

    // Randomize animation duration and delay
    const duration = 10 + Math.random() * 10; // 10-20 seconds
    const delay = Math.random() * 5; // 0-5 seconds
    word.style.animationDuration = `${duration}s`;
    word.style.animationDelay = `${delay}s`;

    floatingWordsContainer.appendChild(word);
  }

  // Create floating words
  words.forEach((word) => {
    createFloatingWord(word);
  });
});
document.addEventListener("mousemove", (e) => {
  const words = document.querySelectorAll(".floating-word");
  words.forEach((word) => {
    const rect = word.getBoundingClientRect();
    const wordCenterX = rect.left + rect.width / 2;
    const wordCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - wordCenterX;
    const dy = e.clientY - wordCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) { // If the cursor is within 100px of the word
      const angle = Math.atan2(dy, dx);
      const pushDistance = 100 - distance; // Push the word away
      word.style.transform = `translate(${Math.cos(angle) * pushDistance}px, ${Math.sin(angle) * pushDistance}px)`;
    } else {
      word.style.transform = "translate(0, 0)"; // Reset position
    }
  });
});