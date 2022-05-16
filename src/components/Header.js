import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = () => {
  const styles = {
    p: {
      fontSize: ".8rem",
      paddingRight: ".7rem",
      marginLeft: ".6rem"
    },
    Link: {
      textDecoration: 'none',
      color: 'white'
    }
  };


  return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }} spacing={3}>
        <Box>
          <Typography>⚡ Rockstar Player</Typography>
        </Box>
        <Box>
        <Link to='/cart' style = {styles.Link}>
          <IconButton color="inherit">
            <ShoppingCartIcon />
            <p style={styles.p}>Cart</p>
          </IconButton>
          </Link>
          <Link to='/login' style = {styles.Link}>
          <IconButton color="inherit">
            <AccountCircleIcon />
            <p style={styles.p}>Login</p>
          </IconButton>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
