import React from "react";
import MovieNavbar from "../components/navbar/MovieNavbar.component";

const Movielayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar/>
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default Movielayout;
