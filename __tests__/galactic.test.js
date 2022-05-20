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
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("standard");
  });

  // test('should calculate number of years left on earth and return this as second element in array for key called userEarthAge', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.calculateAges();
  //   lunaFromTheMilkyWay2.determineHealthStatus(true, true, true);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual(47);
  //   //The plan: assume 78.79-us average life expectancy. Add 3yrs for "healthy, reduce 3yrs for "unhealthy."

  // });

  // test('should calculate number of years left on earth when health is poor and return this as second element in array for key called userEarthAge', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.determineHealthStatus(false, false, false);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual(41);
    
  // });

  // test('should calculate number of years left on earth when health is average and return this as second element in array for key called userEarthAge', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.determineHealthStatus(false, true, false);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual(44);
  // });

  // test('should calculate number of years left on Mercury, Venus, Mars and Jupiter and store these as second elements in their coresponding planet age properties when user is "healthy"', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.calculateAges();
  //   lunaFromTheMilkyWay2.determineHealthStatus(true, true, true);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.ageInMercury[1]).toEqual(196);
  //   expect(lunaFromTheMilkyWay2.ageInVenus[1]).toEqual(76);
  //   expect(lunaFromTheMilkyWay2.ageInMars[1]).toEqual(25);
  //   expect(lunaFromTheMilkyWay2.ageInJupiter[1]).toEqual(4);
  // });

  // test('should calculate number of years left on Mercury, Venus, Mars and Jupiter and store these as second elements in their coresponding planet age properties', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.determineHealthStatus(true, true, true);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual("46.8");
  // });

})