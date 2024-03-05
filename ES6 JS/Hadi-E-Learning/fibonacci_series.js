// Task 5: Fibonacci in JavaScript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(5)); // Output: 5 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, ...)