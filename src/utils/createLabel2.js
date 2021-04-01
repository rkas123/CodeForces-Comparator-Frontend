const createLabels = (datasets) => {
  // console.log(datasets.length);
  var arr = [];
  for (let i = 0; i < datasets.length; i++) {
    let len = datasets[i][0].length;
    for (let j = 0; j < len; j++) arr.push(datasets[i][0][j].id);
  }
  arr.sort();
  let mySet = new Set(arr);
  return new Promise((resolve, reject) => resolve(mySet));
};

export default createLabels;
