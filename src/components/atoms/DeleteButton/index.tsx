import React from "react";
import { gql, useMutation } from "@apollo/client";

export interface Props {
  selectedItems: string[];
}

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

const DeleteButton = ({ selectedItems }: Props) => {
  const [deleteItem] = useMutation(DELETE_ITEM);

  const handleClick = () => {
    selectedItems.forEach((title) => {
      deleteItem({ variables: { title: title } });
    });
    window.location.reload(false);
  };

  return (
    <button
      className="f6 link dim ba ph3 pv2 mb2 dib dark-pink"
      onClick={handleClick}
      disabled={selectedItems.length < 1}
    >
      Delete Selected Items
    </button>
  );
};

export default DeleteButton;
