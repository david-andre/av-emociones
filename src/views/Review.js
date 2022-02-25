import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import WebcamCapture from "./WebcamCapture";

import apiServices from "../services/API";

import logo from "../assets/logocircle.png";
import user from "../assets/user.png";

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
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 4,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 5,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 6,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 7,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 8,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 9,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 10,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 11,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 12,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 13,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 14,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 15,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 16,
    pregunta: "¿Se siente molesto?",
  },
  {
    acronimo: "Intranquilo",
    num_pregunta: 17,
    pregunta: "¿Se siente intranquilo?",
  },
  {
    acronimo: "Molesto",
    num_pregunta: 18,
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
    /*let preguntas = []
      apiServices
      .fetchPreguntas()
      .then((res) => {
        console.log(res.message);
        preguntas = res.preguntas
      })
      .catch((e) => {
        console.error(e);
      });*/
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
    console.log(this.fileInput.current.files[0].mozFullPath);
  }

  handleEnd({ steps, values }) {
    values.splice(values.length - 1, 1);
    values.splice(0, 1);

    const result = {
      nombre: "Cristian",
      respuestas: values,
      imagen: this.state.image,
    };
    console.log(result);
    /*
      apiServices
      .reconocerEmocion()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });*/
    alert(`Analisis de resultados:`);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <WebcamCapture
          show={this.state.display}
          closeDialog={(data) => {
            this.setState({
              data: this.state.data,
              display: false,
              image: data,
            });
          }}
        ></WebcamCapture>
        <ChatBot
          handleEnd={this.handleEnd}
          botAvatar={logo}
          userAvatar={user}
          width={"100%"}
          steps={this.state.data}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
