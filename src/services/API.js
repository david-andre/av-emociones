import http from "../http-common";

const fetchPreguntas = async() => {
    try {
        const res = await http.get("/obtener-preguntas");
        return res;
    } catch (e) {
        console.error(e);
    }
};

const fetchRespuestas = async(id) => {
    try {
        const res = await http.get("/obtener-resultados/" + id);
        return res;
    } catch (e) {
        console.error(e);
    }
};

const iniciarsesion = async(data) => {
    try {
        const res = await http.post("/iniciar-sesion", data);
        return Promise.resolve(res);
    } catch (e) {
        Promise.reject(e);
    }
};

const registrarse = async(data) => {
    try {
        const res = await http.post("/registrar-persona", data);
        return Promise.resolve(res);
    } catch (e) {
        Promise.reject(e);
    }
};

const agregarresultado = async(data) => {
    try {
        const res = await http.post("/anadir-resultado", data);
        return res;
    } catch (e) {
        console.error(e);
    }
};

const reconocerEmocion = async(data) => {
    try {
        const res = await http.post("/reconocer-emocion", data);
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err);
    }
};

const apiServices = {
    fetchPreguntas,
    fetchRespuestas,
    reconocerEmocion,
    iniciarsesion,
    registrarse,
};

export default apiServices;