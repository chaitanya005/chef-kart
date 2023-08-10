import React, { useEffect, useState } from "react";
import { Image } from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const Item = ({ dishes }) => {
  const navigate = useNavigate();

  return (
    <Container sx={{ p: 0 }}>
      {dishes.map((item) => (
        <React.Fragment key={item.id}>
          <Grid container flexDirection={"row"} mt={3}>
            <Grid
              xs={8}
              container
              gap={1.5}
              alignItems={"center"}
              height={"fit-content"}
            >
              <Typography variant="body1">{item?.name}</Typography>
              <img
                src={"/veg_icon.svg"}
                alt="dish_icon"
                style={{ height: "13px" }}
              />
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "#51C452",
                  color: "#fff",
                  padding: "0 8px",
                  borderRadius: "5px",
                }}
                display="flex"
                gap={0.1}
                alignItems={"center"}
              >
                <span>{item?.rating}</span>
                <StarIcon fontSize="8px" />
              </Typography>
              <Grid container flexDirection={"column"} color={"#707070"}>
                <Grid container gap={2}>
                  {item?.equipments?.map((equipment) => (
                    <Grid
                      xs={2}
                      container
                      flexDirection={"column"}
                      key={equipment}
                    >
                      <KitchenIcon
                        sx={{ margin: "0 10px" }}
                        fontSize={"10px"}
                      />
                      <Typography variant="caption" fontSize={"8px"}>
                        {equipment}
                      </Typography>
                    </Grid>
                  ))}
                  <Grid>
                    <Divider orientation="vertical" sx={{ height: "30px" }} />
                  </Grid>
                  <Grid xs={2} container flexDirection={"column"}>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: "10px", fontWeight: "bold" }}
                    >
                      Ingredients
                    </Typography>
                    <Link href="#" underline="none" sx={{ fontSize: "10px" }}>
                      View list <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />
                    </Link>
                  </Grid>
                </Grid>
                <Typography fontSize={"10px"}>{item?.description}</Typography>
              </Grid>
            </Grid>
            <Grid xs={4} position={"relative"}>
              <img
                src={item?.image}
                alt="food-item"
                style={{
                  width: "120px",
                  height: "90px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                onClick={() =>
                  navigate("/item-detail", {
                    state: {
                      itemId: item?.id,
                    },
                  })
                }
              />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  color: "#ff8802",
                  position: "absolute",
                  fontSize: "8px",
                  top: "75px",
                  right: "25%",
                  padding: "5px",
                }}
              >
                Add Item
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ margin: "8% 0" }} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Item;
