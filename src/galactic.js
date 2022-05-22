//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userEarthAge) {
    this.userName = userName;
    this.userEarthAge = [userEarthAge];
  }

  calculateAges() {
    const earthAge = this.userEarthAge[0];
    this.ageInMercury = [Math.round(100*earthAge/0.24)/100];
    this.ageInVenus = [Math.round(100*earthAge/0.62)/100];
    this.ageInMars = [Math.round(100*earthAge/1.88)/100];
    this.ageInJupiter = [Math.round(100*earthAge/11.86)/100];
  }

  determineHealthStatus(nonSmoker, exercises, healthyDiet) {
    const averageEarthLifeExpectancy = 78.79;
    if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
      this.healthStatus = "healthy";
      this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy+3 - this.userEarthAge[0]);
        if (this.userEarthAge[1] >= 0) {
          this.ageInMercury[1] = Math.round(this.userEarthAge[1]/0.24);
          this.ageInVenus[1] = Math.round(this.userEarthAge[1]/0.62);
          this.ageInMars[1] = Math.round(this.userEarthAge[1]/1.88);
          this.ageInJupiter[1] = Math.round(this.userEarthAge[1]/11.86);
        } else {
          const earthYrsPastLifeExpectancy = Math.abs(this.userEarthAge[1]);
          this.userEarthAge[1] = ("Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy) + " years");
          this.ageInMercury[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.24) + " years";
          this.ageInVenus[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.62) + " years";
          ;
          this.ageInMars[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/1.88) + " years";
          this.ageInJupiter[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/11.86) + " years";
        }
    } else if (nonSmoker===false && exercises===false && healthyDiet ===false) {
      this.healthStatus = "unhealthy";
      this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy-3 - this.userEarthAge[0]);
      this.ageInMercury[1] = Math.round(this.userEarthAge[1]/0.24);
      this.ageInVenus[1] = Math.round(this.userEarthAge[1]/0.62);
      this.ageInMars[1] = Math.round(this.userEarthAge[1]/1.88);
      this.ageInJupiter[1] = Math.round(this.userEarthAge[1]/11.86);
    } else {
      this.healthStatus = "standard";
      this.userEarthAge[1] = Math.round(averageEarthLifeExpectancy - this.userEarthAge[0]);
      this.ageInMercury[1] = Math.round(this.userEarthAge[1]/0.24);
      this.ageInVenus[1] = Math.round(this.userEarthAge[1]/0.62);
      this.ageInMars[1] = Math.round(this.userEarthAge[1]/1.88);
      this.ageInJupiter[1] = Math.round(this.userEarthAge[1]/11.86);
    }
  }

 
}