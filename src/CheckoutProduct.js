import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({ id, title, image, price, rating, showButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="checkoutProduct__price">
                <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {showButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
