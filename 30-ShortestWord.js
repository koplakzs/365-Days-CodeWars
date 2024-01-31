const findShort = (str) => {
  //   return parseInt(
  //     str
  //       .split(" ")
  //       .map((value) => value.length)
  //       .sort((a, b) => a - b)
  //       .slice(0, 1)
  //   );

  return Math.min(...str.split(" ").map((value) => value.length));
};

console.log(findShort("Steem BTC ProofOfStake Bitcoin"));
