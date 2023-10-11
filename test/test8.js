//Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
//Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
//Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение.
//Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  console.log(text);
};

console.log(sayPrimeOrNot(5));
