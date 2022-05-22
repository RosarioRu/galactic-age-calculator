import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {

  let lunaFromTheMilkyWay;
  beforeEach(() => {
    lunaFromTheMilkyWay = new GalacticAges("Luna", 35);
  });

  test ('should create an object with two properties - userName and age(inside earthInfo)', () => {
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

  test('method should assign another property to the object called healthStatus and in this case return "healthy." It should also calculate years left on each planet based on "healthy" status and set this number as the value of key "yearsLeft" inside corresponding planet info object', () => {
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("healthy");
    expect(lunaFromTheMilkyWay.earthInfo.yearsLeft).toEqual(47);
    expect(lunaFromTheMilkyWay.mercuryInfo.yearsLeft).toEqual(196);
    expect(lunaFromTheMilkyWay.venusInfo.yearsLeft).toEqual(76);
    expect(lunaFromTheMilkyWay.marsInfo.yearsLeft).toEqual(25);
    expect(lunaFromTheMilkyWay.jupiterInfo.yearsLeft).toEqual(4);
  });

  test('method should assign another property to the object called healthStatus and in this case return "unhealthy." It should also calculate years left on each planet based on "unhealthy" healthStatus and set these as second items in corresponding planet info objects', () => {
    const nonSmoker = false;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("unhealthy");
    expect(lunaFromTheMilkyWay.earthInfo.yearsLeft).toEqual(41);
    expect(lunaFromTheMilkyWay.mercuryInfo.yearsLeft).toEqual(171);
    expect(lunaFromTheMilkyWay.venusInfo.yearsLeft).toEqual(66);
    expect(lunaFromTheMilkyWay.marsInfo.yearsLeft).toEqual(22);
    expect(lunaFromTheMilkyWay.jupiterInfo.yearsLeft).toEqual(3);
  });

  test('method should assign another property to the object called healthStatus and in this case return "standard"', () => {
    const nonSmoker = true;
    const exercise = false;
    const healthyDiet = false;
    lunaFromTheMilkyWay.calculateAges();
    lunaFromTheMilkyWay.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(lunaFromTheMilkyWay.healthStatus).toEqual("standard");
    expect(lunaFromTheMilkyWay.earthInfo.yearsLeft).toEqual(44);
    expect(lunaFromTheMilkyWay.mercuryInfo.yearsLeft).toEqual(183);
    expect(lunaFromTheMilkyWay.venusInfo.yearsLeft).toEqual(71);
    expect(lunaFromTheMilkyWay.marsInfo.yearsLeft).toEqual(23);
    expect(lunaFromTheMilkyWay.jupiterInfo.yearsLeft).toEqual(4);
  });  

  test('it should return a string that contains years above life-expectancy when users age surpasses it: "Over estimated life-expectancy by x years" and set this as the second item in the object containing planet info', () => {
    let oldLuna = new GalacticAges("Luna", "100");
    const nonSmoker = true;
    const exercise = true;
    const healthyDiet = true;
    oldLuna.calculateAges();
    oldLuna.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(oldLuna.healthStatus).toEqual("healthy");
    expect(oldLuna.earthInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 18 + " years");
    expect(oldLuna.mercuryInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 75 + " years");
    expect(oldLuna.venusInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 29 + " years");
    expect(oldLuna.marsInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 10 + " years");
    expect(oldLuna.jupiterInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 2 + " years");
  });

  test('For "unhealthy" branch: it should return a string that contains years above life-expectancy when users age surpasses it: "Over estimated life-expectancy by x years" and set this as the second item in the object containing planet info', () => {
    let oldLuna = new GalacticAges("Luna", "100");
    const nonSmoker = false;
    const exercise = false;
    const healthyDiet = false;
    oldLuna.calculateAges();
    oldLuna.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(oldLuna.healthStatus).toEqual("unhealthy");
    expect(oldLuna.earthInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 24 + " years");
    expect(oldLuna.mercuryInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 100 + " years");
    expect(oldLuna.venusInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 39 + " years");
    expect(oldLuna.marsInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 13 + " years");
    expect(oldLuna.jupiterInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 2 + " years");
  });

  test('For "standard" health branch: it should return a string that contains years above life-expectancy when users age surpasses it: "Over estimated life-expectancy by x years" and set this as the second item in the object containing planet info', () => {
    let oldLuna = new GalacticAges("Luna", "100");
    const nonSmoker = false;
    const exercise = true;
    const healthyDiet = false;
    oldLuna.calculateAges();
    oldLuna.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    expect(oldLuna.healthStatus).toEqual("standard");
    expect(oldLuna.earthInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 21 + " years");
    expect(oldLuna.mercuryInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 88 + " years");
    expect(oldLuna.venusInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 34 + " years");
    expect(oldLuna.marsInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 11 + " years");
    expect(oldLuna.jupiterInfo.yearsLeft).toEqual("Over estimated life-expectancy by " + 2 + " years");
  });

})