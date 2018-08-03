import * as ageCalculator from './../src/GalacticAgeCalculator.js';

describe('Galactic Age Calculator', function() {
  it('should convert age from years to seconds', function() {
    expect(ageCalculator.convertYearsToSeconds(1)).toEqual(31536000);
  });

  it('should find the difference between two dates in seconds', function() {
    let date1 = new Date('August 02, 2018');
    let date2 = new Date('August 03, 2018');
    expect(ageCalculator.differenceBetweenTwoDatesInSeconds(date1, date2)).toEqual(86400);
  });

  it('should return age in Mercury Year', function() {
    expect(ageCalculator.ageOnMercury(10)).toEqual(10/.24);
  });

  it('should return age in Venus Year', function() {
    expect(ageCalculator.ageOnVenus(10)).toEqual(10/.62);
  });

  it('should return age in Mar Year', function() {
    expect(ageCalculator.ageOnMars(10)).toEqual(10/1.88);
  });
});
