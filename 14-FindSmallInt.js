const findSmallestInt = (int) => {
  return parseInt(int.sort((a, b) => a - b).slice(0, 1));
};

console.log(findSmallestInt([78, 56, 232, 12, 8]));
