function Thermostat() {
	this.temperature = 18;
	this.powerSaveMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
	if(this.powerSaveMode === true){
		return 25;
	}
	else if(this.powerSaveMode === false){
		return 35;
	}
}

Thermostat.prototype.minimumTemperature = function() {
	if(this.powerSaveMode === true){
		return 12;
	}
	else if(this.powerSaveMode === false){
		return 10;
	}
}

Thermostat.prototype.warmer = function() {
	if(this.temperature < this.maximumTemperature()) {
		return this.temperature += 1;
	}
}

Thermostat.prototype.cooler = function() {
	if(this.temperature > this.minimumTemperature()) {
		return this.temperature -= 1;
	}
}

Thermostat.prototype.reset = function() {
	this.temperature = 18;
}

Thermostat.prototype.status = function() {
	if(this.temperature <= 18) {
		return "blue";
	}
}