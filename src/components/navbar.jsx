import React, { useState } from "react";

const Navbar = () => {
  const [darkmod, setDarkMod] = useState(false);
  return (
    <div className={darkmod ? "dark-mode" : "light-mode"}>
      <nav className="navbar">
        <h4>Where in the World?</h4>
        <button
          onClick={() => {
            setDarkMod(!darkmod);
          }}
        >
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
            }
            alt={"Dark Mode image"}
            className="darkmod"
          />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
