import * as React from "react";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

import logo from "../assets/logoia.png";
import apiServices from "../services/API";

const theme = createTheme();

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
    });
    apiServices
      .registrarse({
        email: data.get("email"),
        contrasena: data.get("password"),
        nombreCompleto: data.get("name"),
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            ASISTENTE VIRTUAL PARA EVALUAR EMOCIONES
          </Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <img src={logo} alt="Logo IA" style={{ height: "250px" }}></img>
      </Grid>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nombre y Apellido"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Correo Electrónico"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
            />

            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/iniciar-sesion" variant="body1">
                {"¿Ya tienes cuenta? Iniciar Sesión"}
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              REGISTRARSE
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
