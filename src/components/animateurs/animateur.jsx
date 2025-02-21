import { useState } from "react";
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Avatar
} from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt, FaStar } from "react-icons/fa";
import SearchBar from "react-material-ui-searchbar"; // Assure-toi que cette librairie est bien installée
import "./animateurs.css";
import CardAnimateur from "./card";

// Liste des éléments du menu
const menuItems = [
    { text: "Tableau de bord", link: "/dashboard", icon: <FaTachometerAlt /> },
    { text: "Ajouter animateur", link: "/ajouter-animateur", icon: <FaUserPlus /> },
    { text: "Animateurs", link: "/animateurs", icon: <FaUsers /> },
    { text: "Offres et promos", link: "#", icon: <FaTags /> },
    { text: "Commande", link: "/commands", icon: <FaShoppingCart /> },
    { text: "Notifications", link: "#", icon: <FaBell /> }
];

// Liste des animateurs (exemple)
const animateursList = [
    {
        name: "Nom Prénom",
        wilaya: "Wilaya",
        email: "example@gmail.com",
        phone: "07-57-65-12-72",
        adresse: "Adresse",
        niveau: "Niveau",
        description: "Description",
        ranking: 3.5,
        image: "./images/young-bearded-man-with-striped-shirt.jpg"
    }
];

const Animateur = () => {
    const [active, setActive] = useState("Animateurs");
    const [search, setSearch] = useState("");

    // Filtrer les animateurs en fonction du texte entré
    const filteredAnimateurs = animateursList.filter((animateur) =>
        animateur.name.toLowerCase().includes(search.toLowerCase())
    );

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
                <SearchBar
                    value={search}
                    onChange={(newValue) => setSearch(newValue)}
                    onCancelSearch={() => setSearch("")}
                    style={{ marginBottom: "20px", maxWidth: "400px", borderRadius: "10px" }}
                />

                {filteredAnimateurs.map((animateur, index) => (
                    <Box key={index} className="profile-card">
                        <Avatar src={animateur.image} alt="Profile" className="profile-img" sx={{ width: 120, height: 120 }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{animateur.name}</Typography>
                        <Typography variant="body1" sx={{ color: "gray" }}>{animateur.wilaya}</Typography>

                        {/* Ranking */}
                        <Box className="rating" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                            <Box sx={{ background: "linear-gradient(to right, #FFA634, #edd656)", p: 1, borderRadius: "50%" }}>
                                <FaStar color="white" />
                            </Box>
                            <Typography variant="h5">{animateur.ranking}</Typography>
                        </Box>

                        {/* Description */}
                        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", maxWidth: "80%" }}>
                            {animateur.description}
                        </Typography>

                        {/* Bouton Supprimer */}
                        <Button variant="contained" color="error" sx={{ mt: 3 }}>Supprimer</Button>

                        {/* Informations */}
                        <Box className="info">
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Informations</Typography>
                            <Box className="infos">
                                <Typography variant="body1"><strong>Email:</strong> {animateur.email}</Typography>
                            </Box>
                            <Box className="infos">
                                <Typography variant="body1"><strong>Phone:</strong> {animateur.phone}</Typography>
                            </Box>
                            <Box className="infos">
                                <Typography variant="body1"><strong>Wilaya:</strong> {animateur.wilaya}</Typography>
                            </Box>
                            <Box className="infos">
                                <Typography variant="body1"><strong>Adresse:</strong> {animateur.adresse}</Typography>
                            </Box>
                            <Box className="infos">
                                <Typography variant="body1"><strong>Niveau:</strong> {animateur.niveau}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Animateur;
