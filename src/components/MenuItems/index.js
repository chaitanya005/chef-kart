import React, { useState } from "react";
import { Container } from "@mui/system";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Item from "./Item";

const MenuItems = ({ dishes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{ mt: 2, p: 0, height: "calc(100vh - 300px)", overflow: "auto" }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <div>
          <Button
            variant="text"
            sx={{
              margin: "0",
              padding: "0",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Recommended
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Mid-Night Cravings</MenuItem>
            <MenuItem onClick={handleClose}>Offers</MenuItem>
          </Menu>
        </div>
        <Button variant="menu-contained">Menu</Button>
      </Grid>
      <Item dishes={dishes} />
    </Container>
  );
};

export default MenuItems;
