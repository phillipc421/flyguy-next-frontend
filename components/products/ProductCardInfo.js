import Typography from "@mui/material/Typography";
export default function ProductCardInfo({ content }) {
  return (
    <section>
      <Typography variant="body1" whiteSpace={"pre-line"}>
        {content}
      </Typography>
    </section>
  );
}
