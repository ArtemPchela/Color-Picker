const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const logo = document.getElementById("logo-color");
const color = document.querySelector(".color");

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click", () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    logo.style.color = hexColor;

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});



