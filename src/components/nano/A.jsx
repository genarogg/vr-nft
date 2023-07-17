import * as React from "react";


const A = ({
  type,
  children,
  css = "",
  to = "#",
  id = "",
}) => {
  if (type === "a") {
    return (
      <a
        className={css}
        href={to}
        target="_blank"
        rel="noopener noreferrer nofollow"
        id={id}
      >
        {children}
      </a>
    );
  }
};

export default A;
