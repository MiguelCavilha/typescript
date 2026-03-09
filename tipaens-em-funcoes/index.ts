function greet (name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

function doubleNumber(num: number): number {
    return num * 2;
}

console.log(doubleNumber(5)); // Output: 10

function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(3)); // Output: false