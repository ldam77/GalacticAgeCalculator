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
  if (planet === 'Mercury') {
    return ageOnMercury(expectancy) - ageOnMercury(age);
  } else if (planet === "Venus") {
    return ageOnVenus(expectancy) - ageOnVenus(age);
  } else if (planet === "Mars") {
    return ageOnMars(expectancy) - ageOnMars(age);
  } else if (planet === "Jupiter") {
    return ageOnJupiter(expectancy) - ageOnJupiter(age);
  }
}
