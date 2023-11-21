const gambar = document.getElementById("gambar");

gambar.setAttribute("width", "300");
gambar.setAttribute("height", "215");


const buttons = document.querySelectorAll(".button");
const playButton = buttons[3]; // Get div button play

const playButtonElement = playButton.children[0]; // Get children button play
playButtonElement.setAttribute("type", "submit");
// console.log(playButtonElement);

const links = document.getElementById("links");
// links.innerText = "Halo ini testing innerText";

const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar pemrograman di Dicoding";

dicoding.innerHTML = "<i>Belajar pemrograman di Dicoding</i>";


for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
}