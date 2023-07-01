let btnChanger = document.getElementById("colorButton");

btnChanger.addEventListener("click", () => {
  let body = document.body; // this is for body element
  let randomColor = getRandomColor();

  body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(btnChanger);
