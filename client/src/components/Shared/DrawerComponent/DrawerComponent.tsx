import React, { useContext } from "react";
import "./DrawerComponent.css";
import { useNavigate } from "react-router-dom";
import { Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "../../../contexts/authContext";

const DrawerComponent = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const drawerWidth = 240;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img src="/cph_logo.PNG" alt="" />
      <Divider />
      <List>
        <ListItem key={"search"} disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>{<SearchIcon />}</ListItemIcon>
            <ListItemText primary={"Search"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"history"} disablePadding>
          <ListItemButton onClick={() => navigate("/history")}>
            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
            <ListItemText primary={"History"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"logout"} disablePadding id="sign-out-button">
          <ListItemButton onClick={() => handleLogout()}>
            <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
            <ListItemText primary={"Sign out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
