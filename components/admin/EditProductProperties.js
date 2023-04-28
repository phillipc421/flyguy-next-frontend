import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { def } from "../../pages/admin/create-product";

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export default function EditProductProperties({
  product,
  newValues,
  newValuesSetter,
}) {
  const changeHandler = ({ target: { name, value } }) => {
    let numProp;
    if (name === "price" || name === "stock") {
      numProp = parseInt(value);
    }
    newValuesSetter((prev) => ({ ...prev, [name]: numProp || value }));
  };
  return (
    <Stack spacing={2} sx={{ padding: "1rem" }}>
      {Object.keys(product)
        .filter((prop) => prop in def)
        .map((prop) => (
          <TextField
            key={prop}
            name={prop}
            multiline={prop === "longDescription"}
            label={capitalize(prop)}
            value={newValues[prop]}
            onChange={(e) => changeHandler(e)}
          ></TextField>
        ))}
    </Stack>
  );
}
