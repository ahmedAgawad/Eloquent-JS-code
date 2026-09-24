let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null,
		},
	},
};

function arrayToList(arr) {
	let list = null;
	for (let i = arr.length - 1; i >= 0; i--) {
		list = {
			value: arr[i],
			rest: list,
		};
	}

	return list;
}

function listToArray(list) {
	let curr = list;
	let arr = [];
	while (true) {
		arr.push(curr.value);
		curr = curr.rest;
		if (curr === null) {
			break;
		}
	}
	return arr;
}

function prepend(elem, list) {
	let newList = { value: elem, rest: list };
	return newList;
}

function nth(list, num) {
	let curr = list;
	let index = 0;
	while (true) {
		if (curr === null) {
			return undefined;
		}

		if (curr.value === num) {
			return index;
		}

		index++;
		curr = curr.rest;
	}
}

function nthRecursive(list, num, index) {
	if (list === null) {
		return undefined;
	}

	if (list.value === num) {
		return index;
	}

	return nthRecursive(list.rest, num, index + 1);
}
console.log(nth(list, 5));
console.log(nthRecursive(list, 4, 0));
