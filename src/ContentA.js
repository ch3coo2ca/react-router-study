import React from "react";
import { DatePicker } from "./DatePicker";

import { Link } from "react-router-dom";
export const ContentA = () => {
  return (
    <div>
      content A
      <div>
        <Link to="/a/b"> to contentB </Link>
        <Link to="/c"> to contentC </Link>
      </div>
      <div>
        <DatePicker />
      </div>
    </div>
  );
};
