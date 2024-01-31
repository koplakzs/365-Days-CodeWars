const getMiddle = (str) => {
  //   let value = str.split("");
  //   if (value.length % 2 === 0) {
  //     value = value.splice(value.length / 2 - 1, 2).join("");
  //   } else {
  //     value = value.splice((value.length - 1) / 2, 1).join("");
  //   }
  //   return value;
  return str.substr(
    Math.ceil(str.length / 2 - 1),
    str.length % 2 === 0 ? 2 : 1
  );
};

console.log(getMiddle("abcdes"));
