// Sounds 
bassDrum = new Audio('./assets/audio/no-fx/bass-drum.wav', './assets/audio/no-fx/bass-drum.mp3');

snareDrum = new Audio('./assets/audio/no-fx/snare-drum.wav', './assets/audio/no-fx/snare-drum.mp3');

hats = new Audio('./assets/audio/no-fx/hats.wav', './assets/audio/no-fx/hats.mp3');

crash = new Audio('./assets/audio/no-fx/crash.wav', './assets/audio/no-fx/crash.mp3');

highTom = new Audio('./assets/audio/no-fx/high-tom.wav', './assets/audio/no-fx/high-tom.mp3');

lowTom = new Audio('./assets/audio/no-fx/low-tom.wav', './assets/audio/no-fx/low-tom.mp3');


// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bass-drum');
const snareDrumTrigger = document.getElementById('snare-drum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('tom1');
const lowTomTrigger = document.getElementById('tom2');

// DOM Elements - Control Buttons
var fxBtn = document.getElementById('fx-btn');
var changeSoundBtn = document.getElementById('change-sound-btn');


// Event Listeners
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum); 
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash); 
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);

changeSoundBtn.addEventListener('click',  )

// Trigger Functions
/** Play the bass drum samples */

function playBassDrum(){	
	if (changeSoundBtn === false) {
		bassDrum.play();
	} else {
		bassDrum2.play();
	}
}

/** Play the snare drum sample */
function playSnareDrum(){	
	if (changeSoundBtn === false) {
	snareDrum.play();
} else {
	snareDrum2.play();
	}
}


/** Play the hats sample */
function playHats(){	
	if (changeSoundsBtn === false) {
		hats.play();
	} else {
		hats2.play();	
	}
}

/** Play the crash sample */
function playCrash(){	
	if (changeSoundsBtn === false) {
		crash.play();
	} else {
		crash2.play();
	}	
}

/** Play the high tom sample */
function playHighTom(){	
	if (changeSoundBtn === false) {
		highTom.play();
	} else {
		highTom2.play();
	}
}

/** Play the low drum sample */
function playLowTom(){	
	if (changeSoundBtn === false) {
		lowTom.play();
	} else {
		lowTom2.play();
	}
}