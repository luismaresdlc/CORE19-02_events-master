const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {

	constructor(control) {
		super();
		later.date.localTime();
		control.forEach(({hora, temperatura}) => {
			const sched = later.parse.text(`at ${hora}`);
			later.setInterval(() => {this.emit('ideal', temperatura)}, sched); 
		})
	}
}

exports = module.exports = Programador;
