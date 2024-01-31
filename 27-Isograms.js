const isIsogram = (str) => {
  //   const set = new Set(str.split("").map((e) => e.toLowerCase()));
  //   return Array.from(set).join("") === str.toLowerCase();
  return new Set(str.toUpperCase()).size === str.length;
};

console.log(isIsogram("isogramm"));
