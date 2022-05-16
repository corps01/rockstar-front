import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";

const drawerWidth = 200;

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const styles = {
    Link: {
      textDecoration: "none",
      color: "inherit",
    },
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        paddingTop: "1rem",
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <Link to="/" style={styles.Link}>
            <ListItemButton sx={{ pt: 4 }}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Your Library" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/library" style={styles.Link}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <QueueMusicRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Playlists" />
                </ListItemButton>
              </Link>
              <Link to="/library" style={styles.Link}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AlbumIcon />
                  </ListItemIcon>
                  <ListItemText primary="Albums" />
                </ListItemButton>
              </Link>
              <Link to="/library" style={styles.Link}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Songs" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
}
