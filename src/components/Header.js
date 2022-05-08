import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link } from "react-router-dom";

const Header = () => {
  const styles = {
    p: {
      fontSize: "1rem",
      paddingRight: ".5rem"
    },
    Link: {
      textDecoration: 'none',
      color: 'white'
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end" }} spacing={3}>
        <Link to='/' style = {styles.Link}>
          <IconButton color="inherit">
            <LibraryMusicIcon />
            <p style={styles.p}>Home</p>
          </IconButton>
          </Link>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
