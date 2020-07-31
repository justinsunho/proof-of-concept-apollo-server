import React, { useState, useEffect, useRef } from "react";

const TableEntry = ({ data, allToggle, setSelectedItemsGetter }) => {
  const [checked, setChecked] = useState(false);
  const [prevAllToggle, setPreviousAllTogle] = useState(allToggle);

  if (allToggle !== prevAllToggle) {
    setChecked(allToggle);
    setPreviousAllTogle(allToggle);
  }

  const handleChange = () => {
    setChecked(!checked);
  };

  const {
    title,
    nutritionInfo: { calories, fat, carb, protein },
  } = data;

  useEffect(() => {
    setSelectedItemsGetter(title, checked);
  }, [checked]);

  return (
    <tr>
      <td className="pv3 pr3 bb b--black-20">
        <input
          onChange={handleChange}
          className="input-select mr2"
          checked={checked}
          type="checkbox"
          id={title}
          value={title}
        />
      </td>
      <td className="pv3 pr3 bb b--black-20">{title}</td>
      <td className="pv3 pr3 bb b--black-20">{calories}</td>
      <td className="pv3 pr3 bb b--black-20">{fat}</td>
      <td className="pv3 pr3 bb b--black-20">{carb}</td>
      <td className="pv3 pr3 bb b--black-20">{protein}</td>
    </tr>
  );
};

export default TableEntry;
