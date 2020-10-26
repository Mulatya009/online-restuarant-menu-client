import React, { useState } from "react";
import "./CheckoutFood.css";
import { Card, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useStateValue } from "./StateProvider";

function CheckoutFood({ id, img, name, description, category, price }) {
  const [favorite, setFavorite] = useState(false);
  const [{ basket }, dispatch] = useStateValue();

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  };

  const addItem = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        img,
        name,
        description,
        category,
        price,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Card className="checkoutFood">
      <div className="checkoutFood__cover">
        <img src={img} alt={name} className="checkoutFood__photo" />
      </div>
      <div className="checkoutFood__info">
        <div className="checkoutFood__infoHeader">
          <h4>{name}</h4>

          {favorite ? (
            <FavoriteOutlinedIcon
              onClick={handleFavorite}
              className="checkoutFood__isFavorite"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={handleFavorite}
              className="checkoutFood__favorite"
            />
          )}
        </div>

        <p>{description}</p>
        <p className="checkoutFood__price">
          <small>Ksh </small>
          <strong>{price}</strong>
        </p>
        <Button onClick={removeFromBasket}>remove from table</Button>
      </div>
      <div className="checkoutFood__buttons">
        <strong onClick={addItem}>
          <AddCircleIcon />
        </strong>
        <h5>1</h5>
        <strong onClick={removeItem}>
          <RemoveCircleIcon />
        </strong>
      </div>
    </Card>
  );
}

export default CheckoutFood;
