import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@material-ui/core";
import createLabels from "../../utils/createLabels.js";
import createDataSet from "../../utils/createDatasets.js";
import createLabels2 from "../../utils/createLabel2.js";
import createDataSet2 from "../../utils/createDatasets2.js";
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

const colors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const Graph = ({ data, type }) => {
  // const [loader, setLoader] = useState(true);
  const [state, setState] = useState({});
  const [loader, setLoader] = useState(true);
  // console.log(data.datasets.length, data.users.length);
  useEffect(async () => {
    const func = async () => {
      // console.log("use Effect");
      let labels;
      if (type === 0) {
        labels = [...(await createLabels(data.datasets))];
      } else {
        labels = [...(await createLabels2(data.datasets))];
      }
      const Labels = Array.from({ length: labels.length }, () => " ");
      let temp = [];
      if (type === 0) {
        temp = await createDataSet(labels, data.datasets);
      } else {
        temp = await createDataSet2(labels, data.datasets);
      }
      const datasets = [];
      for (let i = 0; i < data.users.length; i++) {
        datasets.push({
          label: data.users[i],
          fill: false,
          data: temp[i],
          borderColor: colors[i],
          borderWidth: 2,
          pointBorderWidth: 0,
          pointRadius: 1,
          pointHitRadius: 5,
        });
      }
      return new Promise((resolve, reject) => {
        resolve({ labels: Labels, datasets: datasets });
      });
    };
    if (loader) {
      const data = await func();
      setState(data);
      // console.log(state);
      setLoader(false);
    }
  }, [loader]);
  if (loader) {
    // console.log("loading");

    return <CircularProgress />;
  } else {
    // console.log(state);
    return (
      <Line
        options={options}
        data={{
          labels: state.labels,
          datasets: state.datasets,
        }}
      />
    );
  }
};

export default Graph;
