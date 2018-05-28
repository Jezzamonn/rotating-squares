import SquareField from './square-field.js';

export default class Controller {

	constructor() {
		this.squareField = new SquareField();
		this.rotateCount = 0;
	}

	update() {
		this.squareField.rotate(0.01);
		this.rotateCount -= 0.01;
	}

	render(context, width, height) {
		context.rotate(this.rotateCount);
		this.squareField.render(context, width, height);
	}

}
