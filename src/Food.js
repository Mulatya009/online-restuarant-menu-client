import React, { useState } from "react";
import "./Food.css";
import { Card, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import { useStateValue } from "./StateProvider";

function Food({ id, img, name, description, category, price }) {
  const [favorite, setFavorite] = useState(false);
  const [inBasket, setInBasket] = useState(false);
  const [{ basket }, dispatch] = useStateValue();

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  };

  const addToTable = () => {
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

    setInBasket(true);
  };

  return (
    <article>
      <Card className="food">
        <div className="food__cover">
          {favorite ? (
            <FavoriteOutlinedIcon
              onClick={handleFavorite}
              className="food__isFavorite"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={handleFavorite}
              className="food__favorite"
            />
          )}

          <img src={img} alt="" className="food__photo" />
        </div>
        <h5>{name}</h5>
        <p>{description}</p>
        <div className="food__addToTable">
          <p className="food__price">
            <small>Ksh </small>
            <strong>{price}</strong>
          </p>

          {inBasket ? (
            <Button className="food__inBasket" disabled>
              Added
            </Button>
          ) : (
            <Button className="food__addToTableButton" onClick={addToTable}>
              add to table
            </Button>
          )}
        </div>
      </Card>
    </article>
  );
}

export default Food;
