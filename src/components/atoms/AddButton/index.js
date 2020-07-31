import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/add-entry">
      <button
        className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green"
        type="button"
      >
        Add Entry
      </button>
    </Link>
  );
};

export default AddButton;
