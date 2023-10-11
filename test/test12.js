//Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром. 
//Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

import _ from 'lodash';

const run = (text) => {

	function takeLast(text, number) {
		if (text.length === 0 || text.length < number) {
			return null;
		}
		const res = [];
		for (let i = text.length - 1; res.length < number; i -= 1) {
			res.push(text[i]);
		}
		return res.join('');
	}
	return takeLast(text, 4);

}

console.log(run('privet'));
