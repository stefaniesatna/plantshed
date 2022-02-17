import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {useState} from 'react';

export default function Basket() {
  const [basketCount, setBasketCount] = useState(0);

  return (
    <div className='headerBasket'>
      <p>{basketCount}</p>
      <ShoppingBasketOutlinedIcon />
    </div>
  )
}
