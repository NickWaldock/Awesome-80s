// Sounds 
const bassDrum1 = new Audio('./assets/audio/kit1/bass-drum1.wav', './assets/audio/kit1/bass-drum1.mp3');
const bassDrum2 = new Audio('./assets/audio/kit2/bass-drum2.wav', './assets/audio/kit2/bass-drum2.mp3');
const snareDrum1 = new Audio('./assets/audio/kit1/snare-drum1.wav', './assets/audio/kit1/snare-drum1.mp3');
const snareDrum2 = new Audio('./assets/audio/kit2/snare-drum2.wav', './assets/audio/kit2/snare-drum2.mp3');
const hats1 = new Audio('./assets/audio/kit1/hats1.wav', './assets/audio/kit1/hats1.mp3');
const hats2 = new Audio('./assets/audio/kit2/hats2.wav', './assets/audio/kit2/hats2.mp3');
const crash1 = new Audio('./assets/audio/kit1/crash1.wav', './assets/audio/kit1/crash1.mp3');
const crash2 = new Audio('./assets/audio/kit2/crash2.wav', './assets/audio/kit2/crash2.mp3');
const highTom1 = new Audio('./assets/audio/kit1/high-tom1.wav', './assets/audio/kit1/high-tom1.mp3');
const highTom2 = new Audio('./assets/audio/kit2/high-tom2.wav', './assets/audio/kit2/high-tom2.mp3');
const lowTom1 = new Audio('./assets/audio/kit1/low-tom1.wav', './assets/audio/kit1/low-tom1.mp3');
const lowTom2 = new Audio('./assets/audio/kit2/low-tom2.wav', './assets/audio/kit2/low-tom2.mp3');

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bass-drum');
const snareDrumTrigger = document.getElementById('snare-drum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('tom1');
const lowTomTrigger = document.getElementById('tom2');

// DOM Elements - Control Buttons
let kitSelector = document.getElementById('kit-selector');
let kitSelectorLabel = document.getElementById('kit-label');
let playBtn = document.getElementById('play-btn');

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
	} else {
		kitSelectorLabel.innerText = "Kit 1";
	}
});


// Trigger Functions
/** Play the bass drum samples */

function playBassDrum() {
	if (kitSelector.checked === false) {
		bassDrum1.play();
	} else {
		bassDrum2.play();
	}
}

/** Play the snare drum sample */
function playSnareDrum() {
	if (kitSelector.checked === false) {
		snareDrum1.play();
	} else {
		snareDrum2.play();
	}
}

/** Play the hats sample */
function playHats() {
	if (kitSelector.checked === false) {
		hats1.play();
	} else {
		hats2.play();
	}
}

/** Play the crash sample */
function playCrash() {
	if (kitSelector.checked === false) {
		crash1.play();
	} else {
		crash2.play();
	}
}

/** Play the high tom sample */
function playHighTom() {
	if (kitSelector.checked === false) {
		highTom1.play();
	} else {
		highTom2.play();
	}
}

/** Play the low tom drum sample */
function playLowTom() {
	if (kitSelector.checked === false) {
		lowTom1.play();
	} else {
		lowTom2.play();
	}
}


// User Choice Array

let layer1 = [];
let layer2 = [];


const buttons = document.querySelectorAll('.trigger');


buttons.forEach(button => button.addEventListener('click', event => {
	layer1.push(event.currentTarget.id);
	console.log(layer1);
}))




