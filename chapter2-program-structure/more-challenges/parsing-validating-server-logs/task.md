### Challenge 2: Parsing & Validating Server Access Logs

In backend operations, raw service logs often arrive as unformatted text streams where individual log lines must be parsed, validated, and aggregated into metrics before persistent storage.

#### Task

Write a program that processes a log string using control flow and string traversal concepts from **Chapters 1 & 2**.

1. **Input Data**:
* Use this binding containing a multi-line raw log stream:
```javascript
const logData = "INFO:200\nWARN:429\nERROR:500\nINFO:304\nERROR:503\nINVALID_RECORD\nINFO:200";

```




2. **State & Aggregators**:
* Initialize counter bindings for:
* `totalLines` (tracks total processed lines)
* `successfulRequests` (lines where the level is `INFO` and status code starts with `2`)
* `rateLimitedRequests` (status `429`)
* `serverErrors` (status codes starting with `5`)
* `corruptedRecords` (lines that do not conform to `LEVEL:CODE` format)




3. **Traverse and Parse**:
* Iterate character-by-character through `logData` to split lines manually using a loop, checking for newline characters (`\n`).


* For each line, parse the text before `:` as the log level, and the text after `:` as the status code.
* Update the respective counters according to the rules above.


4. **Output Metrics**:
* Print a report using template literals:
```text
--- Log Summary ---
Total: <totalLines>
Success (2xx): <successfulRequests>
Rate Limited (429): <rateLimitedRequests>
Server Errors (5xx): <serverErrors>
Corrupted: <corruptedRecords>

```





> **Hint**: Array methods like `.split()` belong to Chapter 4. For this Chapter 2 challenge, build strings character-by-character:
> 
> 
> * You can extract characters using index brackets: `logData[i]`.
> 
> 
> * Check length using `logData.length`.
> 
> 
> * Concatenate characters to a working string binding: `currentLine += logData[i]`.
> 
> 
> * The newline escape sequence is `"\n"`.
> 
> 
> 
> 
