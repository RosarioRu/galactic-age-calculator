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
    expect(lunaFromTheMilkyWay.ageInMercury).toEqual([145]);
  });

  test('method should add three other properties to the object, the age of the user in Venus, Mars and Jupiter inside arrays', () => {
    lunaFromTheMilkyWay.calculateAges();
    expect(lunaFromTheMilkyWay.ageInVenus).toEqual([56]);
    expect(lunaFromTheMilkyWay.ageInMars).toEqual([18]);
    expect(lunaFromTheMilkyWay.ageInJupiter).toEqual([2]);
  });

  test('method should assign another property to the object called healthStatus and in this case return "healthy"', () => {
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("healthy");
  });

  test('method should assign another property to the object called healthStatus and in this case return "unhealthy"', () => {
    const nonSmoker = false;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("unhealthy");
  });

  test('method should assign another property to the object called healthStatus and in this case return "standard"', () => {
    const nonSmoker = true;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.determineHealthStatus(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("standard");
  });

  test('should calculate number of years left on earth and return this as second element in array for key called userEarthAge', () => {
    let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
    lunaFromTheMilkyWay2.determineHealthStatus(true, true, true);
    lunaFromTheMilkyWay2.yearsLeft();
    expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual("46.8");
    //The plan: assume 78.79-us average life expectancy. Add 3yrs for "healthy, reduce 3yrs for "unhealthy."

  });

  test('should calculate number of years left on earth when health is poor and return this as second element in array for key called userEarthAge', () => {
    let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
    lunaFromTheMilkyWay2.determineHealthStatus(false, false, false);
    lunaFromTheMilkyWay2.yearsLeft();
    expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual("43.8");
  });

  // test('should calculate number of years left on Mercury, Venus, Mars and Jupiter and store these as second elements in their coresponding planet age properties', () => {
  //   let lunaFromTheMilkyWay2 = new GalacticAges("Luna", 35);
  //   lunaFromTheMilkyWay2.determineHealthStatus(true, true, true);
  //   lunaFromTheMilkyWay2.yearsLeft();
  //   expect(lunaFromTheMilkyWay2.userEarthAge[1]).toEqual("46.8");
  // });

})