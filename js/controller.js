import SquareField from './square-field.js';
import {sinEaseInOut, slurp} from './easing.js';


export default class Controller {

	constructor() {
		this.squareField = new SquareField();

		this.animAmt = 0;
		this.period = 3;
		
		this.rotation = 0;
		this.scale = 1;
	}

	update(dt) {
		this.animAmt += dt / this.period;
		this.animAmt %= 1;

		var tweakAnimAmt = sinEaseInOut(this.animAmt, 2);
		this.squareField.rotation = tweakAnimAmt;
		this.rotation = tweakAnimAmt * Math.PI / 4;
		this.scale = slurp(1, Math.sqrt(2), tweakAnimAmt);
	}

	render(context, width, height) {
		context.rotate(this.rotation);
		context.scale(this.scale, this.scale);
		this.squareField.render(context, width, height);
	}

}
