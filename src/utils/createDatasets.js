const createDataSet = (label, dataset) => {
  var datas = [];
  let i = 0,
    j = 0;
  let prev = 0;
  for (i = 0; i < label.length; i++) {
    if (j === dataset.length) {
      datas.push({ x: i + 1, y: prev });
    } else {
      if (dataset[j].id == label[i]) {
        datas.push({ x: i + 1, y: dataset[j].rating });
        prev = dataset[j].rating;
        j++;
      } else {
        datas.push({ x: i + 1, y: prev });
      }
    }
  }
  return datas;
};

const createDataSets = (label, dataset) => {
  var result = [];
  //   console.log(label, dataset);
  for (let i = 0; i < dataset.length; i++) {
    result.push(createDataSet(label, dataset[i]));
  }
  return result;
};

export default createDataSets;
