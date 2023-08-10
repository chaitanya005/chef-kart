import styled from "@emotion/styled";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const Header = () => {
  const StyledGrid = styled(Grid)({
    position: "absolute",
    zIndex: 1,
    top: 30,
    width: "100%",
    padding: "5px 15px",
  });

  return (
    <Grid>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <StyledGrid
            left={{ xs: "50%" }}
            sx={{
              transform: {
                xs: "translate(-50%, 0)",
              },
            }}
          >
            <Grid
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                border: "0.5px solid #ddd",
                width: { xs: "100%", sm: "fit-content" },
              }}
            >
              <Grid container sx={{ padding: { sm: "10px", xs: "15px 12px" } }}>
                <Grid
                  xs={5}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  fontSize={{ xs: "14px", lg: "14px" }}
                >
                  <img src="/select_date.png" alt="calendar" />
                  <Typography variant="p" fontWeight={"bold"}>
                    21 May 2023
                  </Typography>
                </Grid>
                <Grid
                  xs={7}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  fontSize={{ xs: "14px", lg: "14px" }}
                >
                  <Divider orientation="vertical" />
                  <img src="/set_time.png" alt="calendar" />
                  <Typography variant="p" fontWeight={"bold"}>
                    10:30 Pm - 12:30 Pm
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </StyledGrid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
