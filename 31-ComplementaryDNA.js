const dnaStrand = (str) => {
  return str
    .split("")
    .map((value) => {
      switch (value) {
        case "A":
          return value.replace("A", "T");
        case "T":
          return value.replace("T", "A");
        case "C":
          return value.replace("C", "G");
        case "G":
          return value.replace("G", "C");
        default:
          return value;
      }
    })
    .join("");
};

console.log(dnaStrand("TACGVFA"));
