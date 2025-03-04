import { useState, useEffect } from "react";
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, TextField
} from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./animateurs.css";
import CardAnimateur from "./card";

   

const menuItems = [
    { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
    { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
    { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
    { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
    { text: "Offres et promos", icon: <FaTags />, link: "#" },
    { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
    { text: "Notifications", icon: <FaBell />, link: "#" },
];

const animateursList = [
    { id: 1, name: "Amrani Heitem", wilaya: "SBA", description: "Spécialiste en animation musicale", image: "https://via.placeholder.com/150", nbreve: 30, nbrlike: 250, ranking: 3.4 },
    { id: 2, name: "Sofia Lamari", wilaya: "SBA", description: "Animatrice d'événements pour enfants", image: "https://via.placeholder.com/150", nbreve: 30, nbrlike: 250, ranking: 3.4 },
    { id: 3, name: "Karim Belkacem", wilaya: "Alger", description: "Animateur de spectacles pour adultes", image: "https://via.placeholder.com/150", nbreve: 20, nbrlike: 180, ranking: 4.2 },
    { id: 4, name: "Leila Bensalem", wilaya: "Oran", description: "Présentatrice de gala et soirées", image: "https://via.placeholder.com/150", nbreve: 15, nbrlike: 300, ranking: 4.5 },
];

const Animateurs = () => {
    const [active, setActive] = useState("Animateurs");
    const [search, setSearch] = useState("");
    const [filteredAnimateurs, setFilteredAnimateurs] = useState(animateursList);

    // Mettre à jour la liste des animateurs en fonction de la recherche
    useEffect(() => {
        const result = animateursList.filter((animateur) =>
            animateur.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredAnimateurs(result);
    }, [search]); // Exécuté à chaque changement de `search`

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
            <div className="content">
                <h2 style={{ fontWeight: "900" }}>Animateurs</h2>
                <p>On a déjà +150 animateurs dans MediaPro dans +4 types d’événements</p>

                {/* Barre de recherche */}
                <TextField
                    variant="outlined"
                    placeholder="Rechercher un animateur..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ mb: 2, maxWidth: "400px", width: "100%" }}
                />

                {/* Filtres */}
                <div className="filter-container">
                    <button className="filter-btn">Classement</button>
                    <button className="filter-btn">Wilaya</button>
                    <button className="filter-btn">Nbr des événements</button>
                </div>

                {/* Affichage des cartes animateurs */}
                <div className="cards-container">
                    {filteredAnimateurs.length > 0 ? (
                        filteredAnimateurs.map((animateur) => (
                            <CardAnimateur
                                key={animateur.id}
                                name={animateur.name}
                                description={animateur.description}
                                image={animateur.image}
                                nbreve={animateur.nbreve}
                                nbrlike={animateur.nbrlike}
                                ranking={animateur.ranking}
                                wilaya={animateur.wilaya}
                            />
                        ))
                    ) : (
                        <p>Aucun animateur trouvé</p>
                    )}
                </div>
            </div>
        </Box>
    );
};

export default Animateurs;
