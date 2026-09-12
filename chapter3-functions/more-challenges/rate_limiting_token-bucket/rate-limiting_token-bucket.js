function createRateLimiter(limit = 5, refillRate = 1) {
	return function consume(cost = 1, replenish = false) {
		if (replenish) {
			limit += refillRate;
		}

		if (limit >= cost) {
			limit -= cost;
			return true;
		} else {
			return false;
		}
	};
}

const limiter = createRateLimiter(3, 1);

console.log(limiter(2)); // true  (tokens left: 1)
console.log(limiter(2)); // false (tokens left: 1, not enough)
console.log(limiter(2, true)); // true  (replenishes 1 -> tokens: 2, consumes 2 -> tokens left: 0)
console.log(limiter()); // false (tokens left: 0, cannot consume default 1)


