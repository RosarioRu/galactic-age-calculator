//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userAge) {
    this.userName = userName;
    this.userAge = userAge;
  }

  calculateAges() {
    const earthAge = this.userAge;
    this.ageInMercury = Math.floor(earthAge/0.24);
    this.ageInVenus = Math.floor(earthAge/0.62);
    this.ageInMars = Math.floor(earthAge/1.88);
    this.ageInJupiter = Math.floor(earthAge/11.86);
  }


  //example of a method function:
  // templateExample(number) {
  //   this.health = (this.health)-number;
  // }
}