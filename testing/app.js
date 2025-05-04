const arr = [
  { name: 'Gnanesh', age: 33 },
  { name: 'nayak', age: 44 },
  { name: 'bilva', age: 22 },
  { name: 'richie', age: 32 },
];

function sortTheArr() {
  return arr.sort((a, b) => a.age - b.age);
}
function sortTheName() {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}
console.log(sortTheName());
module.exports = { sortTheArr, sortTheName };
