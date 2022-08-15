// DOM Elements
const bassDrum = document.getElementById('bass-drum');
const snareDrum = document.getElementById('snare-drum');
const hats = document.getElementById('hats');
const crash = document.getElementById('crash');
const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');


// Sounds
const bassDrumAudio = './assets/audio/bass-drum.wav';
const snareDrumAudio = './assets/audio/snare-drum.wav';
const hatsAudio = './assets/audio/hats.wav';
const crashAudio = './assets/audio/crash.wav';
const tom1Audio = './assets/audio/high-tom.wav';
const tom2Audio = './assets/audio/low-tom.wav';
const drumKit = {
	'bassDrum': bassDrumAudio,
	'snareDrum': snareDrumAudio,
	'hats': hatsAudio,
	'crash': crashAudio,
	'high-tom': tom1Audio,
	'low-tom': tom2Audio,
};

// Event Listeners
const eventListenerInit = () => {
  bassDrum.addEventListener('click', logsound);

}







// Create Audio Library
// var drumKit = {
//     bassDrumAudio: new Howl({
//         src: ['/assets/audio/bass-drum.wav']
//     }),

//     snareDrumAudio: new Howl({
//         src: ['/assets/audio/snare-drum.wav']
//     }),

//     hatsAudio: new Howl({
//         src: ['/assets/audio/hats.wav']
//     }),

//     crashAudio: new Howl({
//         src: ['/assets/audio/crash.wav']
//     }),

//     tom1Audio: new Howl({
//         src: ['/assets/audio/high-tom.wav']
//     }),

//     tom2Audio: new Howl({
//         src: ['/assets/audio/low-tom.wav']
//     }),
// };


// bassDrum.addEventListener('click', function(){
//     bassDrumAudio.play();
// } );
    





