import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Link, useNavigate } from "react-router-dom";

import apiServices from "../services/API";

import logo from "../assets/logoia.png";

const theme = createTheme();

const Home = () => {

  const initialState = [
    {
        name: 'Resultado',
        tristeza: 7,
        enojo: 4,
        sorpresa: 2,
        alegria: 1,
    }
];

  let navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const { fetchRespuestas } = apiServices;

  const handleResponses = async() => {
    const id = localStorage.getItem('identificador');
    const response = await fetchRespuestas(id ?? 'xHsQHyyIdPTXphKGiyl2ulGon0W2');
    alert(response.respuestas.length);
    countData(response.respuestas)
    navigate('/chart', { state: { responses: data } });
  }

  const countData = (info) => {
    let alegria = 0;
    let enojo = 0;
    let sorpresa = 0;
    let tristeza = 0;
    info.forEach(e => {
        if(e.emocion === 'Alegria') {alegria++}
        if(e.emocion === 'Tristeza') {tristeza++}
        if(e.emocion === 'Enojo') {enojo++}
        if(e.emocion === 'Sorpresa') {sorpresa++}
    });
    setData([{
        name: 'Resultado',
        alegria,
        enojo,
        sorpresa,
        tristeza
    }]);
}

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Link to="/iniciar-sesion" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            className="px-5"
          >
            Salir
          </Button>
        </Link>
      </Box>

      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            BIENVENIDO AL
          </Typography>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 6,
          bgcolor: "background.paper",
          borderRadius: 1,
          alignContent: "space-between",
        }}
      >
        <Link to="/diagnostico" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" className="px-5 me-5">
            Realizar Diagnóstico
          </Button>
        </Link>
        <Button onClick={handleResponses} variant="contained" size="large" className="px-5 ms-5">
          Ver historial
        </Button>
      </Box>
    </ThemeProvider>
  );
};
export default Home;
