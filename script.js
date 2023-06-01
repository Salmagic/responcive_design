// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const currentClass = body.className;
  body.className = currentClass === "dark" ? "" : "dark";
}

// Add button animation
const animateButton = () => {
  const button = document.getElementById("animate-button");
  button.style.animation = "animate-button 1s ease";
  setTimeout(() => {
    button.style.animation = "";
  }, 1000);
};

// Attach click event listener to the button
document.getElementById("animate-button").addEventListener("click", animateButton);
