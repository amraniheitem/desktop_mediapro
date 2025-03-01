import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./sidebar.css"; 

const menuItems = [
  { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
  { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
  { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
  { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
  { text: "Offres et promos", icon: <FaTags />, link: "#" },
  { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
  { text: "Notifications", icon: <FaBell />, link: "#" },
];

const Sidebar = ({ active, setActive }) => {
  return (
    <Box className="sidebar">
      <Typography variant="h5" align="center" sx={{ color: "#fff", mb: 2 }}>
        Logo
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component="a"
              href={item.link}
              onClick={() => setActive(item.text)}
              sx={{
                backgroundColor: active === item.text ? "#ffffff" : "transparent",
                borderRadius: active === item.text ? "50px 0px 0px 50px" : "0px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
                <ListItemIcon sx={{ color: active === item.text ? "#80D1FF" : "#fff", minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: active === item.text ? "#80D1FF" : "#fff",
                  }}
                />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        className="logout"
        href="./index.html"
        fullWidth
        startIcon={<FaSignOutAlt />}
        sx={{
          mt: 5,
          borderRadius: "50px",
          backgroundColor: "#fff",
          color: "#80D1FF",
          "&:hover": { backgroundColor: "#D4A9FF", color: "#fff" },
          width: "80%",
          marginLeft: "10%",
        }}
      >
        Se déconnecter
      </Button>
    </Box>
  );
};

export default Sidebar;
