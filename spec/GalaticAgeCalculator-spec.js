import * as ageCalculator from './../src/GalacticAgeCalculator.js';

describe('Galactic Age Calculator', function() {
  let secondsInYear, secondsInDay, mercuryYearRatio, venusYearRatio, marsYearRatio, jupiterYearRatio;

  beforeEach(function() {
    secondsInYear = 31536000;
    secondsInDay = 86400;
    mercuryYearRatio = .24;
    venusYearRatio = .62;
    marsYearRatio = 1.88;
    jupiterYearRatio = 11.86;
  });

  it('should convert age from years to seconds', function() {
    expect(ageCalculator.convertYearsToSeconds(1)).toEqual(secondsInYear);
  });

  it('should find the difference between two dates in seconds', function() {
    let date1 = new Date('August 02, 2018');
    let date2 = new Date('August 03, 2018');
    expect(ageCalculator.differenceBetweenTwoDatesInSeconds(date1, date2)).toEqual(secondsInDay);
  });

  it('should return age in Mercury Year', function() {
    expect(ageCalculator.ageOnMercury(10)).toEqual(10/mercuryYearRatio);
  });

  it('should return age in Venus Year', function() {
    expect(ageCalculator.ageOnVenus(10)).toEqual(10/venusYearRatio);
  });

  it('should return age in Mar Year', function() {
    expect(ageCalculator.ageOnMars(10)).toEqual(10/marsYearRatio);
  });

  it('should return age in Jupiter Year', function() {
    expect(ageCalculator.ageOnJupiter(10)).toEqual(10/jupiterYearRatio);
  });

  it('should return years left depend on age, life expectancy on Mercury', function() {
    expect(ageCalculator.yearsLeft(10, 80, "Mercury")).toEqual("Your life expectancy is "+((80/mercuryYearRatio)-(10/mercuryYearRatio)));
  });

  it('should return years left depend on age, life expectancy on Venus', function() {
    expect(ageCalculator.yearsLeft(10, 80, "Venus")).toEqual("Your life expectancy is "+((80/venusYearRatio)-(10/venusYearRatio)));
  });

  it('should return years left depend on age, life expectancy on Mars', function() {
    expect(ageCalculator.yearsLeft(10, 80, "Mars")).toEqual("Your life expectancy is "+((80/marsYearRatio)-(10/marsYearRatio)));
  });

  it('should return years left depend on age, life expectancy on Jupiter', function() {
    expect(ageCalculator.yearsLeft(10, 80, "Jupiter")).toEqual("Your life expectancy is "+((80/jupiterYearRatio)-(10/jupiterYearRatio)));
  });

  it('should return years past life expectancy on Mercury', function() {
    expect(ageCalculator.yearsLeft(80, 10, "Mercury")).toEqual("You've exceed expectancy by "+Math.abs((10/mercuryYearRatio)-(80/mercuryYearRatio)));
  });

  it('should return years past life expectancy on Venus', function() {
    expect(ageCalculator.yearsLeft(80, 10, "Venus")).toEqual("You've exceed expectancy by "+Math.abs((10/venusYearRatio)-(80/venusYearRatio)));
  });

  it('should return years past life expectancy on Mars', function() {
    expect(ageCalculator.yearsLeft(80, 10, "Mars")).toEqual("You've exceed expectancy by "+Math.abs((10/marsYearRatio)-(80/marsYearRatio)));
  });

  it('should return years past life expectancy on Jupiter', function() {
    expect(ageCalculator.yearsLeft(80, 10, "Jupiter")).toEqual("You've exceed expectancy by "+Math.abs((10/jupiterYearRatio)-(80/jupiterYearRatio)));
  });
});
