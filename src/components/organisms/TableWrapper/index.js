import React from "react";
import { Table } from "../../molecules";
import { AddButton, DeleteButton } from "../../atoms";

const TableWrapper = ({ entryData, titleData }) => {
  let selectedItems = [];

  const selected = (item) => {
    selectedItems.push(item);
  };

  return (
    <>
      <AddButton />
      <DeleteButton selectedItems={selectedItems} />
      <Table entryData={entryData} titleData={titleData} selected={selected} />
    </>
  );
};

export default TableWrapper;
