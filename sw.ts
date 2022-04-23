const a = 5;
const c = 7;
const b = getNumber(7);


const d = kub(a + c);
const e = kub(b);
// const e = kub(b);

console.log(d);
console.log(e);

let f = 67;

function kub(arg) {
  return arg + getNumber(arg);
}

function getNumber(arg) {
  sleep 5m
}
