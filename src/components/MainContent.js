import { Container, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CuisineList from "./CuisineList";
import MenuItems from "./MenuItems";
import PopularDishes from "./PopularDishes";
import EastIcon from "@mui/icons-material/East";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const MainContentArea = () => {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((res) => {
        setDishes(res.data.dishes);
        setPopularDishes(res.data.popularDishes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <CuisineList />
      <PopularDishes popularDishes={popularDishes} />
      <Divider
        style={{ margin: "0 -15px", height: "10px", borderColor: "#ddd" }}
      />
      <MenuItems dishes={dishes} />
      <Grid
        contianer
        sx={{
          display: "flex",
          position: "fixed",
          bottom: "5%",
          left: "18%",
          padding: "10px",
          border: "1px solid #000",
          background: "#000",
          color: "#fff",
          borderRadius: "10px",
          gap: "1rem",
        }}
      >
        <FastfoodIcon />
        <Typography>2 Food Items Selected</Typography>
        <EastIcon />
      </Grid>
    </Container>
  );
};

export default MainContentArea;
