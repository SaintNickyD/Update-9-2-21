import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
          <img
          className="checkout__ad"
          src="https://cdn.discordapp.com/attachments/869604147291357278/882701699037429810/cooltext392036575863267.png" />
          <h3>Hello, User</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}


      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
      </div>
  );
}

export default Checkout;
