import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright EMRE CEYLAN UYSAL ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
