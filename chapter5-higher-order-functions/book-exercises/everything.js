function everythingLoop(arr, predicate) {
	for (let elem of arr) {
		if (!predicate(elem)) {
			return false;
		}
	}

	return true;
}

function everythingSome(arr, predicate) {
	return !arr.some((element) => !predicate(element));
}

console.log(everythingLoop([1, 2, 3, 4, 5, 11], (elem) => elem < 10));
console.log(everythingSome([1, 2, 3, 4, 5, 11], (elem) => elem < 10));
