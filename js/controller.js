import SquareField from './square-field.js';

export default class Controller {

	constructor() {
		this.squareField = new SquareField();
	}

	update() {
		this.squareField.rotate(1);
	}

	render(context, width, height) {
		this.squareField.render(context, width, height);
	}

}
