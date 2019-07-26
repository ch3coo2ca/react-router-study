import React from "react";
import { RouterTest } from "./RouterTest";
import { Graph } from "./Graph";

export const ContentC = () => {
  const groupList = {
    group1: [
      {
        name: "name1",
        value: 1
      },
      {
        name: "name2",
        value: 2
      },
      {
        name: "name3",
        value: 3
      },
      {
        name: "name1",
        value: 4
      },
      {
        name: "name2",
        value: 5
      },
      {
        name: "name3",
        value: 6
      }
    ],
    group2: [
      {
        name: "name1",
        value: 7
      },
      {
        name: "name2",
        value: 8
      },
      {
        name: "name3",
        value: 9
      },
      {
        name: "name3",
        value: 10
      }
    ],
    group3: [
      {
        name: "name1",
        value: 11
      },
      {
        name: "name2",
        value: 2
      },
      {
        name: "name3",
        value: 3
      }
    ],
    group4: [
      {
        name: "name1",
        value: 1
      },
      {
        name: "name2",
        value: 2
      },
      {
        name: "name3",
        value: 9
      },
      {
        name: "name3",
        value: 5
      }
    ]
  };

  return (
    <div>
      no match...
      <RouterTest />
      <Graph groupList={groupList} />
    </div>
  );
};
