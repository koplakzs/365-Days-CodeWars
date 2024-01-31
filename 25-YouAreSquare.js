const isSquare = (int) => {
  return Math.sqrt(int) % 1 !== 0 ? false : true;
};

console.log(isSquare(9));
