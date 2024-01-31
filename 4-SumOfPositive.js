function positiveSum(arr) {
  let sum = 0;
  arr.filter((ar) => ar > 0).forEach((element) => (sum += element));
  return sum;
}

console.log(positiveSum([1, 2, -3, 4]));
