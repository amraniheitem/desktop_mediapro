import { useState } from "react";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import "./login.css"; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule une requête API
      setMessage("Connexion réussie !");
    } catch (error) {
      setMessage("Erreur de connexion !");
    } finally {
      setLoading(false);
    }
  };

  return (
    
<Container className="login-container"  disableGutters>
    <Box className="login-box">
        <Box className="login-form" sx={{ width: "50%" }}>
          <Typography variant="h4" gutterBottom align="center">
            Se connecter
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
              sx={{
                borderRadius: "50px",
                
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                }
              }}
            
            />
            <TextField 
              label="Mot de passe"
              type="password"
              name="password"
              fullWidth
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
              sx={{
                borderRadius: "50px",
            
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                }
              }}
            
            />
            <a href="#" className="forgot-password">Oublier mot de passe ?</a>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{ 
                mt: 2, 
                borderRadius: 50, 
                background: "linear-gradient(to right, #80D1FF, #D4A9FF)" 
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Se connecter"}
            </Button>
          </form>
          {message && <Typography color="success.main" sx={{ mt: 2, textAlign: "center" }}>{message}</Typography>}
        </Box>

        <Box className="image-box">
          
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
