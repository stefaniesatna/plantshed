import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';

export default function ProductGrid() {

  return (
    <div className='productGrid'>
      {plantProducts.map((product, i) => {
        return (
          <Product productDetails={product} key={i} />
        )
      })}
    </div>
  )
}

const Product = ({productDetails}) => {
  const {title, price, size, img} = productDetails;
  let [productCount, setProductCount] = useState(1);

  const increaseCount = () => {setProductCount(productCount++)};
  const decreaseCount = () => {setProductCount(productCount--)};

  return (
    <div className='productItem'>
      <div className='productImage'>
        {/* <img>{img}</img> */}
        <small>{size}</small>
      </div>
      <span className='productDetails'>
        <div>
          <p className='productTitle'>{title}</p>
          <p className='productPrice'>{price}</p>
        </div>
        <div className='purchaseQuantity'>
          <RemoveIcon onClick={decreaseCount}/>
          <p>{productCount}</p>
          <AddIcon onClick={increaseCount}/>
        </div>
      </span>
    </div>
  )
}


const plantProducts = [
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Plant',
    price: '$89',
    size: 'S',
    img: '',
  }
]