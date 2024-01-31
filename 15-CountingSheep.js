const countSheep = (sheeps) => {
  //   let present = 0;

  //   sheeps.forEach((element) => {
  //     element === true ? (present += 1) : (present += 0);
  //   });
  //   return present;
  return sheeps.filter((e) => e === true).length;
};

console.log(countSheep([true, false, true]));
