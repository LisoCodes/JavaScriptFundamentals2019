/**
 * Change the value of email property within an object.
 * You should use the spread operator to deep copy the original object.
 * @param {Object} user
 * e.g. { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" }
 * @param {string} newEmail e.g. "purr@gmail.com"
 *
 * @returns a deep copy of the *user*, with the email property changed.
 *
 * @example
 * const newUser = changeEmail(
 *    { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" },
 *    "purrfect@gmail.com"
 * );
 * console.log(newUser); // { id: 1234, username: "lolcatz1", email: "purr@gmail.com" }
 *
 * user.email = "icanhascheeseburger@yahoo.com"; // This should not change newUser
 */
const changeEmail = (user, newEmail) => {};

/**
 * Add a new item to a shopping cart. You should deep copy any array and objects.
 * @param {Array} shoppingCart an array of objects
 * e.g. [{ name: "TV - 20ft", price: 1000000 }]
 * @param {*} newItem an object to add to the shopping cart array
 * e.g. { name: "Popcorn", price: 5 }
 *
 * @returns the *shoppingCart* array, with the object *newItem* added to it.
 * Both *shoppingCart* and *newItem* should be deep copied.
 *
 * @example
 * const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
 * const newItem = { name: "Popcorn", price: 5 };
 * const newShoppingCart = addToCart(shoppingCart, newItem);
 * console.log(newShoppingCart); // [{ name: "TV - 20ft", price: 1000000 }, { name: "Popcorn", price: 5 }]
 *
 * shoppingCart[0].price = 9000000; // This should not change newShoppingCart
 * newItem.price = 10; // This should not change newItem
 */
const addToCart = (shoppingCart, newItem) => {};

module.exports = {
  changeEmail,
  addToCart
};
