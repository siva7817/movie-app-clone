import React from "react";
import NavbarComponent from "../components/navbar/Navbar.Component";

const Defaultlayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavbarComponent />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default Defaultlayout;
