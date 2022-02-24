import Blurb from "./Blurb";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid.react";

export default function Plants() {
  return (
    <>
      <Blurb
        title="Shop Coffee"
        body="Drink delicious coffee of any style"
      />
      <div className='productList'>
        <Filters />
        <ProductGrid products={coffeeProducts} />
      </div>
    </>
  );
}

const coffeeProducts = [
  {
    title: 'Pact Coffee',
    price: '$23',
    size: 'L',
    img: '',
  },
  {
    title: 'Other Coffee',
    price: '$8',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
  {
    title: 'Some Coffee',
    price: '$12',
    size: 'S',
    img: '',
  },
]