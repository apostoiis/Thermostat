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




});

 
