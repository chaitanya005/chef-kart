import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { cuisineTypes } from "../contants";

const CuisineList = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("Indian");

  return (
    <Grid sx={{ overflow: "auto", maxWidth: "100vw", whiteSpace: "nowrap" }}>
      {cuisineTypes.map((cuisineType) => (
        <Button
          key={cuisineType}
          variant="round-outlined"
          size="medium"
          sx={{
            mr: 1,
            borderColor: selectedCuisine === cuisineType ? "#ff8802" : "",
            color: selectedCuisine === cuisineType ? "#ff8802" : "",
            backgroundColor: selectedCuisine === cuisineType ? "#FFF9F2" : "",
          }}
          onClick={() => setSelectedCuisine(cuisineType)}
        >
          {cuisineType}
        </Button>
      ))}
    </Grid>
  );
};

export default CuisineList;
