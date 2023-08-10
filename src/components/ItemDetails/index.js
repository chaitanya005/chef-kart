import { Container, Divider, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ItemDetais = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${
          location.state?.itemId || 1
        }`
      )
      .then((res) => setItemDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Grid mt={3}>
        <ArrowBackIosIcon fontSize="small" onClick={() => navigate("/")} />
      </Grid>
      <Grid container mt={2}>
        <Grid xs={9}>
          <Grid container gap={1} alignItems={"baseline"}>
            <Typography variant="h5" fontWeight={"bold"}>
              {itemDetails?.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "#51C452",
                color: "#fff",
                padding: "0 8px",
                borderRadius: "5px",
                height: "fit-content",
                fontSize: "10px",
              }}
              display="flex"
              gap={0.1}
              alignItems={"center"}
            >
              <span>{4.2}</span>
              <StarIcon fontSize="8px" />
            </Typography>
          </Grid>
          <Typography
            mt={1}
            variant="body2"
            color="#A3A3A3"
            sx={{ textWrap: "balance", zIndex: 1, fontSize: "10px" }}
          >
            Mughlai Masala is a style of cookery developed in the Indian
            Subcontinent by the imperial kitchens of the Mughal Empire.
          </Typography>
          <Grid container mt={3} gap={1}>
            <AccessTimeIcon fontSize={"small"} />
            <Typography fontSize={"14px"}>
              {itemDetails?.timeToPrepare}
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={3} sx={{ position: "relative" }}>
          <img
            src="/bg_semi.png"
            alt="bg_img"
            style={{ position: "absolute", right: "-15px" }}
          />
        </Grid>
      </Grid>
      <Divider
        style={{
          margin: "30px 0 0 -15px",
          borderColor: "#F2F2F2",
          borderWidth: "2px",
        }}
      />
      <Ingredients itemDetails={itemDetails} />
    </Container>
  );
};

export default ItemDetais;
