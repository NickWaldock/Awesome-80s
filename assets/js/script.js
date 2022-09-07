// Initial DOM Elements
const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');
const layerArea = document.getElementById('layer-area');
const controlsArea = document.getElementById('controls');
const instructionsBtn = document.getElementById('instructions-rtn');
const startBackground = document.getElementById('landing-background');
startBtn.addEventListener('click', letsGo);

/** 'Lets Go!' Button */
function letsGo() {
		startBackground.classList.add('hidden');
		gameArea.classList.remove('hidden');
		layerArea.classList.remove('hidden');
		controlsArea.classList.remove('hidden');
		instructionsBtn.classList.remove('hidden');
	}

// Sounds - (https://github.com/goldfire/howler.js#documentation)
const bassDrum1 = new Howl({src:['assets/audio/kit1/bass-drum1.wav', 'assets/audio/kit1/bass-drum1.mp3']});
const bassDrum2 = new Howl({src:['assets/audio/kit2/bass-drum2.wav', 'assets/audio/kit2/bass-drum2.mp3']});
const snareDrum1 = new Howl({src:['assets/audio/kit1/snare-drum1.wav', 'assets/audio/kit1/snare-drum1.mp3']});
const snareDrum2 = new Howl({src:['assets/audio/kit2/snare-drum2.wav', 'assets/audio/kit2/snare-drum2.mp3']});
const hats1 = new Howl({src:['assets/audio/kit1/hats1.wav', 'assets/audio/kit1/hats1.mp3']});
const hats2 = new Howl({src:['assets/audio/kit2/hats2.wav', 'assets/audio/kit2/hats2.mp3']});
const crash1 = new Howl({src:['assets/audio/kit1/crash1.wav', 'assets/audio/kit1/crash1.mp3']});
const crash2 = new Howl({src:['assets/audio/kit2/crash2.wav', 'assets/audio/kit2/crash2.mp3']});
const highTom1 = new Howl({src:['assets/audio/kit1/high-tom1.wav', 'assets/audio/kit1/high-tom1.mp3']});
const highTom2 = new Howl({src:['assets/audio/kit2/high-tom2.wav', 'assets/audio/kit2/high-tom2.mp3']});
const lowTom1 = new Howl({src:['assets/audio/kit1/low-tom1.wav', 'assets/audio/kit1/low-tom1.mp3']});
const lowTom2 = new Howl({src:['assets/audio/kit2/low-tom2.wav', 'assets/audio/kit2/low-tom2.mp3']});
const rest1 = new Howl({src:['assets/audio/kit1/rest.wav', 'assets/audio/kit1/rest.mp3']});
const rest2 = new Howl({src:['assets/audio/kit2/rest.wav', 'assets/audio/kit2/rest.mp3']});

const sounds = {
	bassDrum1,
	bassDrum2,
	snareDrum1,
	snareDrum2,
	hats1,
	hats2,
	crash1,
	crash2,
	highTom1,
	highTom2,
	lowTom1,
	lowTom2,
	rest1,
	rest2
};

// Sound Trigger Functions
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
		sounds.rest1.currentTime = 0;
		sounds.rest1.play();
	} else {
		sounds.rest2.currentTime = 0;
		sounds.rest2.play();
	}
}

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bassDrum');
const snareDrumTrigger = document.getElementById('snareDrum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('highTom');
const lowTomTrigger = document.getElementById('lowTom');
const restTrigger = document.getElementById('rest');
const buttons = document.querySelectorAll('.trigger');

// Event Listeners - Triggers & Sounds
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum);
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash);
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);
restTrigger.addEventListener('click', playRest);

// User Selection Array (Layers)
let layer1PlayIndex = 0;
let layer2PlayIndex = 0;
let layer1 = [];
let layer2 = [];

/** Add sounds to layers */
function addSound(event){
	if (layer1.length < 8) {
		layer1.push(event.currentTarget.id + kitSelected);
		lightUpLayer1(); // Add user choices to layer 1, change color of indicator boxes
	} else if (layer1.length === 8) {
		layer2.push(event.currentTarget.id + kitSelected);
		lightUpLayer2(); // Add user choices to layer 2, change color of indicator boxes
	} else if (layer2.length === 8) { 
		event.stopPropagation(event);// Stop adding sounds to layer 2
	}}
// Event listener for each sound trigger icon
buttons.forEach(button => button.addEventListener('click', addSound));

// Layer Indicator Squares
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

/** 'Light Up' layer 1 squares in-line with layer 1 array aength */
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
}

/** 'Light Up' layer 2 squares in-line with layer 2 array length */
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
}

/** Playback layers */
function playLayers() {
	layer1PlayIndex = 0;
	layer2PlayIndex = 0;
	if (layer1.length && layer2.length < 8){ // Playback only to initiate when both layers are full
		alert('Choose more groovy sounds!'); // Alert if layers are not full
	} else {
		if (bpmInput.value.length == 0){
			alert('Please input a speed to play groovy sounds!'); // Alert bpm input required
		} else {
			playLayer1(); // Playback layer 1
			playLayer2(); // Playback layer 2
		}
	}}

/** Play layer 1 and set timeout */
function playLayer1() {
	if (layer1PlayIndex >= layer1.length) {
		return; // Exit the layer
	}
	setTimeout(function () { // Include timeout interval in function
		let sound = layer1[layer1PlayIndex];
		sounds[sound].play();
		layer1PlayIndex++;
		playLayer1();
	}, selectTimeout);
}

/** Play layer 2 and set timeout */
function playLayer2() {
	if (layer2PlayIndex >= layer2.length) {
		return; // Exit the layer
	}
	setTimeout(function () { // Include timeout interval in function
		let sound = layer2[layer2PlayIndex];
		sounds[sound].play();
		layer2PlayIndex++;
		playLayer2();
	}, selectTimeout);
}

// BPM (Timeout Interval)
const bpmInput = document.getElementById('timeoutSelector');
bpmInput.addEventListener('input', setBpm);
var selectTimeout = 0;

/** Set selectTimeout variable speed and convert Beats Per Minute (BPM) to Milliseconds */
function setBpm(){
	var bpm = bpmInput.value;
	selectTimeout = 60000 / bpm; 
}

// DOM Elements & Event Listeners - Play and Reset Buttons
const resetBtn = document.getElementById('reset-btn');
const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', playLayers);
resetBtn.addEventListener('click', resetLayers);

// Kit (Sounds) Selector Button
let kitSelector = document.getElementById('kit-selector');
let kitSelectorLabel = document.getElementById('kit-label');
let kitSelected = '1';

// Code to change HTML text in the "Kit" button when clicked
kitSelector.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		kitSelectorLabel.innerText = "Kit 2";
		kitSelected = '2';
	} else {
		kitSelectorLabel.innerText = "Kit 1";
		kitSelected = '1';
	}
});

/** Reset the layers (clear arrays), play index, and indicator squares */
function resetLayers() {
	layer1 = [];
	layer2 = [];
	layer1PlayIndex = 0;
	layer2PlayIndex = 0;
	resetColors();
}

/** Reset layer squares */
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

// View Instructions and hide game areas 
instructionsBtn.addEventListener('click', showInstructions);

function showInstructions(){
	gameArea.classList.add('hidden');
	layerArea.classList.add('hidden');
	controlsArea.classList.add('hidden');
	instructionsBtn.classList.add('hidden');
	startBackground.classList.remove('hidden');
}
