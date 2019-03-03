class EventEmitter {
	
	constructor() {
		this.listeners = {};
	}

	//equivale al método subscribe
	on(nombreEvento, callback) {
		this.listeners[nombreEvento] = this.listeners[nombreEvento] || [];
		this.listeners[nombreEvento].push(callback);
	}

	emit(nombreEvento, datos) {
		if (this.listeners[nombreEvento]) {
			this.listeners[nombreEvento].forEach(callback => callback(datos));
		}
	}

}

exports = module.exports = EventEmitter;
