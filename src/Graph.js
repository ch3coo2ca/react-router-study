import React from "react";
import { Bar } from "react-chartjs-2";

export class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: this.props.groupList,
      groupValues: [],
      chartData: {}
    };
  }

  setGroupValues = () => {
    const { groupList } = this.state;
    const valueArr = [];
    Object.keys(groupList).map(key => {
      const items = groupList[key];
      let total = 0;
      items.forEach(item => {
        total = total + item.value;
      });
      valueArr.push(total);
    });

    this.setState(
      {
        groupValues: valueArr
      },
      () => {
        this.setChartData(valueArr);
      }
    );
    console.table(valueArr);
  };

  setChartData = groupValues => {
    const chartData = {
      labels: ["a", "b", "c", "d"],
      datasets: [
        {
          label: "pie",
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          borderWidth: 1,
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          data: groupValues
        }
      ]
    };
    this.setState({
      chartData
    });
  };
  componentDidMount() {
    this.setGroupValues();

    this.setState({
      chartData: {
        labels: ["a", "b", "c", "d"],
        datasets: [
          {
            label: "pie",
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1,
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            data: this.state.groupValues
          }
        ]
      }
    });
  }

  render() {
    const data = {
      labels: ["a", "b", "c", "d"],
      datasets: [
        {
          label: "pie",
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          borderWidth: 1,
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          data: this.state.groupValues
        }
      ]
    };
    console.log(this.state.groupValues);
    return (
      <div>
        <Bar
          data={this.state.chartData}
          width={10}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
