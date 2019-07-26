import React from "react";
import axios from "axios";

export class RouterTest extends React.Component {
  componentDidMount() {
    axios
      .get("/api/getData")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div> a</div>;
  }
}
