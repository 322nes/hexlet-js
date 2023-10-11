const factorial = (n) => {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

const res = factorial(3);

console.log(res);
