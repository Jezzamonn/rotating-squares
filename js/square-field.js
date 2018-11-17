import {easeInOut} from './easing.js';

const size = 90;

export default class SquareField {

	constructor() {
		this.rotation = 0;
	}

	rotate(amt) {
		this.rotation += amt;
	}

	reset() {
		this.rotation = 0;
	}

	render(context, width, height) {
		// relates to how many circles to draw
		let drawRadius = Math.sqrt(width * width + height * height) / 2;

		let startX = size / 2;
		while (startX > -drawRadius) {
			startX -= size;
		}
		let startY = size / 2;
		while (startY > -drawRadius) {
			startY -= size;
		}

		context.beginPath();
		for (let x = startX, ix = 0; x < drawRadius; x += size, ix ++) {
			for (let y = startY, iy = 0; y < drawRadius; y += size, iy ++) {
				let rotationAmt = 0.5 * this.rotation;//easeInOut(this.rotation, 2);
				if ((ix + iy) % 2 == 1) {
					rotationAmt = 1 - rotationAmt;
				}
				this.drawSquare(context, x, y, size, rotationAmt);
			}
		}
		context.stroke();
	}

	drawSquare(context, left, top, size, rotationAmt = 0) {
		context.moveTo(
			left + rotationAmt * size,
			top);
		context.lineTo(
			left + size,
			top + rotationAmt * size);
		context.lineTo(
			left + (1 - rotationAmt) * size,
			top + size);
		context.lineTo(
			left,
			top + (1 - rotationAmt) * size);
		context.closePath();
	}

}
