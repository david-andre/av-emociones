import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./views/SingIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Diagnostic from "./views/Diagnostic";
import History from "./views/History";
import React, { useEffect, useState } from "react";

import apiServices from "./services/API";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  useEffect(() => {
    apiServices
      .fetchPreguntas()
      .then((res) => {
        console.log(res.data.preguntas);
        setPreguntas(res.data.preguntas);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/iniciar-sesion" element={<SignIn />}></Route>
        <Route path="/registro" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/diagnostico"
          element={<Diagnostic preguntas={preguntas} />}
        ></Route>
        <Route path="/historial" element={<History />}></Route>
        <Route path="/" element={<Navigate to="/iniciar-sesion" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
