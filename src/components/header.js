import Basket from "./basket";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span className="headerLinks">
        <a href="/coffee" className="headerLink" data-cy="coffeeLink">
          Coffee
        </a>
        <a href="/plants" className="headerLink" data-cy="plantsLink">
          Plants
        </a>
        <a href="/about" className="headerLink" data-cy="aboutLink">
          About
        </a>
      </span>

      <Link className="headerLink" to="/" data-cy="homeLink">
        <img
          alt="Plant Shed Logo"
          src="/img/ps-logo.svg"
          height="40px"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <span className="headerAccount">
        <Link className="headerLink" to="checkout" data-cy="checkoutLink">
          <Basket />
        </Link>
        <Link className="headerLink" to="login" data-cy="loginLink">
          Login
        </Link>
      </span>
    </div>
  );
}
