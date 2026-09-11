function normalizeConfig(userConfig, defaultConfig) {

	const safeUserConfig = userConfig ?? {};
	const result = {};


	for (const key of Object.keys(defaultConfig)) {
		const userVal = safeUserConfig[key];

		
		if (userVal === undefined) {
			result[key] = defaultConfig[key];
		} else {
			result[key] = userVal;
		}
	}

	return result;
}

const defaults = { timeout: 1000, retries: 3, debug: false, logPath: "/var/log" };

const input = {
	timeout: undefined,
	retries: 0,
	debug: null,
	logPath: "/tmp",
	unknownKey: 42,
};

console.log(normalizeConfig(input, defaults));
