import Basket from "./basket";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span className="headerLinks">
        <a href="/coffee" className="headerLink">
          Coffee
        </a>
        <a href="/plants" className="headerLink">
          Plants
        </a>
        <a href="/about" className="headerLink">
          About
        </a>
      </span>

      <img alt='Plant Shed Logo' src="/img/ps-logo.svg" height="40px" style={{ cursor: "pointer" }} />

      <span className="headerAccount">
        <Link className="headerLink" to="checkout">
          <Basket />
        </Link>
        <Link className="headerLink" to="login">
          Login
        </Link>
      </span>
    </div>
  );
}
