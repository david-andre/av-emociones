import { useEffect, useState } from "react";
import apiServices from "../services/API";
import ChatBot from "react-simple-chatbot";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import WebcamCapture from "./WebcamCapture";

import logo from "../assets/logocircle.png";
import user from "../assets/user.png";

import SentimentDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentDissatisfiedTwoTone";

const preguntasTest = [
  {
    acronimo: "Intranquilo",
    num_pregunta: 2,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 8,
    pregunta: "¿Se siente molesto?",
  },
];

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
  const [diagnostico, setDiagnostico] = useState({
    nombre: "",
    respuestas: "",
    imagen: "",
  });

  const [preguntas, setPreguntas] = useState([]);

  const [respuestas, setRespuestas] = useState([]);

  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    setRespuestas(createSteps());
    /*apiServices
      .fetchPreguntas()
      .then((res) => {
        console.log(res.message);
        setPreguntas(res.preguntas);
      })
      .catch((e) => {
        console.error(e);
      });*/
  }, []);

  const Diagnostico = () => {
    useEffect(() => {
      console.log(respuestas);
    }, []);
    return <h1>hola</h1>;
  };

  const createSteps = () => {
    let saludo = [
      {
        id: "saludo",
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
          { value: true, label: "SI", trigger: "1" },
          { value: false, label: "SALIR", trigger: "exit" },
        ],
      },
    ];
    let final = [
      {
        id: "foto",
        message:
          "A continuación, seleccione una foto o tomate una foto en la parte inferior",
        trigger: "getData",
      },
      {
        id: "getData",
        message: "Muy bien, hemos llegado al final",
        trigger: "result",
      },
      {
        id: "result",
        component: <Diagnostico />,
        waitAction: true,
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
      { id: "exit", component: <Navigate to="/home" /> },
      {
        id: "repeat",
        options: [
          { value: true, label: "SI", trigger: "1" },
          { value: false, label: "NO", trigger: "exit" },
        ],
      },
    ];

    //? -------- Tests --------
    let aux = [];
    let cont = 1;
    preguntasTest.forEach((item, index) => {
      if (index === preguntasTest.length - 1) {
        aux.push({ id: cont, message: item.pregunta, trigger: cont + 1 });
        cont++;
        aux.push({
          id: cont,
          component: (
            <div>
              {" "}
              <button
                className="btn btn-primary me-2"
                onClick={() => setRespuestas(["SI", ...respuestas])}
              >
                Si
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setRespuestas(["NO", ...respuestas])}
              >
                No
              </button>
            </div>
          ),
          trigger: "foto",
        });
      } else {
        aux.push({ id: cont, message: item.pregunta, trigger: cont + 1 });
        cont++;
        aux.push({
          id: cont,
          component: (
            <div>
              {" "}
              <button
                className="btn btn-primary me-2"
                onClick={() => setRespuestas(["SI", ...respuestas])}
              >
                Si
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setRespuestas(["NO", ...respuestas])}
              >
                No
              </button>
            </div>
          ),
          trigger: cont + 1,
        });
        cont++;
      }
    });

    //return saludo.concat(preguntas, final));
    return saludo.concat(aux, final);
  };

  return (
    <ThemeProvider theme={theme}>
      <WebcamCapture
        show={dialog}
        closeDialog={() => setDialog(false)}
      ></WebcamCapture>
      <ChatBot
        headerTitle="Diagnóstico"
        botAvatar={logo}
        userAvatar={user}
        width={"100%"}
        steps={createSteps()}
      />
      <button className="btn btn-success mt-3" onClick={() => setDialog(true)}>
        Tomar foto
      </button>
      <div class="input-group mt-3">
        <label class="input-group-text">Sleccionar Foto</label>
        <input type="file" class="form-control" />
      </div>
    </ThemeProvider>
  );
};
export default Chat;
