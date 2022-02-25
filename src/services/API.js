import http from "../http-common";

const fetchPreguntas = async () => {
  try {
    const res = await http.get("/obtener-preguntas");
    return res;
  } catch (e) {
    console.error(e);
  }
};

const reconocerEmocion = async (data) => {
  try {
    const res = await http.post("/reconocer-emocion", data);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

const apiServices = {
  fetchPreguntas,
  reconocerEmocion,
};

export default apiServices;
