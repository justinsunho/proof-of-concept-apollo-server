import React, { useState } from "react";

const TableEntry = ({ data }) => {
  const [select, useSelect] = useState(0);

  const {
    dessert,
    nutritionInfo: { calories, fat, carb, protein },
  } = data;

  return (
    <tr>
      <td class="pv3 pr3 bb b--black-20">
        <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
      </td>
      <td class="pv3 pr3 bb b--black-20">{dessert}</td>
      <td class="pv3 pr3 bb b--black-20">{calories}</td>
      <td class="pv3 pr3 bb b--black-20">{fat}</td>
      <td class="pv3 pr3 bb b--black-20">{carb}</td>
      <td class="pv3 pr3 bb b--black-20">{protein}</td>
    </tr>
  );
};

export default TableEntry;
