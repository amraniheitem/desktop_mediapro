import { useState } from "react";
import {
    Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, TextField, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, FormLabel
} from "@mui/material";
import { FaTachometerAlt, FaUserPlus, FaUsers, FaTags, FaShoppingCart, FaBell, FaSignOutAlt } from "react-icons/fa";
import "./ajoutez-animateur.css";

const menuItems = [
    { text: "Tableau de bord", icon: <FaTachometerAlt />, link: "/dashboard" },
    { text: "Ajouter animateur", icon: <FaUserPlus />, link: "#" },
    { text: "Animateurs", icon: <FaUsers />, link: "/animateurs" },
    { text: "Voix-off", icon: <FaUsers />, link: "/voix-off" },
    { text: "Offres et promos", icon: <FaTags />, link: "#" },
    { text: "Commande", icon: <FaShoppingCart />, link: "/commands" },
    { text: "Notifications", icon: <FaBell />, link: "#" },
];

const Ajoutez = () => {
    const [active, setActive] = useState("Ajouter animateur");
    const [formData, setFormData] = useState({
        photo: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sex: "",
        niveau: "",
        wilaya: "",
        adresse: "",
        num_carte: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données soumises :", formData);
    };

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
                                component="a"
                                href={item.link}
                                onClick={() => setActive(item.text)}
                                sx={{
                                    backgroundColor: item.text === "Ajouter animateur" ? "#ffffff" : "transparent",
                                    borderRadius: item.text === "Ajouter animateur" ? "50px 0px 0px 50px" : "0px",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
                                    <ListItemIcon sx={{ color: active === item.text ? "#80D1FF" : "#fff", minWidth: "40px" }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{ color: active === item.text ? "blue" : "#fff" ,fontWeight:"600"}}
                                    />
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Button
                    className="logout"
                    href="../login/login.jsx"
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
                        fontWeight:"600"
                    }}
                >
                    Se déconnecter
                </Button>
            </Box>

            <Box className="content">
                <Typography variant="h4" align="center" gutterBottom>
                    Ajouter un nouveau animateur
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box display="flex" gap={10}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Button variant="outlined" component="label">
                                Upload Photo
                                <input type="file" hidden name="photo" onChange={handleFileChange} />
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Ajouter
                            </Button>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2} width="100%" sx={{ gap: "20px" }}>


                            <TextField label="Nom" name="nom" value={formData.nom} onChange={handleChange} required fullWidth />
                            <TextField label="Prénom" name="prenom" value={formData.prenom} onChange={handleChange} required fullWidth />
                            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
                            <TextField label="Numéro de téléphone" name="telephone" value={formData.telephone} onChange={handleChange} required fullWidth />

                            <FormControl component="fieldset" className="button-group">
                                <FormLabel component="legend">Sexe :</FormLabel>
                                <RadioGroup row name="sex" value={formData.sex} onChange={handleChange} sx={{marginBottom:"20px"}} >
                                    <FormControlLabel className="sex-label" value="Homme" control={<Radio />} label="Homme" />
                                    <FormControlLabel className="sex-label" value="Femme" control={<Radio />} label="Femme" />
                                </RadioGroup>
                            </FormControl>



                            <FormControl fullWidth>
                                <InputLabel>Niveau</InputLabel>
                                <Select name="niveau" value={formData.niveau} onChange={handleChange} required>
                                    <MenuItem value="Baccalauréat">Baccalauréat</MenuItem>
                                    <MenuItem value="Licence">Licence</MenuItem>
                                    <MenuItem value="Master">Master</MenuItem>
                                    <MenuItem value="Doctorat">Doctorat</MenuItem>
                                    <MenuItem value="Autre">Autre</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>Wilaya</InputLabel>
                                <Select name="wilaya" value={formData.wilaya} onChange={handleChange} required>
                                    <MenuItem value="">Sélectionnez une wilaya</MenuItem>
                                    {[
                                        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
                                        "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
                                        "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
                                        "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
                                        "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt",
                                        "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma",
                                        "Aïn Témouchent", "Ghardaïa", "Relizane", "El M'ghair", "El Menia", "Ouled Djellal",
                                        "Bordj Baji Mokhtar", "Béni Abbès", "Timimoun", "Touggourt", "Djanet", "In Salah",
                                        "In Guezzam"
                                    ].map((wilaya) => (
                                        <MenuItem key={wilaya} value={wilaya}>
                                            {wilaya}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>Type des événements</InputLabel>
                                <Select name="niveau" value={formData.niveau} onChange={handleChange} required>
                                    <MenuItem value="Baccalauréat">Sport</MenuItem>
                                    <MenuItem value="Licence">culture</MenuItem>
                                    <MenuItem value="Master">Rélégion</MenuItem>
                                    <MenuItem value="Autre">Autre</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Adresse" name="adresse" value={formData.adresse} onChange={handleChange} required fullWidth />
                            <TextField label="Numéro de carte" name="num_carte" value={formData.num_carte} onChange={handleChange} required fullWidth />
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Ajoutez;
