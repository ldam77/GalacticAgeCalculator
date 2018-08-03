import * as ageCalculator from './../src/GalacticAgeCalculator.js';

describe('Galactic Age Calculator', function() {
  it('should convert age from years to seconds', function() {
    expect(ageCalculator.convertYearAgeToSeconds(1)).toEqual(31536000);
  });

  it('should find the difference between two dates in seconds', function() {
    let date1 = new Date('August 02, 2018');
    let date2 = new Date('August 03, 2018');
    expect(ageCalculator.differenceBetweenTwoDatesInSeconds(date1, date2)).toEqual(86400);
  });
});
