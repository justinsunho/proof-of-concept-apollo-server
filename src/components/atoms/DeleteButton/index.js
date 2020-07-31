import React from "react";
import { gql, useMutation } from "@apollo/client";

const DELETE_ITEM = gql`
  mutation DeleteDessert($title: String) {
    deleteDessert(title: $title) {
      title
      nutritionInfo {
        calories
        carb
        fat
        protein
      }
    }
  }
`;

const DeleteButton = ({ selectedItems }) => {
  const [deleteItem, { data }] = useMutation(DELETE_ITEM);

  const handleClick = () => {
    selectedItems.forEach((title) => {
      deleteItem({ variables: { title: title } });
    });
    window.location.reload(false);
  };

  return <button onClick={handleClick}>Delete Selected Items</button>;
};

export default DeleteButton;
