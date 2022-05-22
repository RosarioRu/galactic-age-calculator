import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {

  let lunaFromTheMilkyWay;
  beforeEach(() => {
    lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
  });

  test('should create an object with two properties - userName and age(inside earthInfo)', () => {
    expect(lunaFromTheMilkyWay.userName).toEqual("Luna");
    expect(lunaFromTheMilkyWay.earthInfo.age).toEqual(35);
  });

  test('method should add another property to the object for the age of the user in Mercury inside an object', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.mercuryInfo.age).toEqual(145.83);
  });

  test('method should add three other properties to the object, the age of the user in Venus, Mars and Jupiter inside planetInfo objects', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.venusInfo.age).toEqual(56.45);
    expect(lunaFromTheMilkyWay.marsInfo.age).toEqual(18.62);
    expect(lunaFromTheMilkyWay.jupiterInfo.age).toEqual(2.95);
  });

  // test('method should assign another property to the object called healthStatus and in this case return "healthy." It should also calculate years left on each planet based on "healthy" healthStatus and set these as second elements in array for each planet age', () => {
  //   const nonSmoker = true;
  //   const exercise = true;
  //   const healthyDiet = true;
  //   lunaFromTheMilkyWay.calculateAges();
  //   lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
  //   expect(lunaFromTheMilkyWay.healthStatus).toEqual("healthy");
  //   expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(47);
  //   expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(196);
  //   expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(76);
  //   expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(25);
  //   expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(4);
  // });

  // test('method should assign another property to the object called healthStatus and in this case return "unhealthy." It should also calculate years left on each planet based on "unhealthy" healthStatus and set these as second elements in array for each planet age', () => {
  //   const nonSmoker = false;
  //   const exercise = false;
  //   const healthyDiet = false;
  //   lunaFromTheMilkyWay.calculateAges();
  //   lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
  //   expect(lunaFromTheMilkyWay.healthStatus).toEqual("unhealthy");
  //   expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(41);
  //   expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(171);
  //   expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(66);
  //   expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(22);
  //   expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(3);
  // });

  // test('method should assign another property to the object called healthStatus and in this case return "standard"', () => {
  //   const nonSmoker = true;
  //   const exercise = false;
  //   const healthyDiet = false;
  //   lunaFromTheMilkyWay.calculateAges();
  //   lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
  //   expect(lunaFromTheMilkyWay.healthStatus).toEqual("standard");
  //   expect(lunaFromTheMilkyWay.userEarthAge[1]).toEqual(44);
  //   expect(lunaFromTheMilkyWay.ageInMercury[1]).toEqual(183);
  //   expect(lunaFromTheMilkyWay.ageInVenus[1]).toEqual(71);
  //   expect(lunaFromTheMilkyWay.ageInMars[1]).toEqual(23);
  //   expect(lunaFromTheMilkyWay.ageInJupiter[1]).toEqual(4);
  // });  

  // test('it should return a string that contains years above life-expectancy when users age surpasses it: "Over estimated life-expectancy by x years" and set this as the second element in the array containing users age in each planet', () => {
  //   let oldLuna = new GalacticAges("Luna", "100");
  //   const nonSmoker = true;
  //   const exercise = true;
  //   const healthyDiet = true;
  //   oldLuna.calculateAges();
  //   oldLuna.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
  //   expect(oldLuna.healthStatus).toEqual("healthy");
  //   expect(oldLuna.earthInfo[1]).toEqual("Over estimated life-expectancy by " + 18 + " years");
  //   expect(oldLuna.ageInMercury[1]).toEqual("Over estimated life-expectancy by " + 75 + " years");
  //   expect(oldLuna.ageInVenus[1]).toEqual("Over estimated life-expectancy by " + 29 + " years");
  //   expect(oldLuna.ageInMars[1]).toEqual("Over estimated life-expectancy by " + 10 + " years");
  //   expect(oldLuna.ageInJupiter[1]).toEqual("Over estimated life-expectancy by " + 2 + " years");
  // });

})