import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {

  let lunaFromTheMilkyWay;
  beforeEach(() => {
    lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
  });
  test('should create an object with two properties - userName and userAge', () => {
    expect(lunaFromTheMilkyWay.userName).toEqual("Luna");
    expect(lunaFromTheMilkyWay.userAge).toEqual(35);
  });

  test('method should add another property to the object for the age of the user in Mercury', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInMercury).toEqual(145);
  });

  test('method should add three other properties to the object, the age of the user in Venus, Mars and Jupiter', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInVenus).toEqual(56);
    expect(lunaFromTheMilkyWay.ageInMars).toEqual(18);
    expect(lunaFromTheMilkyWay.ageInJupiter).toEqual(2);
  });

  test('method should assign another property to the object called healthStatus and in this case return "healthy"', () => {
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("healthy");
    console.log("healthy: " + lunaFromTheMilkyWay.healthStatus);
  });

  test('method should assign another property to the object called healthStatus and in this case return "unhealthy"', () => {
    const nonSmoker = false;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("unhealthy");
    console.log("unhealthy: " + lunaFromTheMilkyWay.healthStatus);
  });

});