//Memoization Function Cache
const cache = (func) => {
  const storage = new Map();

  return function (...args) {
    // Numbers, Strings, etc. || undefined
    let key = JSON.stringify(args).slice(2, -2) || args;

    // Function has executed before
    if (storage.has(key) || storage.has(undefined)) {
      return storage.get(key);

      // First-time execution
    } else {
      storage.set(key.length === 0 ? undefined : key, func(...args));
      return storage.get(key);
    }
  };
};

//Pseudocode

// function(function) {
//   if function does not equal stored value in function, then return else null
// }
