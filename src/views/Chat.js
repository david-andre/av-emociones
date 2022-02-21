import ChatBot from "react-simple-chatbot";
import logo from "../assets/logocircle.png";
import user from "../assets/user.png";

import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SentimentDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentDissatisfiedTwoTone";

const theme = {
  background: "#DDECFE",
  headerBgColor: "#4081DC",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "#4081DC",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const Chat = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Diagnóstico"
        botAvatar={logo}
        userAvatar={user}
        width={"100%"}
        steps={[
          {
            id: "1",
            message: "Hola, soy tu asistente para evaluar tu estado emocional",
            trigger: "intro",
          },
          {
            id: "intro",
            message:
              "Ahora te realizaré una serie de preguntas, ¿Deseas continuar?",
            trigger: "accept",
          },
          {
            id: "accept",
            options: [
              { value: true, label: "SI", trigger: "2" },
              { value: false, label: "SALIR", trigger: "exit" },
            ],
          },
          { id: "exit", component: <Navigate to="/home" /> },

          {
            id: "2",
            message: "Pregunta 1",
            trigger: "3",
          },
          {
            id: "3",
            options: [
              { value: true, label: "SI", trigger: "4" },
              { value: false, label: "NO", trigger: "4" },
            ],
          },
          {
            id: "4",
            message: "Pregunta 2",
            trigger: "5",
          },
          {
            id: "5",
            options: [
              { value: true, label: "SI", trigger: "6" },
              { value: false, label: "NO", trigger: "6" },
            ],
          },
          {
            id: "6",
            message: "A continuación, seleccione una foto o tomate una foto",
            trigger: "7",
          },
          {
            id: "7",
            options: [
              { value: true, label: "Seleccionar Foto", trigger: "8" },
              { value: false, label: "Tomar Foto", trigger: "8" },
            ],
          },
          {
            id: "8",
            message: "Muy bien, hemos llegado al final",
            trigger: "result",
          },
          {
            id: "result",
            message: "{NOMBRE}, tu estado emocional actual es: {ESTADO}",
            trigger: "state",
          },
          {
            id: "state",
            component: (
              <SentimentDissatisfiedTwoToneIcon sx={{ fontSize: 100 }} />
            ),
            trigger: "save",
          },
          {
            id: "save",
            message: "Deseas guardar la información",
            trigger: "confirm",
          },
          {
            id: "confirm",
            options: [
              { value: true, label: "SI", trigger: "end" },
              { value: false, label: "NO", trigger: "end" },
            ],
          },
          {
            id: "end",
            message: "¿Deseas volver a realizar la evaluación?",
            trigger: "repeat",
          },
          {
            id: "repeat",
            options: [
              { value: true, label: "SI", trigger: "1" },
              { value: false, label: "NO", trigger: "exit" },
            ],
          },
        ]}
      />
    </ThemeProvider>
  );
};
export default Chat;
