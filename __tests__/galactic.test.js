import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {
  test('should create an object with two properties - userName and userAge', () => {
    const lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
    expect(lunaFromTheMilkyWay.userName).toEqual("Luna");
    expect(lunaFromTheMilkyWay.userAge).toEqual(35);
  });

  test('method should add another property to the object for the age of the user in Mercury', () => {
    const lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInMercury).toEqual(145);
  });

});