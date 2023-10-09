import _ from 'lodash';

function countWords(text) {
	const words = _.words(text);
	const res = {};
	for (const word of words) {
		const lowerWords = word.toLowerCase();
		res[lowerWords] = (res[lowerWords] ?? 0) + 1;
	}
	return res;
};


const text1 = 'one, two, ONE, tree, four, Four';
const text2 = 'test, TEST, txt, TXT, Txt';

console.log(countWords(text1));
console.log(countWords(text2));
