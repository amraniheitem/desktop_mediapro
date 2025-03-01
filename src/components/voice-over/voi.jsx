import { useState } from "react";
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Avatar
} from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt, FaStar } from "react-icons/fa";
import SearchBar from "react-material-ui-searchbar"; // Assure-toi que cette librairie est bien installée
import "./voi.css";


function Voi() {
    const [active, setActive] = useState(""); // Définition de l'état pour la sélection du menu
    const [filteredvoix, setFilteredvoix] = useState([ // Exemple de données
        {
            image: "https://via.placeholder.com/120",
            name: "John Doe",
            wilaya: "Alger",
            ranking: 4.5,
            description: "Animateur expérimenté",
            email: "john@example.com",
            phone: "0123456789",
            adresse: "Alger Centre",
            niveau: "Expert",
            link: "www.youtube.com/link"
        }
    ]);

    // Liste des éléments du menu
    const menuItems = [
        { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
        { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
        { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
        { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
        { text: "Offres et promos", icon: <FaTags />, link: "#" },
        { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
        { text: "Notifications", icon: <FaBell />, link: "#" },
    ];

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

            {/* Contenu principal */}
            <Box className="content">
                {filteredvoix.map((voix, index) => (
                    <><Box key={index} className="profile-card">
                        {/* Avatar */}
                        <Avatar src={voix.image} alt="Profile" className="profile-img" sx={{ width: 120, height: 120 }} />

                        {/* Nom et Wilaya */}
                        <div className="text-data">
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>{voix.name}</Typography>
                            <Typography variant="body1" sx={{ color: "gray" }}>{voix.wilaya}</Typography>
                        </div>

                        {/* Étoiles de notation */}
                        <Box className="rating" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                            <Box sx={{ background: "linear-gradient(to right, #FFA634, #edd656)", p: 1, borderRadius: "50%" }}>
                                <FaStar color="white" />
                            </Box>
                            <Typography variant="h5">{voix.ranking}</Typography>
                        </Box>

                        {/* Description */}
                        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", maxWidth: "80%" }}>
                            {voix.description}
                        </Typography>

                        {/* Boutons Modifier/Supprimer */}
                        <div className="update-delete">
                            <Button variant="contained" className="update">Modifier</Button>
                            <Button variant="contained" className="delete">Supprimer</Button>
                        </div>


                    </Box>

                        <Box className="info">
                            <Typography variant="h4" className="informations">Informations</Typography>

                            <Box className="infos-container">
                                <Typography variant="body1"><strong>Email:</strong></Typography>
                                <Typography variant="body1">{voix.email}</Typography>
                            </Box>

                            <Box className="infos-container">
                                <Typography variant="body1"><strong>Phone:</strong></Typography>
                                <Typography variant="body1">{voix.phone}</Typography>
                            </Box>

                            <Box className="infos-container">
                                <Typography variant="body1"><strong>Wilaya:</strong></Typography>
                                <Typography variant="body1">{voix.wilaya}</Typography>
                            </Box>

                            <Box className="infos-container">
                                <Typography variant="body1"><strong>Adresse:</strong></Typography>
                                <Typography variant="body1">{voix.adresse}</Typography>
                            </Box>
                            <Box className="infos-container">
                                <Typography variant="body1"><strong>Lien de la video:</strong></Typography>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    La vidéo présentative 
                                </a>
                            </Box>
                        </Box></>

                ))}
            </Box>
        </Box>
    );
}

export default Voi;
