const createLabels = (datasets) => {
  var arr = [];
  for (let i = 0; i < datasets.length; i++) {
    for (let j = 0; j < datasets[i].length; j++) {
      arr.push(datasets[i][j].id);
    }
  }
  arr.sort();
  let mySet = new Set(arr);
  return mySet;
};

export default createLabels;
