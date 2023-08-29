import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet quasi officia? Cum perferendis libero numquam neque
            aspernatur. Soluta asperiores itaque officia corrupti quas rerum
            nemo eaque dolor qui in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet quasi officia? Cum perferendis libero numquam neque
            aspernatur. Soluta asperiores itaque officia corrupti quas rerum
            nemo eaque dolor qui in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet quasi officia? Cum perferendis libero numquam neque
            aspernatur. Soluta asperiores itaque officia corrupti quas rerum
            nemo eaque dolor qui in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet quasi officia? Cum perferendis libero numquam neque
            aspernatur. Soluta asperiores itaque officia corrupti quas rerum
            nemo eaque dolor qui in.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eveniet quasi officia? Cum perferendis libero numquam neque
            aspernatur. Soluta asperiores itaque officia corrupti quas rerum
            nemo eaque dolor qui in.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
