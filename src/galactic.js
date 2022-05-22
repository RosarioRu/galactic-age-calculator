//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userAge) {
    this.userName = userName;
    this.earthInfo = {age: userAge};
  }

  calculateAges() {
    const earthAge = this.earthInfo.age;
    this.mercuryInfo = {age: Math.round(100*earthAge/0.24)/100};
    // this.mercuryInfo = {};
    // this["mercuryInfo"].age = Math.round(100*earthAge/0.24)/100;
    this.venusInfo = {age: Math.round(100*earthAge/0.62)/100};
    this.marsInfo = {age: Math.round(100*earthAge/1.88)/100};
    this.jupiterInfo = {age: Math.round(100*earthAge/11.86)/100};
  }

  // determineLifeExpectancy(nonSmoker, exercises, healthyDiet) {
  //   const averageEarthLifeExpectancy = 78.79;
  //   if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
  //     this.healthStatus = "healthy";
  //     this.earthInfo[1] = Math.round(averageEarthLifeExpectancy+3 - this.earthInfo[0]);
  //       if (this.earthInfo[1] >= 0) {
  //         this.ageInMercury[1] = Math.round(this.earthInfo[1]/0.24);
  //         this.ageInVenus[1] = Math.round(this.earthInfo[1]/0.62);
  //         this.ageInMars[1] = Math.round(this.earthInfo[1]/1.88);
  //         this.ageInJupiter[1] = Math.round(this.earthInfo[1]/11.86);
  //       } else {
  //         const earthYrsPastLifeExpectancy = Math.abs(this.earthInfo[1]);
  //         this.earthInfo[1] = ("Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy) + " years");
  //         this.ageInMercury[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.24) + " years";
  //         this.ageInVenus[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.62) + " years";
  //         ;
  //         this.ageInMars[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/1.88) + " years";
  //         this.ageInJupiter[1] = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/11.86) + " years";
  //       }
  //   } else if (nonSmoker===false && exercises===false && healthyDiet ===false) {
  //     this.healthStatus = "unhealthy";
  //     this.earthInfo[1] = Math.round(averageEarthLifeExpectancy-3 - this.earthInfo[0]);
  //     this.ageInMercury[1] = Math.round(this.earthInfo[1]/0.24);
  //     this.ageInVenus[1] = Math.round(this.earthInfo[1]/0.62);
  //     this.ageInMars[1] = Math.round(this.earthInfo[1]/1.88);
  //     this.ageInJupiter[1] = Math.round(this.earthInfo[1]/11.86);
  //   } else {
  //     this.healthStatus = "standard";
  //     this.earthInfo[1] = Math.round(averageEarthLifeExpectancy - this.earthInfo[0]);
  //     this.ageInMercury[1] = Math.round(this.earthInfo[1]/0.24);
  //     this.ageInVenus[1] = Math.round(this.earthInfo[1]/0.62);
  //     this.ageInMars[1] = Math.round(this.earthInfo[1]/1.88);
  //     this.ageInJupiter[1] = Math.round(this.earthInfo[1]/11.86);
  //   }
  // }

 
}