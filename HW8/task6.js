const numberList = [1, 10, 14, 2, 4, 5, 43, 34];
const numberList2 = numberList.slice();
numberList2.sort((a, b) => a - b);

console.log(numberList2);
console.log(numberList);
