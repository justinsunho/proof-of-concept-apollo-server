import React, { useState } from "react";

const TableHeader = ({ data, setAllToggle }) => {
  const [checked, setChecked] = useState(0);

  const handleChange = () => {
    let newChecked = !checked;
    setChecked(newChecked);
    setAllToggle(newChecked);
  };

  return (
    <thead>
      <tr>
        <td className="pv3 pr3 bb b--black-20">
          <input
            checked={checked}
            onChange={handleChange}
            className="mr2"
            type="checkbox"
            id=""
            value={checked}
          />
        </td>
        {data.map(({ name }) => (
          <td className="pv3 pr3 bb b--black-20" key={name}>
            {name}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
