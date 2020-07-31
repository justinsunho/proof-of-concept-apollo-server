import React, { useState } from "react";
import { TableEntry, TableHeader } from "../../atoms";

const Table = ({ entryData, titleData, handleSelectedItems, selected }) => {
  const [allToggle, setAllToggle] = useState(false);

  return (
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <TableHeader data={titleData} setAllToggle={setAllToggle} />
      <tbody className="lh-copy">
        {entryData.map((item) => (
          <TableEntry
            data={item}
            handleSelectedItems={handleSelectedItems}
            allToggle={allToggle}
            key={item.title}
            selected={selected}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
