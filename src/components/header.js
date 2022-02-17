import Basket from "./basket";
import "../styling/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span className="links">
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

      <a className="headerImage" href="/">
        <img src="/img/ps-logo.svg" height="40px" />
      </a>

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
