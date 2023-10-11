//Сплюсовать все объекты для диапозона first and second.

import _ from 'lodash';

function summa (first, second) {
	let res = 0;
	for (let i = 0; i <= second; i += 1) {
		res += i;
	}
	return res;
}


console.log(summa(1, 100));
