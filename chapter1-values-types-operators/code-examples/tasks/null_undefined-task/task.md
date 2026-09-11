### Task: The Safe Config Normalizer

Implement a function `normalizeConfig(userConfig, defaultConfig)` that merges a `userConfig` object into a `defaultConfig` object following strict evaluation rules for empty/missing values:

#### Rules:
1. Both `userConfig` and `defaultConfig` are single-level objects with key-value pairs.
2. If `userConfig` is `null` or `undefined`, treat it as an empty object `{}`.
3. For every key present in `defaultConfig`:
   - If the key is **missing** in `userConfig`, or its value is `undefined`, keep the value from `defaultConfig`.
   - If the key in `userConfig` is explicitly set to `null`, preserve `null` as the valid, intentional unset state (do not fallback to `defaultConfig`).
   - If the key is any other value (including falsy ones like `0`, `""`, or `false`), keep the value from `userConfig`.
4. Properties present in `userConfig` but **not** present in `defaultConfig` should be ignored.
5. Do not mutate either input object; return a new object.

#### Example Test Cases:
```javascript
const defaults = { timeout: 1000, retries: 3, debug: false, logPath: "/var/log" };

const input = {
  timeout: undefined, // Should fallback to 1000
  retries: 0,         // Falsy value: should preserve 0
  debug: null,        // Explicit null: should preserve null
  logPath: "/tmp",    // Normal override: should preserve "/tmp"
  unknownKey: 42      // Not in defaults: should be omitted
};

console.log(normalizeConfig(input, defaults));
// Expected output:
// { timeout: 1000, retries: 0, debug: null, logPath: "/tmp" }