import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export const def = {
  name: "",
  description: "",
  price: "",
  image: "",
  stock: "",
};

export default function CreateProduct() {
  const [info, setInfo] = useState({ ...def });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(["", false]);

  const changeHandler = ({ target: { name, value } }) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const clearHandler = () => {
    setInfo({ ...def });
  };

  const submitHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const data = await res.json();
      // success

      console.log("Response:", data);
      setSnack([info.name + " created.", true]);
      clearHandler();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <Container>
      <Box>
        <Stack spacing={2} maxWidth={"30rem"} sx={{ margin: "auto" }}>
          <Typography variant="body1" component="h1">
            Create New Product
          </Typography>
          {loading ? (
            <Skeleton variant="rectangular" height={50}></Skeleton>
          ) : (
            <TextField
              required
              label="Name"
              name="name"
              value={info.name}
              onChange={(e) => changeHandler(e)}
            ></TextField>
          )}
          {loading ? (
            <Skeleton variant="rectangular" height={50}></Skeleton>
          ) : (
            <TextField
              required
              label="Description"
              name="description"
              value={info.description}
              onChange={(e) => changeHandler(e)}
            ></TextField>
          )}
          <Stack direction={"row"} spacing={2}>
            {loading ? (
              <Skeleton
                variant="rectangular"
                width={"50%"}
                height={50}
              ></Skeleton>
            ) : (
              <TextField
                required
                label="Price"
                name="price"
                value={info.price}
                onChange={(e) => changeHandler(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              ></TextField>
            )}
            {loading ? (
              <Skeleton
                variant="rectangular"
                width={"50%"}
                height={50}
              ></Skeleton>
            ) : (
              <TextField
                required
                label="Stock"
                name="stock"
                value={info.stock}
                onChange={(e) => changeHandler(e)}
              ></TextField>
            )}
          </Stack>

          {loading ? (
            <Skeleton variant="rectangular" height={50}></Skeleton>
          ) : (
            <TextField
              required
              label="Image"
              name="image"
              value={info.image}
              onChange={(e) => changeHandler(e)}
            ></TextField>
          )}
          <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
            <Button variant="outlined" onClick={clearHandler}>
              Clear
            </Button>
            <Button variant="contained" onClick={submitHandler}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Snackbar
        open={snack[1]}
        message={snack[0]}
        onClose={() => setSnack(["", false])}
        autoHideDuration={5000}
      ></Snackbar>
    </Container>
  );
}
