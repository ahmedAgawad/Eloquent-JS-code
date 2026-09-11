const rawConfig = {
	envRateLimit: "0",
	globalLimit: 100,
	userRole: "guest",
	isBlocked: false,
	trustedProxy: true,
};

// Expression 1: Determining allowed rate limit
// final value : "0"
const limit = Number(rawConfig.envRateLimit) || (rawConfig.globalLimit && 50); 

// Expression 2: Evaluating access check
// final value : true
const accessGranted =
	(!rawConfig.isBlocked && rawConfig.trustedProxy) || (rawConfig.userRole === "admin" && false);

// Expression 3: Type check arithmetic
// final value : false
const statusHeader = "X-Limit: " + 5 + 10 == "X-Limit: 15";
