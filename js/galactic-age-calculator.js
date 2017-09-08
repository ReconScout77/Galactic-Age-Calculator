export class GalacticAge {
  constructor(birthday, gender) {
    this.birthday = birthday;
    this.today = Date.now();
    this.gender = gender;
  }

  ageInEarthYears() {
    return Math.floor(this.ageInSeconds() / 31536000);
  }

  ageInSeconds() {
    return Math.floor((this.today - this.birthday) / 1000);
  }

  ageInMercuryYears() {
    return Math.floor(this.ageInEarthYears() * (365/88));
  }

  ageInVenusYears() {
    return Math.floor(this.ageInEarthYears() * (365/225));
  }

  ageInMarsYears() {
    return Math.floor(this.ageInEarthYears() * (365/687));
  }

  ageInJupiterYears() {
    return Math.floor(this.ageInEarthYears() * (365/4333));
  }

  lifeExpectancyOnEarth() {
    if (this.gender === "female") {
      return 81.6;
    } else {
      return 76.9;
    }
  }

  lifeExpectancyOnMercury() {
    if (this.gender === "female") {
      return Math.floor(81.6 * (365/88));
    } else {
      return Math.floor(76.9 * (365/88));
    }
  }

  lifeExpectancyOnVenus() {
    if (this.gender === "female") {
      return Math.floor(81.6 * (365/225));
    } else {
      return Math.floor(76.9 * (365/225));
    }
  }

  lifeExpectancyOnMars() {
    if (this.gender === "female") {
      return Math.floor(81.6 * (365/687));
    } else {
      return Math.floor(76.9 * (365/687));
    }
  }

  lifeExpectancyOnJupiter() {
    if (this.gender === "female") {
      return Math.floor(81.6 * (365/4333));
    } else {
      return Math.floor(76.9 * (365/4333));
    }
  }
}
