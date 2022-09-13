const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "orange", "blue", "gray"];

const btn = document.getElementById('btn'); // btn here before const is a name which 
//can be any name.the btn inside the() is the id that we gave in html 
//to the button
const color = document.querySelector('.color');


 // 'click' here is a function
// here addEventListener is a callback function 
btn.addEventListener('click', function () {
   // how to target the webpage body
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}