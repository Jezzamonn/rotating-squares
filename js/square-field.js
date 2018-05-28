const size = 100;

export default class SquareField {

	constructor() {
		this.rotation = 0;
	}

	rotate(amt) {
		this.rotation += amt;
	}

	render(context, width, height) {
		let startX = width / 2;
		while (startX > 0) {
			startX -= size;
		}
		let startY = height / 2;
		while (startY > 0) {
			startY -= size;
		}

		context.beginPath();
		for (let x = startX; x < width; x += size) {
			for (let y = startY; y < height; y += size) {
				this.drawSquare(context, x, y, size, Math.sin(this.rotation));
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
