//Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.

import _ from 'lodash';

function average(...number) {
	const leng = number.length;
	let res = 0;
	if (leng === 0) {
		return null;
	}
	return res += (_.sum(number) / leng);
}


console.log(average(1, 2, 3));

