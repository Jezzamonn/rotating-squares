import SquareField from './square-field.js';
import {slurp} from './easing.js';


export default class Controller {

	constructor() {
		this.squareField = new SquareField();

		this.animAmt = 0;
		this.rotation = 0;
		this.scale = 1;
	}

	update(tAmt) {
		this.animAmt += 0.005 * tAmt;
		while (this.animAmt > 1) {
			this.animAmt --;
		}

		this.squareField.rotation = this.animAmt;
		this.rotation = -this.animAmt * Math.PI / 4;
		this.scale = slurp(1, Math.sqrt(2), this.animAmt);
	}

	render(context, width, height) {
		context.rotate(this.rotation);
		context.scale(this.scale, this.scale);
		this.squareField.render(context, width, height);
	}

}
