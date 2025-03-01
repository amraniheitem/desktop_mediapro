import { useState } from "react";
import {
    Box, Typography, FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import Sidebar from "../Sidebar/sidebar";
import CardCommande from "../Commande/commande-card"; // Assurez-vous que ce fichier existe
import "./commande.css";

const Commande = () => {
    const [active, setActive] = useState("Commande");
    const [selectedType, setSelectedType] = useState("");

    // Liste des commandes fictives
    const commandes = [
        { id: 1, name: "Amrani Heitem", type: "Animateur", isActive: true },
        { id: 2, name: "Sofia Lamari", type: "VoixOff", isActive: false },
        { id: 3, name: "Karim Belkacem", type: "Produit", isActive: true },
        { id: 4, name: "Leila Bensalem", type: "Course", isActive: false },
    ];

    // Filtrer les commandes selon le type sélectionné
    const commandesFiltrees = selectedType
        ? commandes.filter((commande) => commande.type === selectedType)
        : commandes;

    return (
        <Box className="box">
            {/* Sidebar */}
            <Sidebar active={active} setActive={setActive} />

            {/* Contenu principal */}
            <Box className="content">
                <div className="header">
                    <Typography
                        variant="h4"
                        align="left"
                        sx={{
                            background: "linear-gradient(to right, #D4A9FF, rgb(0, 162, 255))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "bold"
                        }}
                    >
                        {active}
                    </Typography>

                    {/* Sélecteur Type de commande */}
                    <FormControl fullWidth sx={{ width: "45%" }}>
                        <InputLabel>Type de commande</InputLabel>
                        <Select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <MenuItem value="">Tous</MenuItem>
                            <MenuItem value="Animateur">Animateur</MenuItem>
                            <MenuItem value="VoixOff">Voix-Off</MenuItem>
                            <MenuItem value="Produit">Produit</MenuItem>
                            <MenuItem value="Course">Course</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* Affichage des cartes de commande */}
                <div className="cards-container">
                    {commandesFiltrees.length > 0 ? (
                        commandesFiltrees.map((commande) => (
                            <CardCommande
                                key={commande.id}
                                name={commande.name}
                                isActive={commande.isActive}
                            />
                        ))
                    ) : (
                        <p>Aucune commande trouvée</p>
                    )}
                </div>
            </Box>
        </Box>
    );
};

export default Commande;
