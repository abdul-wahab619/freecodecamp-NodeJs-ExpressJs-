function maxChar(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }

    let maxChar = '';
    let maxCount = 0;

    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxCount;
}

// Example usage:
console.log(maxChar("haaadaaaa")); // Output: 3

