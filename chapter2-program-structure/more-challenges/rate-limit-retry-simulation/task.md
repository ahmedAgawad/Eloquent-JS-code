### Challenge: Rate Limiting & Retry Simulator

In modern backend systems, outbound network requests to external third-party services often fail due to transient network spikes or strict rate limits. A robust client application needs a retry loop that tracks dynamic execution state, calculates backoff intervals, and safely exits under distinct edge conditions.

#### Task

Write a program that simulates sending a network request with retry and backoff mechanisms using strictly **Chapter 2** concepts (bindings, `while`/`for` loops, conditional branching, update operators, and `console.log`).

1. **State Bindings**:
* `let attempt = 1;` — tracks current attempt count.


* `const maxAttempts = 5;` — upper bound on retry attempts.


* `let delay = 100;` — represents backoff delay in milliseconds.


* `let statusCode = 429;` — holds an HTTP-style status response code.


* `let success = false;` — tracks whether a request succeeded.




2. **Simulation Rules**:
* Loop while `attempt <= maxAttempts` and the request has not yet succeeded.


* In each iteration, simulate an incoming `statusCode`:
* On attempt `1`, let `statusCode` be `503` (Service Unavailable).
* On attempt `2` and `3`, let `statusCode` be `429` (Rate Limited).
* On attempt `4`, let `statusCode` be `200` (OK).


* Evaluate the `statusCode` using `if`/`else` or a `switch` statement:


* If `200`: log `Success on attempt <attempt>`, set `success = true`, and break out or terminate the loop.


* If `429`: log `Rate limited on attempt <attempt>. Doubling delay to <delay * 2>ms.`, double the `delay` value, and increment `attempt`.


* If `503`: log `Server error on attempt <attempt>. Adding 100ms jitter.`, add `100` to `delay`, and increment `attempt`.


* For any other code: log `Fatal error: <code>`, and terminate the loop immediately without further attempts.




* After the loop finishes:
* If `success` is `false`, log `Request failed after <maxAttempts> attempts. Final delay reached: <delay>ms.`.







> **Hint**: You do not need real asynchronous timers (`setTimeout`) or actual network calls here. Use plain bindings to track the changing state across loop iterations.
> 
> 

Submit your solution when ready.