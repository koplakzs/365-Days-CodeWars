const removeChar = (str) => {
  //   let array = str.split("");
  //   return str
  //     .split("")
  //     .splice(1, array.length - 2)
  //     .join("");
  return str.slice(1, -1);
};

console.log(removeChar("testsddsdsdhhft"));
