import test from 'ava' ;
import { factorial } from '../../src' ;
import { enumerate } from '@aureooms/js-itertools' ;

const macro = ( t , n , f ) => t.is( factorial(n) , f ) ;

macro.title = ( _ , n , f ) => `${n}! = ${f}` ;

const sequence = [
	1,
	1,
	2,
	6,
	24,
	120,
	720,
	5040,
	40320,
	362880,
	3628800,
	39916800,
	479001600,
	6227020800,
	87178291200,
	1307674368000,
	20922789888000,
	355687428096000,
	6402373705728000,
	121645100408832000,
	2432902008176640000,
	51090942171709440000,
	1124000727777607680000
] ;

for ( const [ n , f ] of enumerate( sequence ) ) test( macro , n , f ) ;
