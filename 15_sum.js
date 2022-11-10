function add(a, b) {
    if (!a) {
        return add;
    }
    if (!b) {
        return function sum(c) {
            if (typeof c === "undefined") {
                return sum;
            }
            return a + c;
        };
    }
    return a + b;
}

console.log(add(20, 22)); // -> 42
console.log(add(20)(22)); // -> 42
console.log(add(20)()(22)); // -> 42
console.log(add(20)()()()(22)); // -> 42
console.log(add(20)()()()()()()()()()()()(22)); // -> 42
console.log(add()(20)(22)); // -> 42
console.log(add()()()()(20)(22)); // -> 42
console.log(add()(20)()(22)); // -> 42
console.log(add()()()()()(20)()()()(22)); // -> 42
