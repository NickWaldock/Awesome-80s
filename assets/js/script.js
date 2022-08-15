const bassDrum = document.getElementById('bass-drum');
const snareDrum = document.getElementById('snare-drum');
const hats = document.getElementById('hats');
const crash = document.getElementById('crash');
const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');


// Create Audio Library
var drumKit = {
    bassDrumAudio: new Howl({
        src: ['/assets/audio/bass-drum.wav']
    }),

    snareDrumAudio: new Howl({
        src: ['/assets/audio/snare-drum.wav']
    }),

    hatsAudio: new Howl({
        src: ['/assets/audio/hats.wav']
    }),

    crashAudio: new Howl({
        src: ['/assets/audio/crash.wav']
    }),

    tom1Audio: new Howl({
        src: ['/assets/audio/high-tom.wav']
    }),

    tom2Audio: new Howl({
        src: ['/assets/audio/low-tom.wav']
    }),
};


bassDrum.addEventListener('click', function(){
    bassDrumAudio.play();
} );
    