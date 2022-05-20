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

  determineHealthStatus(nonSmoker, exercises, healthyDiet) {
    if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
      this.healthStatus = "healthy";
    }
  }
}
