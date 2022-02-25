import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./views/SingIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Diagnostic from "./views/Diagnostic";
import History from "./views/History";
import { Chart } from "./views/Chart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/iniciar-sesion" element={<SignIn />}></Route>
        <Route path="/registro" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/diagnostico" element={<Diagnostic />}></Route>
        <Route path="/historial" element={<History />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/" element={<Navigate to="/iniciar-sesion" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
