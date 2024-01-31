const summation = (num) => {
  //   let sum = 0;
  //   for (let index = 1; index <= num; index++) {
  //     sum += index;
  //   }
  //   return sum;

  return (num * (num + 1)) / 2;
};

console.log(summation(8));
