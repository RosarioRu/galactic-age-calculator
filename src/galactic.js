//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userAge) {
    this.userName = userName;
    this.userAge = userAge;
  }

  calculateAges() {
    const earthAge = this.userAge;
    this.ageInMercury = Math.floor(earthAge/0.24);
  }


  //example of a method function:
  // templateExample(number) {
  //   this.health = (this.health)-number;
  // }
}