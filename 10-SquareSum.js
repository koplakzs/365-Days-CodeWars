const squareSum = (nums) => {
  //   let sum = 0;

  //   nums.forEach((element) => {
  //     sum += element * element;
  //   });
  //   return sum;

  return nums.reduce((sum, num) => sum + num * num, 0);
};

console.log(squareSum([1, 2, 3]));
