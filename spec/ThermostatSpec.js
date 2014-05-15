describe("Thermostat", function() {

  var thermostat = new Thermostat();

  it('has a default temperature of 18 degrees', function() {
    expect(thermostat.temperature).toEqual(18);
  })

  it('has power save mode setting switched on as a default', function() {
    expect(thermostat.powerSaveMode).toEqual(true);
  })

  describe('If power save mode is on', function(){

    it('has a maximum temperature of 25', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('has a minimum temperature of 12', function() {
      expect(thermostat.minimumTemperature()).toEqual(12);
    })

  })

  describe('If power save mode is off', function() {

    it('has a maximum temperature of 35', function() {
      thermostat.powerSaveMode = false;
      expect(thermostat.maximumTemperature()).toEqual(35);
    })

    it('has a minimum temperature of 10', function() {
      thermostat.powerSaveMode = false;
      expect(thermostat.minimumTemperature()).toEqual(10);
    })
 
  })

  describe('The temperature', function() {

    it('can increase by 1 degree', function() {
      var thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(18);
      thermostat.warmer();
      expect(thermostat.temperature).toEqual(19);
    })

    it('can decrease by 1 degree', function() {
      var thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(18);
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(17);
    })

    it('can not decrease if temperature is less than or equal to the minimum', function () {
      var thermostat = new Thermostat();
      thermostat.powerSaveMode = false;
      thermostat.minimumTemperature();
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(10);
    })

  })




});

 
