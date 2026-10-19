const helloButton = document.querySelector("#hello-button");
const greeting = document.querySelector("#greeting");

helloButton.hidden = false;
helloButton.addEventListener("click", () => {
  greeting.textContent = "Hello! Thanks for stopping by.";
});
