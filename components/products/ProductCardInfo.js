import Typography from "@mui/material/Typography";
export default function ProductCardInfo({ longDesc, ingredients }) {
  return (
    <div>
      <section>
        <Typography variant="h4" component="h3">
          Directions
        </Typography>
        <Typography variant="body1" whiteSpace={"pre-line"}>
          {longDesc}
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
