//До нового года осталось..

const nowYear = new Date().getFullYear();
const nowNextYear = new Date(`Jan 01 ${ nowYear + 1 } 00:00:00`).getFullYear();

const now = new Date();
const nextYear = new Date(`Jan 01 ${ nowYear + 1 } 00:00:00`);

const diff = nextYear - now;

const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

console.log(`До нового ${nowNextYear} года осталось: 
${daysLeft} дней, ${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft} часов, ${minutesLeft < 10 ? '0' + minutesLeft : minutesLeft} минут, ${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft} секунд`);

