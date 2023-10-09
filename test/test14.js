import _ from 'lodash';

function getChildren(users) {
	const res = users.map((user) => user.children || []).flat();
	const result = res.filter((chil) => chil.gender === 'female');
	return result.map((friend) => ({
	name: friend.name, 
	gender: friend.gender
	}));
}

const users = [
{
	name: 'Vasya',
	children: [
	{ name: 'Mira',	birthday: 'Nov 20, 1998', gender: 'male'},
	{ name: 'Maha',	birthday: 'Mar 17, 1989', gender: 'female'},
	],
},
{ name: 'Dima', children: [] },
{
	name: 'Olga',
	children: [
	{ name: 'Denis',	birthday: 'Oct 30, 1991', gender: 'male'},
	{ name: 'Maha',	birthday: 'Mar 17, 1989', gender: 'female'},
	],
},
{
	name: 'Rusa',
	children: [
	{ name: 'Alla',	birthday: 'Dec 07, 1978', gender: 'male'},
	],
},
{
	name: 'Petya',
	children: [
	{ name: 'Ksenia',	birthday: 'Jun 11, 1983', gender: 'female'},
	],
},
{
	name: 'Vasya',
	children: [
	{ name: 'Mira',	birthday: 'Nov 20, 1998', gender: 'male'},
	],
},
];



console.log(getChildren(users));

















