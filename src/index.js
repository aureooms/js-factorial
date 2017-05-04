/**
 * Returns the factorial of the input number _n!_ = <code>1 * 2 * ... * n</code>.
 *
 * @experimental Uses doubles, will return incorrect values for large input.
 *
 * @param {Number} n The input number.
 * @returns {Number} The factorial of the input number.
 */
export function factorial ( n ) {

	// TODO just use a table

	if ( n === 0 ) return 1 ;

	return n * factorial( n - 1 ) ;

}
