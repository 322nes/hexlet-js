import _ from 'lodash';



function normalize (lesson) {

  lesson.name = _.capitalize(lesson.name);
  lesson.discription = lesson.discription.toLowerCase();
}

const lesson = {
name : 'faLoIMIATOR', 
discription :'HJBFLJHBLHBsdfsdfsdf',
};

lesson.age = '25';

normalize(lesson);

console.log(lesson);
