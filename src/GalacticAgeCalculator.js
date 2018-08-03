export function convertYearAgeToSeconds(year) {
  return year*365*24*60*60;
}

export function differenceBetweenTwoDatesInSeconds(date1, date2) {
  return Math.abs(date1-date2)/1000;
}
