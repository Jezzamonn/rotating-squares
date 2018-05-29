import Controller from './controller.js';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

// Currently assuming square proportions.
const SIZE = 500;

// Variables relating to resizing.
let scale = 1;
let centerX = SIZE / 2;
let centerY = SIZE / 2;

let controller;

function init() {
	controller = new Controller();

	handleResize();
	// Set up event listeners.
	window.addEventListener('resize', handleResize);
	// Kick off the update loop
	window.requestAnimationFrame(everyFrame);
}

// TODO: Make tweak this to allow frame skipping for slow computers. Maybe.
function everyFrame() {
	clearFrame();
	for (let i = 0; i < 1; i ++) {
		update(1);
		render();
	}
	requestAnimationFrame(everyFrame);
}

function update(tAmt) {
	controller.update(tAmt);
}

function clearFrame() {
	context.resetTransform();

	// context.globalAlpha = 0.2;
	// context.fillStyle = 'white';
	context.clearRect(0, 0, canvas.width, canvas.height);
	// context.globalAlpha = 1;
}

function render() {
	context.resetTransform();

	context.translate(canvas.width / 2, canvas.height / 2);
	context.scale(scale, scale);

	// You can also pass in other stuff here depend on how you want to resize
	controller.render(context, canvas.width, canvas.height);
}

function handleResize(evt) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// Math.max -> no borders (will cut off edges of the thing)
	// Math.min -> show all (with borders)
	// There are other options too :)
	scale = Math.min(canvas.width, canvas.height) / SIZE;

	render();
}

init();