import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {

  let lunaFromTheMilkyWay;
  beforeEach(() => {
    lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
  });

  test('should create an object with two properties - userName and userEarthAge', () => {
    expect(lunaFromTheMilkyWay.userName).toEqual("Luna");
    expect(lunaFromTheMilkyWay.userEarthAge).toEqual([35]);
  });

  test('method should add another property to the object for the age of the user in Mercury inside an array', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInMercury).toEqual([145.83]);
  });

  test('method should add three other properties to the object, the age of the user in Venus, Mars and Jupiter inside arrays', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInVenus).toEqual([56.45]);
    expect(lunaFromTheMilkyWay.ageInMars).toEqual([18.62]);
    expect(lunaFromTheMilkyWay.ageInJupiter).toEqual([2.95]);
  });

  test('method should assign another property to the object called healthStatus and in this case return "healthy." It should also calculate years left on each planet based on "healthy" healthStatus and set these as second elements in array for each planet age', () => {
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("healthy");
    expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(47);
    expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(196);
    expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(76);
    expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(25);
    expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(4);
  });

  test('method should assign another property to the object called healthStatus and in this case return "unhealthy." It should also calculate years left on each planet based on "unhealthy" healthStatus and set these as second elements in array for each planet age', () => {
    const nonSmoker = false;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("unhealthy");
    expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(41);
    expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(171);
    expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(66);
    expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(22);
    expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(3);
  });

  test('method should assign another property to the object called healthStatus and in this case return "standard"', () => {
    const nonSmoker = true;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("standard");
    expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(44);
    expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(183);
    expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(71);
    expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(23);
    expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(4);
  });  

  test('it should return a negative number when user has surpassed life-expectancy', () => {
    let oldLuna = new GalacticAges("Luna", "100");
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    oldLuna.calculateAges();
    oldLuna.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(oldLuna.healthStatus).toEqual("healthy");
    expect(oldLuna.userEarthAge[1]).toEqual(-18);
    expect(oldLuna.ageInMercury[1]).toEqual(-75);
    expect(oldLuna.ageInVenus[1]).toEqual(-29);
    expect(oldLuna.ageInMars[1]).toEqual(-10);
    expect(oldLuna.ageInJupiter[1]).toEqual(-2);
  });

})