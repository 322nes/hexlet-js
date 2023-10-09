import _ from 'lodash';



function getDomainInfo(domain) {

	let sheme = '';
	let name = '';

	if (domain.startsWith('https://')) {
		sheme = 'https';
		name = domain.replace(`${sheme}://`, '');	
	}	else if (domain.startsWith('www.')) {
		sheme = 'www';
		name = domain.replace(`${sheme}.`, '');
	} else {
		sheme = 'http';
		name = domain.replace(`${sheme}://`, '');
	}
	
	return { sheme, name };
}

console.log(getDomainInfo('www.ya.ru'));
console.log(getDomainInfo('http://ya.ru'));
console.log(getDomainInfo('https://ya.ru'));
