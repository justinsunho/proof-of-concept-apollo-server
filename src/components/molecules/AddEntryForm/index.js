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

  const validate = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <form className="measure center" onSubmit={formik.handleSubmit}>
      {titleData.map(({ name, index }) => {
        return (
          <>
            <label className="db fw6 lh-copy f6" htmlFor="">
              {name}
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              id={name}
              name={name}
              type="text"
              onChange={formik.handleChange}
              value={formik.values[name]}
              validate={validate}
            />
          </>
        );
      })}
      <button
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddEntryForm;
