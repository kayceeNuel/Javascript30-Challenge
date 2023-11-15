// Select all elements with the class 'key'
const keys = Array.from(document.querySelectorAll('.key'));

// Map key names to their corresponding key codes
const keyCode = {
  A: 65,
  S: 83,
  D: 68, 
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
}; 

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

//play the corresponding sound when a key is pressed or clicked
function playSound(e) {

    // Select the audio element with data-key attribute
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  // Select the key element with data-key attribute
  const key = document.querySelector(
    `div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  // If no audio element is found, exit the function
  if (!audio) return;

  key.classList.add('playing'); // Add the playing class to the element
  audio.currentTime = 0; // rewinds play to the start
  audio.play();  // Play the audio
}


keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// Add 'click' event listener to each key to trigger the playSound
keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    playSound(e);
  })
);
