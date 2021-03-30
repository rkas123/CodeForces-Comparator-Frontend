import React from "react";
import { Line } from "react-chartjs-2";
import createLabels from "../../utils/createLabels.js";
import createDataSet from "../../utils/createDatasets.js";
const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
};

const Graph = ({ data }) => {
  const Labels = [...createLabels(data.datasets)];
  const userDatasets = createDataSet(Labels, data.datasets);
  const graphLabels = Array.from({ length: Labels.length }, (_, i) => " ");
  const graphDataset = [];
  for (let i = 0; i < data.users.length; i++) {
    graphDataset.push({
      label: data.users[i],
      fill: false,
      data: userDatasets[i],
      borderWidth: 1,
    });
  }
  return (
    <Line
      options={options}
      data={{
        labels: graphLabels,
        datasets: graphDataset,
      }}
    />
  );
};

export default Graph;
