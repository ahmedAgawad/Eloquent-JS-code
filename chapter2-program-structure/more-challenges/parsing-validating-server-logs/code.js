const logData = "INFO:200\nWARN:429\nERROR:500\nINFO:304\nERROR:503\nINVALID_RECORD\nINFO:200";

let totalLines = 0;
let successfulRequests = 0; // INFO & status start with 2
let rateLimitedRequests = 0; // status 429
let serverErrors = 0; // status start with 5
let corruptedRecords = 0; // not valid format level:code

let currLogLevel = "";
let currStatus = "";
let colonFound = false;

for (let i = 0; i < logData.length; i++) {
	if (logData[i] === "\n" || i === logData.length - 1) {
		console.log(currLogLevel);
		console.log(currStatus);

		totalLines += 1;

		if (colonFound === false) {
			corruptedRecords++;
		} else if (currLogLevel === "INFO" && currStatus[0] === "2") {
			successfulRequests++;
		} else if (currStatus === "429") {
			rateLimitedRequests++;
		} else if (currStatus[0] === "5") {
			serverErrors++;
		}

		currLogLevel = "";
		currStatus = "";
		colonFound = false;
	} else {
		if (logData[i] === ":") {
			colonFound = true;
			continue;
		}

		if (colonFound === false) {
			currLogLevel += logData[i];
		} else {
			currStatus += logData[i];
		}
	}
}


console.log(`
--- Log Summary ---
Total: ${totalLines}
Success (2xx): ${successfulRequests}
Rate Limited (429): ${rateLimitedRequests}
Server Errors (5xx): ${serverErrors}
Corrupted: ${corruptedRecords}`);
