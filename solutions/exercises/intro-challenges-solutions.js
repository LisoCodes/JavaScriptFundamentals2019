/**
 * Count the number of digits in an integer
 * @param {number} num an integer
 * @returns {number} number of digits
 *
 * @example
 * countNumberOfDigits(1); // 1
 * countNumberOfDigits(123); // 3
 * countNumberOfDigits(1000); // 4
 */
function countNumberOfDigits(num) {
  return `${num}`.length;
}

/**
 * Given a number of seconds, return how long ago something happened.
 * @param {number} seconds
 * @returns {string} a relative time formatted like one of the following:
 * - when less than a minute: "seconds ago"
 * - when less than an hour: "minutes ago"
 * - when less than a day: "hours ago"
 * - equal to or greater than a day: "days ago"
 *
 * @example
 *
 * getRelativeTime(59); // seconds ago
 * getRelativeTime(60); // minutes ago
 *
 * // shy of 1 hour
 * getRelativeTime(3599); // minutes ago
 *
 * // 1 hour
 * getRelativeTime(3600); // hours ago
 *
 * // shy of 1 day
 * getRelativeTime(86399); // hours ago
 *
 * // 1 day
 * getRelativeTime(86400); // days ago
 */
function getRelativeTime(seconds) {
  const SECONDS_IN_A_DAY = 86400;
  const SECONDS_IN_A_HOUR = 3600;
  const SECONDS_IN_A_MINUTE = 60;
  let message;
  if (seconds < SECONDS_IN_A_MINUTE) message = "seconds ago";
  else if (seconds < SECONDS_IN_A_HOUR) message = "minutes ago";
  else if (seconds < SECONDS_IN_A_DAY) message = "hours ago";
  else message = "days ago";
  return message;
}

/**
 * Round to the nearest 100th decimal point.
 * @param {number} num a float
 * @returns {number} a float with, at most, two decimal points
 *
 * @example
 * roundToNearestHundredth(14.511); // 14.51
 * roundToNearestHundredth(14.499); // 14.5
 */
function roundToNearestHundredth(num) {
  return Math.round(100 * num) / 100;
}

// Ignore this. It is for the tests.
module.exports = {
  countNumberOfDigits,
  getRelativeTime,
  roundToNearestHundredth
};
