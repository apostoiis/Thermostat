describe("Thermostat", function() {

  var thermostat = new Thermostat();

  it('has a default temperature of 18 degrees', function() {
    expect(thermostat.temperature).toEqual(18);

  })

  it('has power save mode setting switched on as a default', function() {
    expect(thermostat.powerSaveMode).toEqual(true);

  })


});

 
