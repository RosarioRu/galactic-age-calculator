//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userEarthAge) {
    this.userName = userName;
    this.userEarthAge = [userEarthAge];
  }

  calculateAges() {
    const earthAge = this.userEarthAge[0];
    this.ageInMercury = [Math.floor(earthAge/0.24)];
    this.ageInVenus = [Math.floor(earthAge/0.62)];
    this.ageInMars = [Math.floor(earthAge/1.88)];
    this.ageInJupiter = [Math.floor(earthAge/11.86)];
  }

  determineHealthStatus(nonSmoker, exercises, healthyDiet) {
    if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
      this.healthStatus = "healthy";
    } else if (nonSmoker===false && exercises===false && healthyDiet ===false) {
      this.healthStatus = "unhealthy";
    } else {
      this.healthStatus = "standard";
    }
  }

  yearsLeft() {
    const averageEarthLifeExpectancy = 78.79;
    if (this.healthStatus = "healthy") {
      this.userEarthAge[1] = (averageEarthLifeExpectancy+3 - this.userEarthAge[0]).toFixed(1);
    }
  }
}