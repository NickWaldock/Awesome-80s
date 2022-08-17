// Sounds 
bassDrum1 = new Audio('./assets/audio/kit1/bass-drum1.wav', './assets/audio/kit1/bass-drum1.mp3');
bassDrum2 = new Audio('./assets/audio/kit2/bass-drum2.wav', './assets/audio/kit2/bass-drum2.mp3');
snareDrum1 = new Audio('./assets/audio/kit1/snare-drum1.wav', './assets/audio/kit1/snare-drum1.mp3');
snareDrum2 = new Audio('./assets/audio/kit2/snare-drum2.wav', './assets/audio/kit2/snare-drum2.mp3');
hats1 = new Audio('./assets/audio/kit1/hats1.wav', './assets/audio/kit1/hats1.mp3');
hats2 = new Audio('./assets/audio/kit2/hats2.wav', './assets/audio/kit2/hats2.mp3');
crash1 = new Audio('./assets/audio/kit1/crash1.wav', './assets/audio/kit1/crash1.mp3');
crash2 = new Audio('./assets/audio/kit2/crash2.wav', './assets/audio/kit2/crash2.mp3');
highTom1 = new Audio('./assets/audio/kit1/high-tom1.wav', './assets/audio/kit1/high-tom1.mp3');
highTom2 = new Audio('./assets/audio/kit2/high-tom2.wav', './assets/audio/kit2/high-tom2.mp3');
lowTom1 = new Audio('./assets/audio/kit1/low-tom1.wav', './assets/audio/kit1/low-tom1.mp3');
lowTom2 = new Audio('./assets/audio/kit2/low-tom2.wav', './assets/audio/kit2/low-tom2.mp3');

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bass-drum');
const snareDrumTrigger = document.getElementById('snare-drum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('tom1');
const lowTomTrigger = document.getElementById('tom2');

// DOM Elements - Control Buttons
let changeSoundsBtn = document.getElementById('change-sound-btn');
let kitTextChange = document.getElementById('label');

// Event Listeners
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum); 
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash); 
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);

if (changeSoundsBtn.checked = true) {
	kitTextChange.innerHTML = "Kit 2";
} else {
	kitTextChange.innerHTML = "Kit 1";
} // not working as intended


// Trigger Functions
/** Play the bass drum samples */

function playBassDrum(){	
	if (changeSoundsBtn.checked === false) {
		bassDrum1.play();
	} else {
		bassDrum2.play();
	}
}

/** Play the snare drum sample */
function playSnareDrum(){	
	if (changeSoundsBtn.checked === false) {
	snareDrum1.play();
} else {
	snareDrum2.play();
	}
}

/** Play the hats sample */
function playHats(){	
	if (changeSoundsBtn.checked === false) {
		hats1.play();
	} else {
		hats2.play();	
	}
}

/** Play the crash sample */
function playCrash(){	
	if (changeSoundsBtn.checked === false) {
		crash1.play();
	} else {
		crash2.play();
	}	
}

/** Play the high tom sample */
function playHighTom(){	
	if (changeSoundsBtn.checked === false) {
		highTom1.play();
	} else {
		highTom2.play();
	}
}

/** Play the low drum sample */
function playLowTom(){	
	if (changeSoundsBtn.checked === false) {
		lowTom1.play();
	} else {
		lowTom2.play();
	}
}