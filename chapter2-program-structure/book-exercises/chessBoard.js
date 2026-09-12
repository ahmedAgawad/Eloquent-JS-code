function drawChessboard(n) {
	for (let row = 0; row < n; row++) {
		let currRow = "";
		for (let pos = 0; pos < n; pos++) {
			if (row % 2 === 0) {
				if (pos % 2 === 0) {
					currRow += " ";
				} else {
					currRow += "#";
				}
			} else {
				if (pos % 2 === 0) {
					currRow += "#";
				} else {
					currRow += " ";
				}
			}
		}
		console.log(currRow);
	}
}

drawChessboard(7);
