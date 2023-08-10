import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const PopularDishes = ({ popularDishes }) => {
  return (
    <Container sx={{ p: 0 }}>
      <Typography variant="h7" fontWeight={"bold"}>
        Popular Dishes
      </Typography>
      <Grid
        container
        flexWrap={"inherit"}
        mt={2}
        gap={1}
        sx={{ overflow: "auto", maxWidth: "100vw" }}
      >
        {popularDishes?.map((item) => (
          <div style={{ position: "relative" }} key={item?.id}>
            <img
              src={item?.image}
              alt="popular-dish"
              width={"80px"}
              height={"80px"}
              style={{
                borderRadius: "50%",
                filter: "brightness(70%)",
                border: "1px solid #FF941A",
                padding: "2px",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.6rem",
                position: "absolute",
                top: "35px",
                left: "20px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {item?.name}
            </Typography>
          </div>
        ))}
        {popularDishes?.map((item) => (
          <div style={{ position: "relative" }} key={item?.id}>
            <img
              src={item?.image}
              alt="popular-dish"
              width={"80px"}
              height={"80px"}
              style={{
                borderRadius: "50%",
                filter: "brightness(70%)",
                border: "1px solid #FF941A",
                padding: "2px",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.6rem",
                position: "absolute",
                top: "35px",
                left: "20px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {item?.name}
            </Typography>
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularDishes;
