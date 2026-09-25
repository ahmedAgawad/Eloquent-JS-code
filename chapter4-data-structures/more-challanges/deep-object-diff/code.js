function deepDiff(obj1, obj2) {
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);
	let allKeys = new Set([...obj1Keys, ...obj2Keys]);

	let diffObj = {};

	for (let key of allKeys) {
		if (key in obj1 && key in obj2) {
			if (
				obj1[key] !== null &&
				obj2[key] !== null &&
				typeof obj1[key] === "object" &&
				typeof obj2[key] === "object"
			) {
				let retDiff = deepDiff(obj1[key], obj2[key]);
				if (Object.keys(retDiff).length !== 0) {
					diffObj[key] = retDiff;
				}
			} else {
				if (obj1[key] !== obj2[key]) {
					diffObj[key] = { from: obj1[key], to: obj2[key] };
				}
			}
		} else if (key in obj1) {
			diffObj[key] = { from: obj1[key], to: undefined };
		} else {
			diffObj[key] = { from: undefined, to: obj2[key] };
		}
	}

	console.log(diffObj);
	return diffObj;
}

const objA = {
	name: "Alice",
	age: 30,
	address: {
		city: "Cairo",
		zip: 12345,
	},
	hobbies: ["reading", "chess"],
};

const objB = {
	name: "Alice",
	age: 31,
	address: {
		city: "Cairo",
		zip: 54321,
	},
	hobbies: ["reading", "coding"],
	active: true,
};

deepDiff(objA, objB);
