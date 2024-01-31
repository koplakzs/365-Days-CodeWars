const XO = (str) => {
  let amountX = 0;
  let amountO = 0;

  str
    .split("")
    .map((value) => value.toLowerCase())
    .forEach((value) => {
      value === "x" ? (amountX += 1) : value === "o" ? (amountO += 1) : "";
    });
  return amountO === amountX;
};

console.log(XO("abco"));
