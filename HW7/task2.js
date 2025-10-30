function numToZero(num) {
  console.log(num);
  if (num > 0) {
    numToZero(num - 1);
  }
}

numToZero(5);
