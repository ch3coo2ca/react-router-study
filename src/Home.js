import React from "react";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

export const Home = () => {
  return (
    <div>
      HOME!!!
      <IconButton
        aria-label="delete"
        onClick={() => console.log("button working ")}
      >
        <DeleteIcon size="small" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => console.log("button working ")}
      >
        <DeleteIcon size="medium" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => console.log("button working ")}
      >
        <DeleteIcon size="large" />
      </IconButton>
      <IconButton aria-label="add">
        <AddCircle onClick={() => console.log("add")} />
      </IconButton>
    </div>
  );
};
