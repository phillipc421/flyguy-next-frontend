import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function ProductCardDetail({
  label,
  children,
  expanded,
  setExpanded,
}) {
  return (
    <Accordion
      expanded={expanded === label}
      onChange={(e, isExpanded) => setExpanded(isExpanded && label)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
        <Typography variant="body1" component="h3">
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
