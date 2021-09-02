import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <div className="header__option">Home Base
        </div>
      </Link>
      <Link to="/store">
        <div className="header__option">$$$
        </div>
      </Link>
      <Link to="/setups">
        <div className="header__option">Setups
        </div>
      </Link>
      <Link to="/OnTop">
        <div className="header__option">OnTop Registry
        </div>
      </Link>
      <Link to="/yourAccount">
        <div className="header__option">Your Account
        </div>
      </Link>
      <Link to="/login">
        <div className="header__option">Hello (User), Are you new?
        </div>
      </Link>
      <Link to="/checkout">
        <div
          className="header__option"><FaShoppingBasket />
          <span className="header__basketCount"> - {basket?.length} -
          </span>
        </div>
      </Link>

    </div>


  );
}

export default Header;