import React, { useState } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import Webcam from "react-webcam";
import Dialog from "@mui/material/Dialog";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
const WebcamCapture = ({ show, closeDialog }) => {
  const [image, setImage] = useState("");

  const webcamRef = React.useRef(null);

  const imgRef = React.useRef();

  const handleClose = () => {
    closeDialog(image);
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <Dialog fullWidth={true} open={show} onClose={handleClose}>
      <Webcam
        audio={false}
        height={520}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        videoConstraints={videoConstraints}
      />
      <img alt="foto" src={image} ref={imgRef}></img>
      <button className="btn btn-primary" onClick={capture}>
        Tomar Foto
      </button>
      <button className="btn btn-success" onClick={() => handleClose()}>
        Guardar Foto
      </button>
    </Dialog>
  );
};

export default WebcamCapture;
