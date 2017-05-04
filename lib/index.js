"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factorial = factorial;
/**
 * Returns the factorial of the input number _n!_ = <code>1 * 2 * ... * n</code>.
 *
 * @experimental Uses doubles, will return incorrect values for large input.
 *
 * @param {Number} n The input number.
 * @returns {Number} The factorial of the input number.
 */
function factorial(n) {

  // TODO just use a table

  if (n === 0) return 1;

  return n * factorial(n - 1);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmYWN0b3JpYWwiLCJuIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsUyxHQUFBQSxTO0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLFNBQVQsQ0FBcUJDLENBQXJCLEVBQXlCOztBQUUvQjs7QUFFQSxNQUFLQSxNQUFNLENBQVgsRUFBZSxPQUFPLENBQVA7O0FBRWYsU0FBT0EsSUFBSUQsVUFBV0MsSUFBSSxDQUFmLENBQVg7QUFFQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgZmFjdG9yaWFsIG9mIHRoZSBpbnB1dCBudW1iZXIgX24hXyA9IDxjb2RlPjEgKiAyICogLi4uICogbjwvY29kZT4uXG4gKlxuICogQGV4cGVyaW1lbnRhbCBVc2VzIGRvdWJsZXMsIHdpbGwgcmV0dXJuIGluY29ycmVjdCB2YWx1ZXMgZm9yIGxhcmdlIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBpbnB1dCBudW1iZXIuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgZmFjdG9yaWFsIG9mIHRoZSBpbnB1dCBudW1iZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3JpYWwgKCBuICkge1xuXG5cdC8vIFRPRE8ganVzdCB1c2UgYSB0YWJsZVxuXG5cdGlmICggbiA9PT0gMCApIHJldHVybiAxIDtcblxuXHRyZXR1cm4gbiAqIGZhY3RvcmlhbCggbiAtIDEgKSA7XG5cbn1cbiJdfQ==