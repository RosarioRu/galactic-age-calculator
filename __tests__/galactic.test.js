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

  test('method should add three other properties to the object, the age of the user in Venus, Mars and Jupiter', () => {
    const lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInVenus).toEqual(56);
    expect(lunaFromTheMilkyWay.ageInMars).toEqual(18);
    expect(lunaFromTheMilkyWay.ageInJupiter).toEqual(2);
    
  });
  

  


});