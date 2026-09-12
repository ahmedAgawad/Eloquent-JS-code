function countChar(str, char) {
	let count = 0;
	for (let ch of str) {
		if (ch === char) {
			count++;
		}
	}

	return count;
}

function countBs(str) {
	return countChar(str, "B");
}


console.log(countBs("ABBBCJKLFJ"));
console.log(countChar("AAAAAAJKHJKJ", "A"));
