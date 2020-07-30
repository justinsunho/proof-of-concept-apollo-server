import React, { useState } from "react";
import { TableEntry } from "../../atoms";

const Table = ({}) => {
  let data = [
    {
      dessert: "Oreo",
      nutritionInfo: {
        calories: 40,
        fat: 3,
        carb: 450,
        protein: 4,
      },
    },
  ];

  let dataKeys = ["calories", "fat", "carb", "protein"];

  return (
    <table class="f6 w-100 mw8 center" cellspacing="0">
      {/* Remove into component */}
      <thead>
        <tr>
          <td class="pv3 pr3 bb b--black-20">
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
          </td>
          <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">dessert</th>

          {dataKeys.map((item) => (
            <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">{item}</th>
          ))}
        </tr>
      </thead>
      {/*  remove into a component*/}

      <tbody class="lh-copy">
        {data.map((item) => (
          <TableEntry data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
