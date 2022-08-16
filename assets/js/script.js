// Sounds 
bassDrum = new Audio('./assets/audio/no-fx/bass-drum.wav', './assets/audio/no-fx/bass-drum.mp3');
bassDrumFx = new Audio('./assets/audio/fx/bass-drum-fx.wav', './assets/audio/fx/bass-drum-fx.mp3');
snareDrum = new Audio('./assets/audio/no-fx/snare-drum.wav', './assets/audio/no-fx/snare-drum.mp3');
snareDrumFx = new Audio('./assets/audio/fx/snare-drum-fx.wav', './assets/audio/fx/snare-drum-fx.mp3');
hats = new Audio('./assets/audio/no-fx/hats.wav', './assets/audio/no-fx/hats.mp3');
hatsFx = new Audio('./assets/audio/fx/hats-fx.wav', './assets/audio/fx/hats-fx.mp3');
crash = new Audio('./assets/audio/no-fx/crash.wav', './assets/audio/no-fx/crash.mp3');
crashFx = new Audio('./assets/audio/fx/crash-fx.wav', './assets/audio/fx/crash-fx.mp3');
highTom = new Audio('./assets/audio/no-fx/high-tom.wav', './assets/audio/no-fx/high-tom.mp3');
highTomFx = new Audio('./assets/audio/fx/high-tom-fx.wav', './assets/audio/fx/high-tom-fx.mp3');
lowTom = new Audio('./assets/audio/no-fx/low-tom.wav', './assets/audio/no-fx/low-tom.mp3');
lowTomFx = new Audio('./assets/audio/fx/low-tom-fx.wav', './assets/audio/fx/low-tom-fx.mp3');

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