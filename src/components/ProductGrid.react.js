import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';

export default function ProductGrid({products}) {

  return (
    <div className='productGrid'>
      {products.map((product, i) => {
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

  const increaseCount = () => {setProductCount(productCount+1)};
  const decreaseCount = () => {
    if (productCount>1) {setProductCount(productCount-1)}
  };

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
          <RemoveIcon onClick={decreaseCount} className='changeQuantityBtn'/>
          <p>{productCount}</p>
          <AddIcon onClick={increaseCount} className='changeQuantityBtn'/>
        </div>
      </span>
    </div>
  )
}