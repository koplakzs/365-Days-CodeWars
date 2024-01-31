const getCount = (str) => {
  return str
    .split("")
    .filter(
      (value) =>
        value == "a" ||
        value === "i" ||
        value == "u" ||
        value === "e" ||
        value == "o"
    ).length;
};

console.log(getCount("o a kak ushakov lil vo kashu kakao"));
