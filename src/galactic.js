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
    const averageEarthLifeExpectancy = 78.79;
    if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
      this.healthStatus = "healthy";
      this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy+3 - this.userEarthAge[0]);
      this.ageInMercury[1] = Math.round(this.userEarthAge[1]/0.24);
      this.ageInVenus[1] = Math.round(this.userEarthAge[1]/0.62);
      this.ageInMars[1] = Math.round(this.userEarthAge[1]/1.88);
      this.ageInJupiter[1] = Math.round(this.userEarthAge[1]/11.86);
    } else if (nonSmoker===false && exercises===false && healthyDiet ===false) {
      this.healthStatus = "unhealthy";
    } else {
      this.healthStatus = "standard";
    }
  }

  // yearsLeft() {
  //   const averageEarthLifeExpectancy = 78.79; 
  //   if (this.healthStatus === "healthy") {
  //     this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy+3 - this.userEarthAge[0]);
  //     this.ageInMercury[1] = Math.round(this.userEarthAge[1]/0.24);
  //     this.ageInVenus[1] = Math.round(this.userEarthAge[1]/0.62);
  //     this.ageInMars[1] = Math.round(this.userEarthAge[1]/1.88);
  //     this.ageInJupiter[1] = Math.round(this.userEarthAge[1]/11.86);
  //   } else if (this.healthStatus === "unhealthy") {
  //     this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy-3 - this.userEarthAge[0]);
  //   } else {
  //     this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy - this.userEarthAge[0]);
  //   }
  // }
}