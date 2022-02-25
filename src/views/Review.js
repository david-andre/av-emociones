import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import apiServices from "../services/API";

import Swal from "sweetalert2";

import logo from "../assets/logocircle.png";
import user from "../assets/user.png";

import feliz from "../assets/feliz.png";
import triste from "../assets/triste.png";
import sorprendido from "../assets/sorprendido.png";
import enojado from "../assets/enojado.png";

const preguntasTest = [
  {
    acronimo: "Intranquilo",
    num_pregunta: 1,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 2,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 3,
    pregunta: "¿Se siente con mal humor?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 4,
    pregunta: "¿Se siente impactado?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 5,
    pregunta: "¿Se siente optimista?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 6,
    pregunta: "¿Se siente Alegre?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 7,
    pregunta: "¿Se siente irritado?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 8,
    pregunta: "¿Se siente nervioso?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 9,
    pregunta: "¿Se siente ansioso?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 10,
    pregunta: "¿Se siente enfadado?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 11,
    pregunta: "¿Se siente tenso?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 12,
    pregunta: "¿Se siente jovial?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 13,
    pregunta: "¿Se siente emocionado?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 14,
    pregunta: "¿Se siente apagado?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 15,
    pregunta: "¿Se siente decaído?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 16,
    pregunta: "¿Ha realizado muchas preguntas el día de hoy?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 17,
    pregunta: "¿Se siente desanimado?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 18,
    pregunta: "¿Se siente Melancólico?",
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

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      respuesta1: "",
      respuesta2: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
      respuesta12,
      respuesta13,
      respuesta14,
      respuesta15,
      respuesta16,
      respuesta17,
      respuesta18,
    } = steps;

    this.setState({
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
      respuesta12,
      respuesta13,
      respuesta14,
      respuesta15,
      respuesta16,
      respuesta17,
      respuesta18,
    });
  }

  render() {
    const {
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
      respuesta9,
      respuesta10,
      respuesta11,
      respuesta12,
      respuesta13,
      respuesta14,
      respuesta15,
      respuesta16,
      respuesta17,
      respuesta18,
    } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Respuesta 1</td>
              <td>{respuesta1.value}</td>
            </tr>
            <tr>
              <td>Respuesta 2</td>
              <td>{respuesta2.value}</td>
            </tr>
            <tr>
              <td>Respuesta 3</td>
              <td>{respuesta3.value}</td>
            </tr>
            <tr>
              <td>Respuesta 4</td>
              <td>{respuesta4.value}</td>
            </tr>
            <tr>
              <td>Respuesta 5</td>
              <td>{respuesta5.value}</td>
            </tr>
            <tr>
              <td>Respuesta 6</td>
              <td>{respuesta6.value}</td>
            </tr>
            <tr>
              <td>Respuesta 7</td>
              <td>{respuesta7.value}</td>
            </tr>
            <tr>
              <td>Respuesta 8</td>
              <td>{respuesta8.value}</td>
            </tr>
            <tr>
              <td>Respuesta 9</td>
              <td>{respuesta9.value}</td>
            </tr>
            <tr>
              <td>Respuesta 10</td>
              <td>{respuesta10.value}</td>
            </tr>
            <tr>
              <td>Respuesta 11</td>
              <td>{respuesta11.value}</td>
            </tr>
            <tr>
              <td>Respuesta 12</td>
              <td>{respuesta12.value}</td>
            </tr>
            <tr>
              <td>Respuesta 13</td>
              <td>{respuesta13.value}</td>
            </tr>
            <tr>
              <td>Respuesta 14</td>
              <td>{respuesta14.value}</td>
            </tr>
            <tr>
              <td>Respuesta 15</td>
              <td>{respuesta15.value}</td>
            </tr>
            <tr>
              <td>Respuesta 16</td>
              <td>{respuesta16.value}</td>
            </tr>
            <tr>
              <td>Respuesta 17</td>
              <td>{respuesta17.value}</td>
            </tr>
            <tr>
              <td>Respuesta 18</td>
              <td>{respuesta18.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      display: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  loadFile(e) {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      console.log(file);
    }
  }

  componentWillMount() {
    let aux = [];
    let cont = 1;
    preguntasTest.forEach((element, index) => {
      if (preguntasTest.length - 1 === index) {
        aux.push({
          id: cont.toString(),
          message: element.pregunta,
          trigger: `respuesta${cont}`,
        });
        aux.push({
          id: `respuesta${index + 1}`,
          options: [
            { value: "SI", label: "SI", trigger: "final" },
            { value: "NO", label: "NO", trigger: "final" },
          ],
        });
      } else {
        aux.push({
          id: cont.toString(),
          message: element.pregunta,
          trigger: `respuesta${cont}`,
        });
        aux.push({
          id: `respuesta${cont}`,
          options: [
            { value: "SI", label: "SI", trigger: (cont + 1).toString() },
            { value: "NO", label: "NO", trigger: (cont + 1).toString() },
          ],
        });
        cont++;
      }
    });
    let final = [
      {
        id: "final",
        message: "Genial! Revisemos las respuestas",
        trigger: "review",
      },
      {
        id: "review",
        component: <Review />,
        asMessage: true,
        trigger: "update",
      },
      {
        id: "update",
        message:
          "A continuación, seleccione una foto o tomate una foto en la parte inferior",
        trigger: "confirmacion",
      },
      {
        id: "confirmacion",
        options: [
          { value: "Confirmar", label: "Confirmar", trigger: "end-message" },
        ],
      },
      { id: "exit", component: <Navigate to="/home" /> },
      {
        id: "end-message",
        message: "Listo! Ahora analizaremos los datos!",
        end: true,
      },
    ];
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
    this.setState({ data: saludo.concat(aux, final) });
    console.log(aux.concat(final));
  }
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Entre");
    this.setState({
      data: this.state.data,
      image: this.fileInput.current.files[0].name,
    });
    console.log(this.state.data);
    console.log(this.state.image);
  }

  handleEnd({ steps, values }) {
    values.splice(values.length - 1, 1);
    values.splice(0, 1);

    const result = {
      nombre: "AV",
      respuestas: values,
      imagen: this.state.image,
    };
    console.log(result);

    apiServices
      .reconocerEmocion(result)
      .then((res) => {
        console.log(res);
        let emoji1;
        if (res.data.emocionF === "Felicidad") {
          emoji1 = feliz;
        }
        if (res.data.emocionF === "Tristeza") {
          emoji1 = triste;
        }
        if (res.data.emocionF === "Sorpresa") {
          emoji1 = sorprendido;
        }
        if (res.data.emocionF === "Enojo") {
          emoji1 = enojado;
        }

        let emoji2;
        if (res.data.emocionP === "Felicidad") {
          emoji2 = feliz;
        }
        if (res.data.emocionP === "Tristeza") {
          emoji2 = triste;
        }
        if (res.data.emocionP === "Sorpresa") {
          emoji2 = sorprendido;
        }
        if (res.data.emocionP === "Enojo") {
          emoji2 = enojado;
        }
        Swal.fire({
          title: "Emocion Facial",
          text: res.data.emocionF,
          imageUrl: emoji1,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
        }).then((result) => {
          Swal.fire({
            title: "Emocion de preguntas",
            text: res.data.emocionP,
            imageUrl: emoji2,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
          }).then((result) => {
            Swal.fire({
              title: "Frase",
              text: res.data.frase,
              imageUrl: "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            }).then((result) => {
              Swal.fire({
                title: "Deseas guardar los datos?",
                text: "Asi podremos tener un historial de tus emociones",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  const user = localStorage.getItem("identificador");
                  apiServices.agregarresultado({
                    emocion: res.data.emocionF,
                    fecha: new Date().toLocaleDateString(),
                    hora: new Date().toLocaleTimeString(),
                    id_persona: user,
                  });
                  Swal.fire(
                    "Completado!",
                    "Se han registrado tus datos",
                    "success"
                  );
                }
              });
            });
          });
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={this.handleEnd}
          botAvatar={logo}
          userAvatar={user}
          width={"100%"}
          steps={this.state.data}
        />
        <form className="my-4" onSubmit={this.handleSubmit}>
          <label>
            Subir archivo:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button className="btn btn-success" type="submit">
            Guardar
          </button>
        </form>
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
