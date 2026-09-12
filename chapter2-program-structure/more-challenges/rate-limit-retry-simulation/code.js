let attempt = 1;
const maxAttempts = 5;
let delay = 100;
let statusCode = 429;
let success = false;

while (attempt <= maxAttempts) {
	switch (attempt) {
		case 1:
			statusCode = 503;
			break;
		case 2:
		case 3:
			statusCode = 429;
			break;
		case 4:
			statusCode = 200;
	}

	if (statusCode === 200) {
		console.log(`Success on attempt ${attempt}`);
		success = true;
		break;
	} else if (statusCode === 429) {
		console.log(`Rate limited on attempt ${attempt}. Doubling delay to ${delay * 2}ms`);
		delay *= 2;
		attempt++;
	} else if (statusCode === 503) {
		console.log(`Server error on attempt ${attempt}. Adding 100ms jitter`);
		delay += 100;
		attempt++;
	} else {
		console.log(`Fatal error: ${statusCode}`);
		break;
	}
}

if (success === false) {
	console.log(`Request failed after ${maxAttempts}. Final delay reached: ${delay}ms.`);
}
