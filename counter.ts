export function counter(value: number = 0): [() => number, () => void] {
  let count: number = value;
  function getCount() {
    return count;
  }
  function nextCount() {
    count += 1;
  }
  return [getCount, nextCount];
}

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
