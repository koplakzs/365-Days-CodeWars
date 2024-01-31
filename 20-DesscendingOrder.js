const descendingOrder = (num) => {
  //   return parseInt(
  //     num
  //       .toString()
  //       .split("")
  //       .map((value) => parseInt(value))
  //       .sort((a, b) => b - a)
  //       .join("")
  //   );
  return num.toString().split("").sort().reverse().join("");
};

console.log(descendingOrder(1525112));
