import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function HomePage() {
  const id = "YFb2C04pc0dmfi2yK4gW";
  return (
    <div className="homePage">
      <div className="homePage__container">
        <h1>HOME SCREEN</h1>
        <Link to={`/category/${id}`}>
          <Button>Make Order</Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
