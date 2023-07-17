import * as React from "react";

const Ximg = ({
  src,
  alt = "Xiana by: Genaro Gonzalez",
  type,
  css = "",
  id = "",

  children,
  styles,
}) => {
  if (type === "bg") {
    return (
      <>
        <div
          style={Object.assign(
            { backgroundImage: `url(${src})`, width: "100%", position: "fixed" },
            styles
          )}
          className={css}
        >
          {children}
        </div>
      </>
    );
  }

  if (type === "img") {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        id={id}
        className={css}
        style={styles}
      />
    );
  }
};
export default Ximg;
