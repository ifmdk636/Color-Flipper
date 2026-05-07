const greenBtn = document.querySelector(".btn-green");
const redBtn = document.querySelector(".btn-red");
const blueBtn = document.querySelector(".btn-blue");
const randomBtn = document.querySelector(".btn-random");

greenBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#16a34a";
});

redBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#dc2626";
});

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#2563eb";
});

randomBtn.addEventListener("click", () => {
  const colors = [
    "#16a34a",
    "#dc2626",
    "#2563eb",
    "#f59e0b",
    "#7c3aed",
    "#ec4899",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];
});
