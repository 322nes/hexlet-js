//Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице.

import _ from 'lodash';

function takeOldest(user, number = 1) {
	return _.sortBy(user, usr => Date.parse(usr.birthday)).slice(0, number);
}



const users = [
{ name: 'Vasya', birthday: 'Nov 20, 1998'},
{ name: 'Dima', birthday: 'Feb 25, 1975'},
{ name: 'Petya', birthday: 'Dec 07, 1978'},
{ name: 'Rusa', birthday: 'Jun 11, 1983'},
{ name: 'Olga', birthday: 'Oct 30, 1991'},
{ name: 'Maha', birthday: 'Mar 17, 1989'},
{ name: 'Denis', birthday: 'Sep 27, 1986'},
];

console.log(takeOldest(users, 2));
