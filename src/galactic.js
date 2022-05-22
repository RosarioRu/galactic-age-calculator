//business logic with class example below:

export default class GalacticAges {
  constructor (userName, userAge) {
    this.userName = userName;
    this.earthInfo = {age: userAge};
  }

  calculateAges() {
    const earthAge = this.earthInfo.age;
    this.mercuryInfo = {age: Math.round(100*earthAge/0.24)/100};
    this.venusInfo = {age: Math.round(100*earthAge/0.62)/100};
    this.marsInfo = {age: Math.round(100*earthAge/1.88)/100};
    this.jupiterInfo = {age: Math.round(100*earthAge/11.86)/100};
  }

  determineLifeExpectancy(nonSmoker, exercises, healthyDiet) {
    const averageEarthLifeExpectancy = 78.79;
    if ((nonSmoker === true) && (exercises === true) && (healthyDiet === true)) {
      this.healthStatus = "healthy";
      this.earthInfo.yearsLeft= Math.round(averageEarthLifeExpectancy+3 - this.earthInfo.age);
      if (this.earthInfo.yearsLeft >= 0) {
        this.mercuryInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.24);
        this.venusInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.62);
        this.marsInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/1.88);
        this.jupiterInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/11.86);
      } else {
        const earthYrsPastLifeExpectancy = Math.abs(this.earthInfo.yearsLeft);
        this.earthInfo.yearsLeft= "Over estimated life-expectancy by " + earthYrsPastLifeExpectancy + " years";
        this.mercuryInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.24) + " years";
        this.venusInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.62) + " years";
          ;
        this.marsInfo.yearsLeft = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/1.88) + " years";
        this.jupiterInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/11.86) + " years";
      }
    } else if (nonSmoker===false && exercises===false && healthyDiet ===false) {
      this.healthStatus = "unhealthy";
      this.earthInfo.yearsLeft = Math.round(averageEarthLifeExpectancy-3 - this.earthInfo.age);
      if (this.earthInfo.yearsLeft >= 0) {
        this.mercuryInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.24);
        this.venusInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.62);
        this.marsInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/1.88);
        this.jupiterInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/11.86);
      } else {
        const earthYrsPastLifeExpectancy = Math.abs(this.earthInfo.yearsLeft);
        this.earthInfo.yearsLeft= "Over estimated life-expectancy by " + earthYrsPastLifeExpectancy + " years";
        this.mercuryInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.24) + " years";
        this.venusInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/0.62) + " years";
          ;
        this.marsInfo.yearsLeft = "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/1.88) + " years";
        this.jupiterInfo.yearsLeft= "Over estimated life-expectancy by " + Math.round(earthYrsPastLifeExpectancy/11.86) + " years";
      }


    } else {
      this.healthStatus = "standard";
      this.earthInfo.yearsLeft= Math.round(averageEarthLifeExpectancy - this.earthInfo.age);
      this.mercuryInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.24);
      this.venusInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/0.62);
      this.marsInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/1.88);
      this.jupiterInfo.yearsLeft = Math.round(this.earthInfo.yearsLeft/11.86);
    }
  }
}