const buttons = document.querySelectorAll("button");

for(let items of buttons) {
    console.log(items);
}

// console.log(buttons);

const newElement = document.createElement("p");
const createElement = document.getElementsByClassName("createElement");

newElement.innerHTML = "Laboris ea culpa nostrud ex elit aliquip eiusmod esse voluptate incididunt officia Lorem excepteur qui."

// console.log(newElement)

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://www.google.com");

console.log(newImg);