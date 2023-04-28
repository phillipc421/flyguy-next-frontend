import Typography from "@mui/material/Typography";
export default function ProductCardInfo({ direction, ingredients }) {
  return (
    <div>
      <section>
        <Typography variant="h4" component="h3">
          Directions
        </Typography>
      </section>
      <section>
        <Typography variant="h4" component="h3">
          Ingredients
        </Typography>
        <Typography variant="body1">{ingredients}</Typography>
        <Typography variant="body1">*Organic Ingredient</Typography>
      </section>
    </div>
  );
}
