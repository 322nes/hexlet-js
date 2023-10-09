import _ from 'lodash';

function chelData(...date) {
	const format = [];
	for (const fill of date) {
		const data = new Date(fill);
		const fdata = data.toDateString();
		format.push(fdata);
	}
	return format;
}

console.log(chelData(1993, 3, 24, 1));
