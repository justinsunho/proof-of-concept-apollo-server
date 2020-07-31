import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/add-entry">
      <button type="button">Add Entry</button>
    </Link>
  );
};

export default AddButton;
