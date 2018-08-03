export function convertYearsToSeconds(year) {
  return year*365*24*60*60;
}

export function differenceBetweenTwoDatesInSeconds(date1, date2) {
  return Math.abs(date1-date2)/1000;
}

export function ageOnMercury(year) {
  return year/.24;
}

export function ageOnVenus(year) {
  return year/.62;
}

export function ageOnMars(year) {
  return year/1.88;
}

export function ageOnJupiter(year) {
  return year/11.86;
}

export function yearsLeft(age, expectancy, planet) {
  let yearsLeft;
  if (planet === 'Mercury') {
    yearsLeft = ageOnMercury(expectancy) - ageOnMercury(age);
  } else if (planet === "Venus") {
    yearsLeft = ageOnVenus(expectancy) - ageOnVenus(age);
  } else if (planet === "Mars") {
    yearsLeft = ageOnMars(expectancy) - ageOnMars(age);
  } else if (planet === "Jupiter") {
    yearsLeft = ageOnJupiter(expectancy) - ageOnJupiter(age);
  }
  if (yearsLeft >= 0) {
    return "Your life expentancy is " + yearsLeft;
  } else {
    return "You've exceed expectancy by " + Math.abs(yearsLeft);
  }
}
