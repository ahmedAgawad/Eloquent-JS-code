function groupBy(array, keyOrFunction) {
	let groupObj = {};

	if (typeof keyOrFunction === "string") {
		for (let elem of array) {
			if (elem[keyOrFunction] in groupObj) {
				groupObj[elem[keyOrFunction]].push(elem);
			} else {
				groupObj[elem[keyOrFunction]] = [elem];
			}
		}
	} else {
		for (let elem of array) {
			let retFun = keyOrFunction(elem);
			if (retFun in groupObj) {
				groupObj[retFun].push(elem);
			} else {
				groupObj[retFun] = [elem];
			}
		}
	}

	console.log(groupObj);
}

const students = [
	{ name: "Sara", grade: "A" },
	{ name: "Ali", grade: "B" },
	{ name: "Mona", grade: "A" },
	{ name: "Ziad", grade: "C" },
];

groupBy(students, "grade");

const words = ["one", "two", "three", "four", "five"];

console.log(groupBy(words, word => word.length));
