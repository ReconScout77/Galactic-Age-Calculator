export class GalacticAge {
  constructor(birthday) {
    this.birthday = birthday;
    this.today = Date.now();
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
}
