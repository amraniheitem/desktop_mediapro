import { useState } from "react";
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, TextField
} from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import CardVoix from "./card";
import "./voix.css";

const menuItems = [
    { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
    { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
    { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
    { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
    { text: "Offres et promos", icon: <FaTags />, link: "#" },
    { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
    { text: "Notifications", icon: <FaBell />, link: "#" },
];

const voiceList = [
    { id: 1, name: "Ahmed Ben Salah", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "./journalism-concept-live-news-mic-with-camera-3d-renderind-background.jpg", langue: "Anglais", nbrlike: 250, ranking: 3.4 },
    { id: 1, name: "AMrani Ben Salah", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "./journalism-concept-live-news-mic-with-camera-3d-renderind-background.jpg", langue: "Anglais", nbrlike: 250, ranking: 3.4 },
    { id: 1, name: "Ahmed Ben Salah", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "./journalism-concept-live-news-mic-with-camera-3d-renderind-background.jpg", langue: "Anglais", nbrlike: 250, ranking: 3.4 },
    { id: 1, name: "Ahmed Ben Salah", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "./journalism-concept-live-news-mic-with-camera-3d-renderind-background.jpg", langue: "Anglais", nbrlike: 250, ranking: 3.4 },
    { id: 1, name: "Ahmed Ben Salah", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "./journalism-concept-live-news-mic-with-camera-3d-renderind-background.jpg", langue: "Anglais", nbrlike: 250, ranking: 3.4 },
];

const Voix = () => {
    const [active, setActive] = useState("Voix-off");
    const [search, setSearch] = useState("");

    // Filtrer les voix-off en fonction du texte entré
    const filteredVoix = voiceList.filter((voix) =>
        voix.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box className="box">
            <Box className="sidebar">
                <Typography variant="h5" align="center" sx={{ color: "#fff", mb: 2 }}>
                    Logo
                </Typography>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
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
                                        sx={{ color: active === item.text ? "blue" : "#fff", fontWeight: "600" }}
                                    />
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Button
                    className="logout"
                    href="/login"
                    fullWidth
                    startIcon={<FaSignOutAlt />}
                    sx={{
                        mt: 5,
                        borderRadius: "50px",
                        backgroundColor: "#fff",
                        color: "blue",
                        "&:hover": { backgroundColor: "blue", color: "#fff" },
                        width: "80%",
                        marginLeft: "10%",
                        fontWeight: "600"
                    }}
                >
                    Se déconnecter
                </Button>
            </Box>

            <div className="content">
                <h2 style={{ fontWeight: "900" }}>Voix-Off</h2>
                <p>On a déjà +8 Voix-off dans MediaPro dans +3 langues</p>

                <TextField
                    variant="outlined"
                    placeholder="Rechercher une voix-off..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ mb: 2, maxWidth: "400px" }}
                />

                <div className="filter-container">
                    <button className="filter-btn">Classement</button>
                    <button className="filter-btn">Wilaya</button>
                    <button className="filter-btn">Langue</button>
                </div>

                <div className="cards-container">
                    {filteredVoix.length > 0 ? (
                        filteredVoix.map((voix) => (
                            <CardVoix key={voix.id} {...voix} />
                        ))
                    ) : (
                        <p>Aucune Voix-off trouvée</p>
                    )}
                </div>
            </div>
        </Box>
    );
};

export default Voix;
