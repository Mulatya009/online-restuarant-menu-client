import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutFood from "./CheckoutFood";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__header">
          <div className="checkout__left">
            {basket.length > 0 ? (
              <div className="checkout__items">
                <h2>You have {basket.length} items on table!!!</h2>
                <p>Please go through them and make your order.</p>
              </div>
            ) : (
              <div className="checkout__items">
                <h2>You have No items in the basket</h2>
                <p>Please go to menu and add items to the table!</p>
              </div>
            )}
          </div>

          {basket.length > 0 && (
            <div className="checkout__right">
              <h3>Subtotals</h3>
              <Subtotal />
            </div>
          )}
        </div>

        {basket.map(({ id, img, name, category, description, price }) => (
          <CheckoutFood
            key={id}
            id={id}
            img={img}
            name={name}
            category={category}
            description={description}
            price={price}
            Food
          />
        ))}
        {console.log(basket)}
      </div>
    </div>
  );
}

export default Checkout;
