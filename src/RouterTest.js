import React from "react";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

export class RouterTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/getData")
      .then(res => {
        console.log(res);

        setTimeout(() => {
          this.setState({
            loading: false,
            data: res.data.data
          });
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { loading, data } = this.state;

    return (
      <div>{loading ? <CircularProgress color="secondary" /> : data + ""}</div>
    );
  }
}
