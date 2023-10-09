function groupBy(mass, label) {
	return mass.reduce((result, obj) => {
	const propertyValue = obj[label];
	result[propertyValue] = result[propertyValue] || [];
	result[propertyValue].push(obj);
	return result;
	},{})
}



const users = [
{
	name: 'Vasya',
	class: 'B',
	mark: 3,
	children: [
	{ name: 'Mira',	birthday: 'Nov 20, 1998', gender: 'male'},
	{ name: 'Maha',	birthday: 'Mar 17, 1989', gender: 'female'},
	],
},
{ name: 'Dima',
	class: 'B',
	mark: 4, 
	children: [] },
{
	name: 'Olga',
	class: 'B',
	mark: 3,
	children: [
	{ name: 'Denis',	birthday: 'Oct 30, 1991', gender: 'male'},
	{ name: 'Maha',	birthday: 'Mar 17, 1989', gender: 'female'},
	],
},
{
	name: 'Rusa',
	class: 'A',
	mark: 5,
	children: [
	{ name: 'Alla',	birthday: 'Dec 07, 1978', gender: 'male'},
	],
},
{
	name: 'Petya',
	class: 'A',
	mark: 2,
	children: [
	{ name: 'Ksenia',	birthday: 'Jun 11, 1983', gender: 'female'},
	],
},
{
	name: 'Vasya',
	class: 'C',
	mark: 8,
	children: [
	{ name: 'Mira',	birthday: 'Nov 20, 1998', gender: 'male'},
	],
},
];


console.log(groupBy(users, 'class'));


