import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Link>

      <div className="header__buttons">
        <div className="header__button">
          <FreeBreakfastIcon />
          <p> breakfast</p>
        </div>
        <div className="header__button">
          <FastfoodRoundedIcon />
          <p> dishes</p>
        </div>
        <div className="header__button">
          <LocalBarIcon />
          <p> drinks</p>
        </div>
        <div className="header__button">
          <FastfoodRoundedIcon />
          <p> fast foods</p>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__table">
          <IconButton>
            <ShoppingBasketIcon />
          </IconButton>
          <small>{basket.length}</small>
        </div>
      </Link>
      <SentimentSatisfiedRoundedIcon className="header__satisfied" />
    </div>
  );
}

export default Header;
