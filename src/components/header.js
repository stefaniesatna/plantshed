// import { ReactComponent as basket } from 'public/img/basket.svg';
import Basket from "./basket";
import '../styling/header.css';

export default function Header() {
  return (
    <div className='header'>
        <span className='links'>
            <p className='headerLink'>Coffee</p>
            <p className='headerLink'>Plants</p>
            <p className='headerLink'>About</p>
        </span>

        <img src='/img/ps-logo.svg' height='40px'/>

        <span className='account'>
            <Basket />
            <p className='headerLink'>Login</p>
        </span>
    </div>
  )
}