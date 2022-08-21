function playLayer(layer) {
	for (let i = 0; i < layer.length - 1; i++)
		layer[i].play()
}

playLayer(layer1)



// userchoice > addEventListener for click > add selection to array > if array = 7length > alert

const playLayer = (layer) => {
	layer.forEach((el, index) => {
		promise = promise.then(function () {
			console.log(index);
			el.play()
			return new Promise(function (resolve) {
				setTimeout(resolve, interval);
			});
		});
	})
}

var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
var promise = Promise.resolve();

playBtn.addEventListener('click', () => {
	playLayer(layerX)
})



function createLayer() {
	document.querySelectorAll('.trigger').forEach(item => {
		item.addEventListener('click')
		console.log(createLayer)
	})
}



const layerBtn = document.getElementById('layer-btn');
// layerBtn.addEventListener('click', );

document.querySelectorAll('.trigger img').forEach(item => {
	layer1.push
});

function addSound() {
	const sounds =
}

addSound();
console.log(layer1);








/// from sean

const sounds = {
	bassDrum1: new Audio('./assets/audio/kit1/bass-drum1.mp3');
	snareDrum1: new Audio('./assets/audio/kit1/snare-drum1.mp3');
};


// array with ids
const layer1 = ['bassDrum1', 'snareDrum1'];

// for each item in array
for (let sound of layer1) {
	// go to the sounds object, 
	// and play the sound at the key 
	// named the same as the item in the array that we are iterating over
	sounds[sound].play()
};


// to play sound normally
sound.bassDrum1.play()







for (let i of layer1) {
	sounds[i].play()
}



for (let sound of layer1) {
	setTimeout(() => {
		sounds[sound].play();
	}, 1000);
}



// Function to play sound layer
function playLayer1() {
	for (let sound of layer1) {
		setTimeout(() => {
			sounds[sound].play();
		}, 1000);
	}
}