// Initial & Core DOM Elements
const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');
const layerArea = document.getElementById('layer-area');
const controlsArea = document.getElementById('controls');
startBtn.addEventListener('click', letsGo);

/** Function for the 'Lets Go!' Button */
function letsGo() {
	const startBackground = document.getElementById('landing-background');
	if (!startBackground.classList.contains('display')) {
		startBackground.classList.add('hidden');
		gameArea.classList.remove('hidden');
		layerArea.classList.remove('hidden');
		controlsArea.classList.remove('hidden');
	}
};

// Sounds 
const sounds = {
	bassDrum1: new Audio('assets/audio/kit1/bass-drum1.wav', 'assets/audio/kit1/bass-drum1.mp3'),
	bassDrum2: new Audio('assets/audio/kit2/bass-drum2.wav', 'assets/audio/kit2/bass-drum2.mp3'),
	snareDrum1: new Audio('assets/audio/kit1/snare-drum1.wav', 'assets/audio/kit1/snare-drum1.mp3'),
	snareDrum2: new Audio('assets/audio/kit2/snare-drum2.wav', 'assets/audio/kit2/snare-drum2.mp3'),
	hats1: new Audio('assets/audio/kit1/hats1.wav', 'assets/audio/kit1/hats1.mp3'),
	hats2: new Audio('assets/audio/kit2/hats2.wav', 'assets/audio/kit2/hats2.mp3'),
	crash1: new Audio('assets/audio/kit1/crash1.wav', 'assets/audio/kit1/crash1.mp3'),
	crash2: new Audio('assets/audio/kit2/crash2.wav', 'assets/audio/kit2/crash2.mp3'),
	highTom1: new Audio('assets/audio/kit1/high-tom1.wav', 'assets/audio/kit1/high-tom1.mp3'),
	highTom2: new Audio('assets/audio/kit2/high-tom2.wav', 'assets/audio/kit2/high-tom2.mp3'),
	lowTom1: new Audio('assets/audio/kit1/low-tom1.wav', 'assets/audio/kit1/low-tom1.mp3'),
	lowTom2: new Audio('assets/audio/kit2/low-tom2.wav', 'assets/audio/kit2/low-tom2.mp3'),
	rest: new Audio('assets/audio/kit1/rest.wav', 'assets/audio/kit1/rest.mp3'),
	rest2: new Audio('assets/audio/kit2/rest.wav', 'assets/audio/kit2/rest.mp3'),
};

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bassDrum');
const snareDrumTrigger = document.getElementById('snareDrum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('highTom');
const lowTomTrigger = document.getElementById('lowTom');
const restTrigger = document.getElementById('rest');
const buttons = document.querySelectorAll('.trigger');

// Event Listeners - for sounds
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum);
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash);
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);
restTrigger.addEventListener('click', playRest);

// User Choice Array
let layer1PlayIndex = 0;
let layer2PlayIndex = 0;
let layer1PlayTimeout = 300;
let layer2PlayTimeout = 300;
let layer1 = [];
let layer2 = [];

// Layer Indicator Squares
const soundSquares = document.getElementsByClassName('sound-squares');
const layer1Square1 = document.getElementById('1square1');
const layer1Square2 = document.getElementById('1square2');
const layer1Square3 = document.getElementById('1square3');
const layer1Square4 = document.getElementById('1square4');
const layer1Square5 = document.getElementById('1square5');
const layer1Square6 = document.getElementById('1square6');
const layer1Square7 = document.getElementById('1square7');
const layer1Square8 = document.getElementById('1square8');
const layer2Square1 = document.getElementById('2square1');
const layer2Square2 = document.getElementById('2square2');
const layer2Square3 = document.getElementById('2square3');
const layer2Square4 = document.getElementById('2square4');
const layer2Square5 = document.getElementById('2square5');
const layer2Square6 = document.getElementById('2square6');
const layer2Square7 = document.getElementById('2square7');
const layer2Square8 = document.getElementById('2square8');

/** Function to 'Light Up' Layer 1 Squares In-Line With Layer 1 Array Length */
function lightUpLayer1() {
	if (layer1.length === 0) { // Do nothing 
	} else if (layer1.length === 1) {
		layer1Square1.classList.add('orange');
	} else if (layer1.length === 2) {
		layer1Square2.classList.add('orange');
	} else if (layer1.length === 3) {
		layer1Square3.classList.add('orange');
	} else if (layer1.length === 4) {
		layer1Square4.classList.add('orange');
	} else if (layer1.length === 5) {
		layer1Square5.classList.add('orange');
	} else if (layer1.length === 6) {
		layer1Square6.classList.add('orange');
	} else if (layer1.length === 7) {
		layer1Square7.classList.add('orange');
	} else if (layer1.length === 8) {
		layer1Square8.classList.add('orange');
	}
};

/** Function to 'Light Up' Layer 2 Squares In-Line With Layer 2 Array Length */
function lightUpLayer2() {
	if (layer2.length === 0) { // Do nothing 
	} else if (layer2.length === 1) {
		layer2Square1.classList.add('orange');
	} else if (layer2.length === 2) {
		layer2Square2.classList.add('orange');
	} else if (layer2.length === 3) {
		layer2Square3.classList.add('orange');
	} else if (layer2.length === 4) {
		layer2Square4.classList.add('orange');
	} else if (layer2.length === 5) {
		layer2Square5.classList.add('orange');
	} else if (layer2.length === 6) {
		layer2Square6.classList.add('orange');
	} else if (layer2.length === 7) {
		layer2Square7.classList.add('orange');
	} else if (layer2.length === 8) {
		layer2Square8.classList.add('orange');
	}
};

/** Function to Reset Layer Squares */
function resetColors() {
	layer1Square1.classList.remove('orange');
	layer1Square2.classList.remove('orange');
	layer1Square3.classList.remove('orange');
	layer1Square4.classList.remove('orange');
	layer1Square5.classList.remove('orange');
	layer1Square6.classList.remove('orange');
	layer1Square7.classList.remove('orange');
	layer1Square8.classList.remove('orange');
	layer2Square1.classList.remove('orange');
	layer2Square2.classList.remove('orange');
	layer2Square3.classList.remove('orange');
	layer2Square4.classList.remove('orange');
	layer2Square5.classList.remove('orange');
	layer2Square6.classList.remove('orange');
	layer2Square7.classList.remove('orange');
	layer2Square8.classList.remove('orange');
}

// Instruction to Create Layer Array
buttons.forEach(button => button.addEventListener('click', event => {
	if (layer1.length < 8) {
		layer1.push(event.currentTarget.id + kitSelected);
		lightUpLayer1();
		console.log(layer1, 'Layer 1 Length:', layer1.length);
		if (layer1.length === 8){
			console.log('Layer 1 is Full!');
		}
		}
	}) 
);

buttons.forEach(button => button.addEventListener('click', event => {
	if (layer1.length > 8) {
		layer2.push(event.currentTarget.id + kitSelected);
		lightUpLayer2();
		console.log(layer2, 'Layer 2 Length:', layer2.length);
		}
	}) 
);



/** Function to Playback Layers */
function playLayers() {
	console.log(layer1);
	console.log(layer1PlayIndex);
	if (layer1PlayIndex >= layer1.length) {
		console.log('layer1 index', layer1PlayIndex, 'length', layer1);
		// Exit the layer
		return;
	}
	setTimeout(function () {
		let sound = layer1[layer1PlayIndex];
		sounds[sound].play();
		layer1PlayIndex++;
		playLayers();
	}, 400);
};
/** Function to Switch Layers When Layer 1 Array = 8 */
function switchLayer() {

}

// function stopAudio(){
// 	clearInterval(interval);
// 	console.log('Stopped!');
// }


// DOM Elements - Control Buttons
let kitSelector = document.getElementById('kit-selector');
let kitSelectorLabel = document.getElementById('kit-label');
let kitSelected = '1';
const resetBtn = document.getElementById('reset-btn');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');

// Event Listeners
playBtn.addEventListener('click', playLayers);
// stopBtn.addEventListener('click', stopAudio);
resetBtn.addEventListener('click', resetLayers);

// Control Functions
// Kit (sounds) selector
kitSelector.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		kitSelectorLabel.innerText = "Kit 2";
		kitSelected = '2';
	} else {
		kitSelectorLabel.innerText = "Kit 1";
		kitSelected = '1';
	}
});

/** Reset The Layers */
function resetLayers() {
	layer1 = [];
	layer2 = [];
	layer1PlayIndex = 0;
	layer2PlayIndex = 0;
	resetColors();
	console.log('Reset!');
}

// Trigger Functions
/** Play the bass drum samples */
function playBassDrum() {
	if (kitSelector.checked === false) {
		sounds.bassDrum1.currentTime = 0;
		sounds.bassDrum1.play();

	} else {
		sounds.bassDrum2.currentTime = 0;
		sounds.bassDrum2.play();
	}
}

/** Play the snare drum sample */
function playSnareDrum() {
	if (kitSelector.checked === false) {
		sounds.snareDrum1.currentTime = 0;
		sounds.snareDrum1.play();
	} else {
		sounds.snareDrum2.currentTime = 0;
		sounds.snareDrum2.play();
	}
}

/** Play the hats sample */
function playHats() {
	if (kitSelector.checked === false) {
		sounds.hats1.currentTime = 0;
		sounds.hats1.play();
	} else {
		sounds.hats2.currentTime = 0;
		sounds.hats2.play();
	}
}

/** Play the crash sample */
function playCrash() {
	if (kitSelector.checked === false) {
		sounds.crash1.currentTime = 0;
		sounds.crash1.play();
	} else {
		sounds.crash2.currentTime = 0;
		sounds.crash2.play();
	}
}

/** Play the high tom sample */
function playHighTom() {
	if (kitSelector.checked === false) {
		sounds.highTom1.currentTime = 0;
		sounds.highTom1.play();
	} else {
		sounds.highTom2.currentTime = 0;
		sounds.highTom2.play();
	}
}

/** Play the low tom drum sample */
function playLowTom() {
	if (kitSelector.checked === false) {
		sounds.lowTom1.currentTime = 0;
		sounds.lowTom1.play();
	} else {
		sounds.lowTom2.currentTime = 0;
		sounds.lowTom2.play();
	}
}

/** Play the rest sample */
function playRest() {
	if (kitSelector.checked === false) {
		sounds.rest.currentTime = 0;
		sounds.rest.play();
	} else {
		sounds.rest2.currentTime = 0;
		sounds.rest2.play();
	}
}