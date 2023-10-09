import _ from 'lodash';



function isSravni(company1, company2) {
  if (company1.name === company2.name && company1.state === company2.state && company1.website === company2.website) {
    return true;
    }
  return false;
}

const company1 = {
name : 'Daf',
state : '23',
website :'ya.ru',
};
const company2 = {
name : 'Daf',
state : '123',
website :'ya.ru',
};


isSravni(company1, company2);

console.log(isSravni(company1, company2));
