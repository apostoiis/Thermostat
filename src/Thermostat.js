function Thermostat() {
	this.temperature = 18;
	this.powerSaveMode = true;
};

Thermostat.prototype.maximumTemperature = function() {
	return this.temperature = 25;
}

Thermostat.prototype.minimumTemperature = function() {
	return this.temperature = 12;
}

