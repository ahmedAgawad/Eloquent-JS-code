function flatten(arr) {
	if (typeof arr !== "object") {
		return arr;
	}

	let flattendArr = [];
	for (let elem of arr) {
		if (typeof elem === "object") {
			let retFlat = flatten(elem);
			flattendArr.push(...retFlat);
		} else {
			flattendArr.push(elem);
		}
	}

	return flattendArr;
}

console.log(flatten([1, [2, 3, 4, 5], [6]]));
console.log(flatten([1, [2, [3, 4]], 5]))

