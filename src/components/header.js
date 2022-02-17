// import { ReactComponent as basket } from 'public/img/basket.svg';
import Basket from "./basket";

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

      <a className="headerImage" href="/">
        <img src="/img/ps-logo.svg" height="40px" />
      </a>

      <span className="headerAccount">
        <Basket />
        <p className="headerLink">Login</p>
      </span>
    </div>
  );
}
