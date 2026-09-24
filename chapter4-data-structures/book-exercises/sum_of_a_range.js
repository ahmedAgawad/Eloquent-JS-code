function range(start, end, step = 1) {
	let nums = [];
	let curr = start;
	while (true) {
		nums.push(curr);
		curr += step;
		if (curr == end) {
			nums.push(curr);
			break;
		}
	}
	return nums;
}

function sum(nums) {
	let sum = 0;
	for (let num of nums) {
		sum += num;
	}
	return sum;
}

console.log(sum(range(1, 10, 1)));
console.log(sum(range(5, 2, -1)));
