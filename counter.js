"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counter = void 0;
function counter(value = 0) {
    let count = value;
    function getCount() {
        return count;
    }
    function nextCount() {
        count += 1;
    }
    return [getCount, nextCount];
}
exports.counter = counter;
const [getA, nextA] = counter(1);
console.log(getA());
nextA();
console.log(getA());
const [getB, nextB] = counter(10);
console.log(getA());
nextB();
console.log(getB());
nextA();
console.log(getA());
