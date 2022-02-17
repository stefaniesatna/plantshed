import Basket from "./basket";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span className="headerLinks">
        <p className="headerLink">Coffee</p>
        <p className="headerLink">Plants</p>
        <p className="headerLink">About</p>
      </span>

      <img src="/img/ps-logo.svg" height="40px" />

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
