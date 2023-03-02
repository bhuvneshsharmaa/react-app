import React from "react";

const Button = ({ text, onClick, href }) => {
  return (
    <div className="action-button">
      <a onClick={onClick} href={href} download>
        {text}
      </a>
    </div>
  );
};

export default Button;
