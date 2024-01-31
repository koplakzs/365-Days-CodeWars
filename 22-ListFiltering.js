const filter_list = (lists) => {
  return lists.filter((value) => typeof value === "number");
};

console.log(filter_list([1, 3, 4, "a", "b", 6]));
