import Basket from "./basket";

export default function Header() {
  return (
    <div className='header'>
        <span className='headerLinks'>
            <p className='headerLink'>Coffee</p>
            <p className='headerLink'>Plants</p>
            <p className='headerLink'>About</p>
        </span>

        <img src='/img/ps-logo.svg' height='40px'/>

        <span className='headerAccount'>
            <Basket />
            <p className='headerLink'>Login</p>
        </span>
    </div>
  )
}