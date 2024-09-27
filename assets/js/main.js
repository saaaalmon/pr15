"use strict";
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let red = randomInteger(0, 255);
let redInterval = setInterval(() => {
    let red = randomInteger(0, 255);
}, 500);
let green = randomInteger(0, 255);
let greenInterval = setInterval(() => {
    let green = randomInteger(0, 255);
}, 500);
let blue = randomInteger(0, 255);
let blueInterval = setInterval(() => {
    let blue = randomInteger(0, 255);
}, 500);
const start = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const block = document.getElementById('block');
let startInterval;
start.addEventListener('click', () => {
    if (startInterval) {
        clearInterval(startInterval);
    }
    startInterval = setInterval(function () {
        red = randomInteger(0, 255);
        green = randomInteger(0, 255);
        blue = randomInteger(0, 255);
        block.style.background = `rgb(${red}, ${green}, ${blue})`;
    }, 500);
})
stop_btn.addEventListener('click', () => {
    clearInterval(startInterval);
    clearInterval(redInterval);
    clearInterval(greenInterval);
    clearInterval(blueInterval);
})
