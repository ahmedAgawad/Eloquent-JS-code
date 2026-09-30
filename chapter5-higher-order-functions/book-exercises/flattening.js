function flattenArr(arr) {
	// [[1,2,3], [4,5,6], [7,[8,9]]]

	return arr.reduce((acc, arr) => {
		return acc.concat(arr);
	}, []);
}

console.log(
	flattenArr([
		[1, 2, 3],
		[4, 5, 6],
		[7, [8, 9]],
	]),
);
