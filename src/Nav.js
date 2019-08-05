import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  const style = {
    border: "1px solid gray"
  };
  return (
    <div style={style}>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/a">A </Link>
      </div>
      <div>
        <Link to="/tab">tab </Link>
      </div>
    </div>
  );
};
