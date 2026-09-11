function safeTruncate(str, maxUnits) {
	let arrayChars = [...str];
	let truncatedStr = ``;
	let length = 0;
	for (let char of arrayChars) {
		let emojiBool = isEmoji(char);
		if (emojiBool && length + 2 <= maxUnits) {
			length += 2;
			truncatedStr += char;
		} else if (emojiBool === false && length + 1 <= maxUnits) {
			length += 1;
			truncatedStr += char;
		} else {
			break;
		}
	}

	return truncatedStr;
}

function isEmoji(char) {
	const codePoint = char.codePointAt(0);

	return (
		(codePoint >= 0x1f600 && codePoint <= 0x1f64f) ||
		(codePoint >= 0x1f300 && codePoint <= 0x1f5ff) ||
		(codePoint >= 0x1f680 && codePoint <= 0x1f6ff) ||
		(codePoint >= 0x1f900 && codePoint <= 0x1f9ff) ||
		(codePoint >= 0x2600 && codePoint <= 0x26ff) ||
		(codePoint >= 0x2700 && codePoint <= 0x27bf)
	);
}

console.log(safeTruncate("a🐴b", 3).length);
console.log(safeTruncate("🐴👟", 3).length);