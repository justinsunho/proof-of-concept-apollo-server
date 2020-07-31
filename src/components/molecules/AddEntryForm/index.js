import React from "react";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const ADD_ITEM = gql`
  mutation CreateDessert($title: String, $input: NutritionInfoInput) {
    createDessert(title: $title, input: $input) {
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

const AddEntryForm = ({ titleData }) => {
  const [addItem, { data }] = useMutation(ADD_ITEM);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const { title, calories, fat, protein, carb } = values;

      addItem({
        variables: {
          title: title,
          input: {
            calories: parseInt(calories),
            fat: parseInt(fat),
            protein: parseInt(protein),
            carb: parseInt(carb),
          },
        },
      });

      window.location.href = "/";
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {titleData.map(({ name, index }) => {
        return (
          <>
            <label htmlFor="">{name}</label>
            <input
              id={name}
              name={name}
              type="text"
              onChange={formik.handleChange}
              value={formik.values[name]}
            />
          </>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEntryForm;
