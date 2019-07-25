import React from "react";
import { Bar, Pie } from "react-chartjs-2";

export const ContentB = () => {
  const arr = [];
  const getArr = () => {
    for (let i = 0; i < 12; i++) {
      arr[i] = `group${i}`;
    }
    return arr;
  };

  console.log(getArr());

  const data = {
    labels: arr,
    datasets: [
      {
        label: "LABEL_NAME",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        data: [65, 59, 80, 81, 56, 55, 40, 78, 90, 34, 35, 30]
      }
    ]
  };

  const pieData = {
    labels: arr,
    datasets: [
      {
        data: [65, 59, 80, 0, 56, 55, 0, 78, 90, 34, 35, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return (
    <div>
      <div> Bar Chart Example </div>
      <div>
        <Bar
          data={data}
          width={10}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>

      <div>
        <Pie data={pieData} />
      </div>
    </div>
  );
};
