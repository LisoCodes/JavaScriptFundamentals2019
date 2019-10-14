/**
 * Using the spread operator remove the first  element from the array
 *
 * @param {array} arr
 * @returns {mixed} an array of values with the values with one of the values removed
 *
 * @example removeElement(['one','two','three']) // ['two', 'three']
 */

function removeElement(arr) {
  const [, ...arr] = arr;
  return arr;
}

/**
 * truncate a string
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ...ending
 *
 * @param {string} string
 * @returns Return the truncated string with a ... as the ending
 *
 * @example
 *
 *
 * truncateString("A-tisket a-tasket A green and yellow basket", 8)
 * should return "A-tisket...".
 *
 *  truncateString("A-", 1)should return "A...".
 *
 * truncateString("Peter Piper picked a peck of pickled peppers", 11)
 *  should return "Peter Piper..."
 *
 */

function truncateString(str, num) {
  return str.substring(0, num) + "...";
}

module.exports = {
  removeElement,
  truncateString
};
