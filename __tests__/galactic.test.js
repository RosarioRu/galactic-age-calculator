import GalacticAges from './../src/galactic.js';

describe('GalacticAges', () => {

  test('should create an object with two properties - userName and userAge', () => {
    const userGalacticAges = new GalacticAges("Luna", 35);
    expect(userGalacticAges.userName).toEqual("Luna");
    expect(userGalacticAges.userAge).toEqual(35);
  });
});