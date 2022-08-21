// Sounds 
const sounds = {
	bassDrum1: new Audio('./assets/audio/kit1/bass-drum1.wav', './assets/audio/kit1/bass-drum1.mp3'),
	bassDrum2: new Audio('./assets/audio/kit2/bass-drum2.wav', './assets/audio/kit2/bass-drum2.mp3'),
	snareDrum1: new Audio('./assets/audio/kit1/snare-drum1.wav', './assets/audio/kit1/snare-drum1.mp3'),
	snareDrum2: new Audio('./assets/audio/kit2/snare-drum2.wav', './assets/audio/kit2/snare-drum2.mp3'),
	hats1: new Audio('./assets/audio/kit1/hats1.wav', './assets/audio/kit1/hats1.mp3'),
	hats2: new Audio('./assets/audio/kit2/hats2.wav', './assets/audio/kit2/hats2.mp3'),
	crash1: new Audio('./assets/audio/kit1/crash1.wav', './assets/audio/kit1/crash1.mp3'),
	crash2: new Audio('./assets/audio/kit2/crash2.wav', './assets/audio/kit2/crash2.mp3'),
	highTom1: new Audio('./assets/audio/kit1/high-tom1.wav', './assets/audio/kit1/high-tom1.mp3'),
	highTom2: new Audio('./assets/audio/kit2/high-tom2.wav', './assets/audio/kit2/high-tom2.mp3'),
	lowTom1: new Audio('./assets/audio/kit1/low-tom1.wav', './assets/audio/kit1/low-tom1.mp3'),
	lowTom2: new Audio('./assets/audio/kit2/low-tom2.wav', './assets/audio/kit2/low-tom2.mp3')
}

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bassDrum');
const snareDrumTrigger = document.getElementById('snareDrum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('highTom');
const lowTomTrigger = document.getElementById('lowTom');

// DOM Elements - Control Buttons
let kitSelector = document.getElementById('kit-selector');
let kitSelectorLabel = document.getElementById('kit-label');
let kitSelected = '1';

// Event Listeners
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum);
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash);
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);

kitSelector.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		kitSelectorLabel.innerText = "Kit 2";
		kitSelected = '2';
	} else {
		kitSelectorLabel.innerText = "Kit 1";
		kitSelected = '1';
	}
});


// Trigger Functions
/** Play the bass drum samples */

function playBassDrum() {
	if (kitSelector.checked === false) {
		sounds.bassDrum1.play();
	} else {
		sounds.bassDrum2.play();
	}
}

/** Play the snare drum sample */
function playSnareDrum() {
	if (kitSelector.checked === false) {
		sounds.snareDrum1.play();
	} else {
		snareDrum2.play();
	}
}

/** Play the hats sample */
function playHats() {
	if (kitSelector.checked === false) {
		sounds.hats1.play();
	} else {
		sounds.hats2.play();
	}
}

/** Play the crash sample */
function playCrash() {
	if (kitSelector.checked === false) {
		sounds.crash1.play();
	} else {
		sounds.crash2.play();
	}
}

/** Play the high tom sample */
function playHighTom() {
	if (kitSelector.checked === false) {
		sounds.highTom1.play();
	} else {
		sounds.highTom2.play();
	}
}

/** Play the low tom drum sample */
function playLowTom() {
	if (kitSelector.checked === false) {
		sounds.lowTom1.play();
	} else {
		sounds.lowTom2.play();
	}
}



// User Choice Array

let layer1 = [];

const playBtn = document.getElementById('play-btn');
const buttons = document.querySelectorAll('.trigger');


// User chooses sounds, pushed into array
buttons.forEach(button => button.addEventListener('click', event => {
	layer1.push(event.currentTarget.id + kitSelected);
	console.log(layer1);
}))

// Function to play sound layer
function playLayer1() {
	for (let sound of layer1) {
		setInterval(() => {
			sounds[sound].play();
		}, 1000);
	}
}




// Event Listener
playBtn.addEventListener('click', playLayer1, imWorking)

function imWorking() {
	console.log('Im working!');
}
