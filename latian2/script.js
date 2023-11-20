const gambar = document.getElementById("gambar");

gambar.setAttribute("width", "300");
gambar.setAttribute("height", "215");


const buttons = document.querySelectorAll(".button");
const playButton = buttons[3]; // Get div button play

const playButtonElement = playButton.children[0]; // Get children button play
console.log(playButtonElement);