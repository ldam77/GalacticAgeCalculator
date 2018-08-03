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
