export class GalacticAge {
  constructor(birthday) {
    this.birthday = birthday;
  }

  ageInEarthYears() {
    return Math.floor(this.ageInSeconds() / 31536000);
  }

  ageInSeconds() {
    var today = Date.now();
    return Math.floor((today - this.birthday) / 1000);
  }
}
