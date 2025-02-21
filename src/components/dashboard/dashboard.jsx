import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./dashboard.css"; 

const menuItems = [
  { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "#" },
  { text: "Ajouter animateur", icon: <FaUserPlus />, link: "./ajouter-animateur.html" },
  { text: "Animateurs", icon: <FaUsers />, link: "./animateurs.html" },
  { text: "Offres et promos", icon: <FaTags />, link: "#" },
  { text: "Commande", icon: <FaShoppingCart />, link: "./commands.html" },
  { text: "Notifications", icon: <FaBell />, link: "#" },
];

const Dashboard = () => {
  const [active, setActive] = useState("Tableau de bord");

  return (
    <Box className="box">
      {/* Sidebar */}
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
    backgroundColor: item.text === "Tableau de bord" ? "#ffffff" : "transparent",
    borderRadius: item.text === "Tableau de bord" ? "50px 0px 0px 50px" : "0px",
  }}
>
  <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>  
    <ListItemIcon sx={{ color: active === item.text ? "#80D1FF" : "#fff", minWidth: "40px" }}>
      {item.icon}
    </ListItemIcon>
    <ListItemText className="textitem"
  primary={item.text} 
  sx={{ 
    color: item.text === "Tableau de bord" ? "#80D1FF" : (active === item.text ? "#FFA634" : "#fff"),
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
            color: "#FFA634",
            "&:hover": { backgroundColor: "#FFA634", color: "#fff" },
            width : "80%",
            marginLeft : "10%"
          }}
        >
          Se déconnecter
        </Button>
      </Box>

      {/* Main Content */}
      <Box className="content">
        <Typography variant="h4" align="center">
          {active}
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
