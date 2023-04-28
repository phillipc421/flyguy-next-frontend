import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import EditProductProperties from "./EditProductProperties";
import { def } from "../../pages/admin/create-product";
export default function EditProductDialog({ product, productSetter }) {
  const properties = Object.keys(product).filter((prop) => prop in def);
  const startValues = {};
  properties.forEach((prop) => (startValues[prop] = product[prop] || ""));

  const [existingValues, setExistingValues] = useState({ ...startValues });
  const [newValues, setNewValues] = useState({ ...startValues });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(["", false]);

  const closeHandler = () => {
    productSetter(null);
  };

  const revertHandler = () => {
    setNewValues({ ...existingValues });
  };

  const submitHandler = async () => {
    setLoading(true);
    const x = compareFn(existingValues, newValues, true);
    try {
      const res = await fetch("http://localhost:3001/api/admin", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...x, id: product.id }),
      });
      const data = await res.json();
      // success
      setSnack([product.name + " updated.", true]);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const compareFn = (existingValues, newValues, submit = false) => {
    // submit returns only the difference
    if (submit) {
      const changed = {};
      for (let i = 0; i < properties.length; i++) {
        let prop = properties[i];
        if (existingValues[prop] !== newValues[prop])
          changed[prop] = newValues[prop];
      }
      return changed;
    }
    // returns true if any difference exists
    for (let i = 0; i < properties.length; i++) {
      let prop = properties[i];
      if (existingValues[prop] !== newValues[prop]) return true;
    }
    return false;
  };
  return (
    <>
      <Dialog open={!!product} onClose={closeHandler} fullWidth>
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <EditProductProperties
            product={product}
            newValues={newValues}
            newValuesSetter={setNewValues}
          ></EditProductProperties>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            disabled={!compareFn(existingValues, newValues) || loading}
            onClick={revertHandler}
          >
            Revert
          </Button>
          <Button
            variant="contained"
            disabled={!compareFn(existingValues, newValues) || loading}
            onClick={submitHandler}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snack[1]}
        message={snack[0]}
        onClose={() => setSnack(["", false])}
        autoHideDuration={5000}
      ></Snackbar>
    </>
  );
}
