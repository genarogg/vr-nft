import React, { useEffect } from "react";

const Video = ({ css = "", id = "", src, play = false }) => {
  useEffect(() => {
    const video = document.getElementById(id);

    //@ts-ignore
    video
      //@ts-ignore
      .play()
      .then(() => {
        console.log("El video se ha iniciado correctamente");
      })
      .catch((error) => {
        console.error("Se ha producido un error al iniciar el video:", error);
      });
  }, []);

  return (
    <video
      src={src}
      id={id}
      controls
      loop
      autoPlay={play}
      className={css}
    ></video>
  );
};

export default Video;
