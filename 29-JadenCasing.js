const UpperCase = (str) => {
  return str
    .split(" ")
    .map(
      (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    )
    .join(" ");
};

console.log(UpperCase("halo Saya ridho"));
