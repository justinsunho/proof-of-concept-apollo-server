import React, { useState } from "react";
import { Table } from "../../molecules";
import { AddButton, DeleteButton } from "../../atoms";

const TableWrapper = ({ entryData, titleData }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const setSelectedItemsGetter = (title, change) => {
    if (change === true) {
      setSelectedItems((selectedItems) => [...selectedItems, title]);
    } else {
      setSelectedItems(selectedItems.filter((value) => value !== title));
    }
  };

  return (
    <>
      <div>{selectedItems.length} selected`</div>
      <AddButton />
      <DeleteButton selectedItems={selectedItems} />
      <Table
        entryData={entryData}
        titleData={titleData}
        setSelectedItemsGetter={setSelectedItemsGetter}
      />
    </>
  );
};

export default TableWrapper;
