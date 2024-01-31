const squareDigits = (num) => {
  return parseInt(
    num
      .toString()
      .split("")
      .map((value) => parseInt(value) * parseInt(value))
      .join("")
  );
};

console.log(squareDigits(3212));
