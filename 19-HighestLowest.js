const highAndLow = (num) => {
  //   let highLow;
  //   if (num.split(" ").length !== 1) {
  //     const nums = num
  //       .split(" ")
  //       .map((value) => parseInt(value))
  //       .sort((a, b) => a - b)
  //       .map((value) => value.toString())
  //       .reverse();

  //     highLow = nums
  //       .filter((num, index) => index === 0 || index === nums.length - 1)
  //       .join(" ");
  //   } else {
  //     highLow = num + " " + num;
  //   }
  //   return highLow;
  let nums = num.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}}`;
};

console.log(highAndLow("42 4 233"));
