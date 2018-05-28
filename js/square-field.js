const size = 100;

export default class SquareField {

	constructor() {
		this.rotation = 0;
	}

	rotate(amt) {
		this.rotation += amt;
	}

	render(context, width, height) {
		// relates to how many circles to draw
		let drawRadius = Math.sqrt(width * width + height * height) / 2;

		let startX = 0;
		while (startX > -drawRadius) {
			startX -= size;
		}
		let startY = 0;
		while (startY > -drawRadius) {
			startY -= size;
		}

		context.beginPath();
		for (let x = startX; x < drawRadius; x += size) {
			for (let y = startY; y < drawRadius; y += size) {
				this.drawSquare(context, x, y, size, 0.5 + 0.5 * Math.sin(this.rotation));
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
