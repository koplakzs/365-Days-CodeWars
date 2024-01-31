const accum = (str) => {
  //   return str
  //     .split("")
  //     .map((value, index) => value.repeat(index + 1))
  //     .map(
  //       (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  //     )
  //     .join("-");
  return str
    .split("")
    .map(
      (value, index) => value.toUpperCase() + value.toLowerCase().repeat(index)
    )
    .join("-");
};

console.log(accum("abcDfY"));
