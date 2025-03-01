import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Avatar } from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./détaille.css";
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

const Detaille = () => {
    const [active, setActive] = useState("Commande");

    // Données simulées (peuvent être récupérées depuis un backend)
    const formData = {
        photo: "./profile.jpg", // Remplace avec l'URL réelle de l'image
        nom: "Doe",
        prenom: "John",
        email: "john.doe@example.com",
        telephone: "+213 6XX XX XX XX",
        sex: "Homme",
        niveau: "Licence",
        wilaya: "Alger",
        adresse: "123, Rue des Lumières, Alger",
        num_carte: "1234567890",
        type_evenement: "Sport",
    };

    return (
        <Box className="box">

            <Sidebar active={active} setActive={setActive} />


            {/* Contenu principal */}
            <Box className="content">
                <Typography variant="h4" align="left" gutterBottom >
                    Détaille de la commande
                </Typography>

                <Box display="flex" gap={2}>
                    {/* Avatar + Bouton Modifier */}
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2} className="commande" >
                        <Avatar src={formData.photo} sx={{ width: 170, height: 170 }} />

                    </Box>

                    <Box className="infoo" display="flex" flexDirection="column" gap={2} width="100%" sx={{ gap: "20px" }}>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Nom :</strong> {formData.nom}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Prénom :</strong> {formData.prenom}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Email :</strong> {formData.email} <Button>Contactez</Button> </Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Téléphone :</strong> {formData.telephone}                         <Button>Appelez</Button>
                        </Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Sexe :</strong> {formData.sex}  </Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Niveau :</strong> {formData.niveau}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Wilaya :</strong> {formData.wilaya}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Adresse :</strong> {formData.adresse}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Numéro de carte :</strong> {formData.num_carte}</Typography>
                        <Typography className="det" sx={{ fontSize: "30px" }}><strong>Type d'événement :</strong> {formData.type_evenement}</Typography>

                        <Box className="confirmer">
                            <Button variant="contained" sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "darkgreen" } }}>
                                Confirmer
                            </Button>
                            <Button variant="contained" sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "darkred" } }}>
                                Refuser
                            </Button>
                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Detaille;
