function ownLoop(value, test, update, body) {
	if (test(value)) {
		body(value);
		value = update(value);
	} else {
		return value;
	}

	return ownLoop(value, test, update, body);
}

console.log(
	`function return is ${ownLoop(
		0,
		(val) => val < 10,
		(val) => val + 1,
		console.log,
	)}`,
);
