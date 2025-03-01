import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./dashboard.css";
import Sidebar from "../Sidebar/sidebar";  

const menuItems = [
  { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
  { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
  { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
  { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
  { text: "Offres et promos", icon: <FaTags />, link: "#" },
  { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
  { text: "Notifications", icon: <FaBell />, link: "#" },
];

const Dashboard = () => {
  const [active, setActive] = useState("Tableau de bord");

  return (
    <Box className="box">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} /> {/* Utilisation de Sidebar */}


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
