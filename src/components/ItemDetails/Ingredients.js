import {
  AccordionDetails,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    margin: 0,
    padding: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "5px 0",
    fontSize: "12px",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropDownIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  justifyContent: "flex-start",
  padding: "0 !important",
  margin: "0 !important",
  "& .css-1betqn-MuiAccordionSummary-content": {
    margin: "0 !important",
    flexGrow: "unset",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const Ingredients = ({ itemDetails }) => {
  return (
    <Grid mt={3}>
      <Typography variant="h6" fontWeight={"bold"}>
        Ingredients
      </Typography>
      <Typography variant="caption" color={"#8A8A8A"}>
        For 2 people
      </Typography>
      <Divider sx={{ m: "10px 0", borderColor: "#F2F2F2" }} />
      <Accordion expanded={true}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography fontWeight={"bold"}>
            Vegetables ({itemDetails?.ingredients?.vegetables?.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0" }}>
          <TableContainer component={Grid}>
            <Table aria-label="simple table">
              <TableBody>
                {itemDetails?.ingredients?.vegetables.map((veggie) => (
                  <TableRow key={veggie?.name}>
                    <StyledTableCell component="th" scope="row">
                      {veggie.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {veggie.quantity}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography fontWeight={"bold"}>
            Spices ({itemDetails?.ingredients?.spices?.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0" }}>
          <TableContainer component={Grid}>
            <Table aria-label="simple table">
              <TableBody>
                {itemDetails?.ingredients?.spices?.map((spice) => (
                  <TableRow key={spice?.name}>
                    <StyledTableCell component="th" scope="row">
                      {spice?.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {spice?.quantity}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Grid mt={2} mb={3}>
        <Typography variant="h6">Appliances</Typography>
        <Grid container gap={1}>
          {itemDetails?.ingredients?.appliances.map((appliance) => (
            <Grid mt={1} key={appliance.name}>
              <Grid
                container
                flexDirection={"column"}
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "10px",
                  alignItems: "center",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
              >
                <img src="/refrigerator.png" width={"25px"} />
                <Typography variant="caption" fontSize="8px">
                  {appliance?.name}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ingredients;
