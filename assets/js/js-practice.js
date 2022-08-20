


let layer1 = ['playBassDrum', 'playSnareDrum', 'playHats', 'playCrash','','playHighTom', 'playLowTom'];

function playLayer(layer){
	for (let i = 0; i < layer.length -1; i++)
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



function createLayer(){
	document.querySelectorAll('.trigger').forEach(item => {
		item.addEventListener('click')
		console.log(createLayer)
	})
}



const layerBtn = document.getElementById('layer-btn');
// layerBtn.addEventListener('click', );

document.querySelectorAll('.trigger img').forEach(item => {
	layer1.push});

function addSound() {
	const sounds = 
}

addSound();
console.log(layer1);

