const facts = [
  "Octopuses have three hearts! 🐙",
  "The Sun is a star! ☀️",
  "Bananas are berries! 🍌",
  "Sharks existed before trees! 🦈",
  "A day on Venus is longer than its year! 🪐"
];

const factText = document.querySelector("section p");

document.querySelector("section h2").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});

document.querySelector("#search").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();

  document.querySelectorAll(".categories button").forEach(button => {
    button.style.display = button.textContent.toLowerCase().includes(query)
      ? "inline-block"
      : "none";
  });
});