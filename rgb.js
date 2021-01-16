const btn = document.getElementById("btn");
const logo = document.querySelector(".nav-logo");
const colorText = document.querySelector(".color");

btn.addEventListener('click', changeBg);

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

function changeBg() {
    const color1 = getRandomRGB();
    const color2 = getRandomRGB();
    const color3 = getRandomRGB();

    const color = `rgb(${color1}, ${color2}, ${color3})`;

    document.body.style.background = color;
    colorText.textContent = color;
    logo.style.color = color;
}


