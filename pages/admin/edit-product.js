import { useState } from "react";
import useProducts from "../../custom-hooks/useProducts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Snackbar from "@mui/material/Snackbar";
import EditProductDialog from "../../components/admin/EditProductDialog";
export default function EditProduct() {
  const [currentProduct, setCurrentProduct] = useState(null);

  const products = useProducts(currentProduct);
  return (
    <Container>
      <Box>
        <Stack spacing={2} maxWidth={"30rem"} sx={{ margin: "auto" }}>
          <Typography variant="body1" component="h1">
            Update Products
          </Typography>
          {products.map((product) => (
            <Paper key={product.id} sx={{ padding: "1rem" }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Typography variant="body1">{product.name}</Typography>
                <IconButton onClick={() => setCurrentProduct(product)}>
                  <EditIcon></EditIcon>
                </IconButton>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>
      {currentProduct && (
        <EditProductDialog
          product={currentProduct}
          productSetter={setCurrentProduct}
        ></EditProductDialog>
      )}
    </Container>
  );
}

{
  /* <div>
<Typography variant="body1">{product.name}</Typography>
</div>
<div>
<Typography variant="body1">{product.description}</Typography>
</div>
<div>
<Typography variant="body1">{product.image}</Typography>
</div>
<div>
<Typography variant="body1">{product.price}</Typography>
</div>
<div>
<Typography variant="body1">{product.stock}</Typography>
</div> */
}
