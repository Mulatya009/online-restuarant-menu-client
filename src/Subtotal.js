import React from "react";
import { Button } from "@material-ui/core";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import numeral from "numeral";

function Subtotal() {
  const [{ basket }] = useStateValue();
  let totalAmount = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <div className="subtotal__bill">
        <p>
          <small>Ksh.</small> <strong>{totalAmount}</strong>
        </p>
        <div className="subtotal__button">
          <Button>order?</Button>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
