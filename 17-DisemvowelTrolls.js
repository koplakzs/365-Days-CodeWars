const disemvowel = (str) => {
  //   return str
  //     .split("")
  //     .filter(
  //       (value) =>
  //         value !== "a" &&
  //         value !== "o" &&
  //         value !== "i" &&
  //         value !== "u" &&
  //         value !== "e"
  //     )
  //     .filter(
  //       (value) =>
  //         value !== "A" &&
  //         value !== "O" &&
  //         value !== "I" &&
  //         value !== "U" &&
  //         value !== "E"
  //     )
  //     .join("");
  return str.replace(/[aeiou]/gi, "");
};

console.log(disemvowel("halooo saya"));
