function Thermostat() {
	this.temperature = 18;
	this.powerSaveMode = true;
};

Thermostat.prototype.maximumTemperature = function() {
	if(this.powerSaveMode === true){
		return this.temperature = 25;
	}
	else if(this.powerSaveMode === false){
		return this.temperature = 35;
	}
	};


Thermostat.prototype.minimumTemperature = function() {
	if(this.powerSaveMode === true){
		return this.temperature = 12;
	}
	else if(this.powerSaveMode === false){
		return this.temperature = 10;
	}
}

Thermostat.prototype.warmer = function() {
	return this.temperature += 1;
}

Thermostat.prototype.cooler = function() {
	if(this.powerSaveMode === true && this.temperature > 12 ||
		this.powerSaveMode === false && this.temperature > 10) {
	return this.temperature -= 1;
	}
}
