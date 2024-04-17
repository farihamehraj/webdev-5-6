// document.querySelectorAll("button").addEventListener("click", handleClick)

// let btns=document.querySelectorAll("button");

// for (let btn of btns)
//   btn.addEventListener("click", handleClick)

// function handleClick()
// {
//         alert("I got clicked!")
// }

let btns=document.querySelectorAll("button");

let soundList = ["./sounds/crash.mp3", "./sounds/snare.mp3", "./sounds/kick-bass.mp3", "./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3"]
let imageList = ["./images/crash.png", "./images/snare.png", "./images/kick.png", "./images/tom1.png", "./images/tom2.png", "./images/tom3.png", "./images/tom4.png"]

for (let btn of btns) 
{
  btn.addEventListener("click", addNoise) // when clicked --> calls function addNoise and adds a noise
  let i = Array.from(btns).indexOf(btn)
  btn.style.backgroundImage = `url('${imageList[i]}')`; // sets image as a bg image to the button
  btn.style.backgroundSize = "cover"; // fit the button
  btn.textContent = ""; // gets rid of the letter
}

function addNoise()
{
  let i = Array.from(btns).indexOf(this);
  var audio = new Audio(soundList[i]);
  audio.play(); // adds and plays noise
}