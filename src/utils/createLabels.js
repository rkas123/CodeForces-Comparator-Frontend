const createLabels = (datasets) => {
  // console.log(datasets.length);
  var arr = [];
  for (let i = 0; i < datasets.length; i++) {
    // console.log(datasets[i]);
    for (let j = 0; j < datasets[i].length; j++) {
      // console.log(datasets[i][j]);
      arr.push(datasets[i][j].id);
    }
  }
  // console.log(arr);
  arr.sort();
  let mySet = new Set(arr);
  // console.log(mySet);
  // console.log("returning labels");
  return new Promise((resolve, reject) => resolve(mySet));
};

export default createLabels;
