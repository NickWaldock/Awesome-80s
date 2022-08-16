// Sounds 
bassDrum = new Audio('./assets/audio/bass-drum.wav');
snareDrum = new Audio('./assets/audio/snare-drum.wav');
hats = new Audio('./assets/audio/hats.wav');
crash = new Audio('./assets/audio/crash.wav');
highTom = new Audio('./assets/audio/high-tom.wav');
lowTom = new Audio('./assets/audio/low-tom.wav');

// DOM Elements - Icon Triggers
const bassDrumTrigger = document.getElementById('bass-drum');
const snareDrumTrigger = document.getElementById('snare-drum');
const hatsTrigger = document.getElementById('hats');
const crashTrigger = document.getElementById('crash');
const highTomTrigger = document.getElementById('tom1');
const lowTomTrigger = document.getElementById('tom2');

// Event Listeners
bassDrumTrigger.addEventListener('click', playBassDrum);
snareDrumTrigger.addEventListener('click', playSnareDrum); 
hatsTrigger.addEventListener('click', playHats);
crashTrigger.addEventListener('click', playCrash); 
highTomTrigger.addEventListener('click', playHighTom);
lowTomTrigger.addEventListener('click', playLowTom);

// Trigger Functions
/** Play the bass drum sample */
function playBassDrum(){	
	bassDrum.play();
}

/** Play the snare drum sample */
function playSnareDrum(){	
	snareDrum.play();
}

/** Play the hats sample */
function playHats(){	
	hats.play();
}

/** Play the crash sample */
function playCrash(){	
	crash.play();
}

/** Play the high tom sample */
function playHighTom(){	
	highTom.play();
}

/** Play the low drum sample */
function playLowTom(){	
	lowTom.play();
}