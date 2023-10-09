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

