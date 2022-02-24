import Blurb from "./Blurb";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid.react";

export default function Plants() {
  return (
    <>
      <Blurb
        title="Shop Plants"
        body="Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. "
      />
      <div className='productList'>
        <Filters />
        <ProductGrid products={plantProducts} />
      </div>
    </>
  );
}

const plantProducts = [
  {
    title: 'West African Cacti',
    price: '$23',
    size: 'S',
    img: '',
  },
  {
    title: 'Roses',
    price: '$8',
    size: 'S',
    img: '',
  },
  {
    title: 'Bird of Paradise',
    price: '$89',
    size: 'L',
    img: '',
  },
  {
    title: 'Medium Plant',
    price: '$42',
    size: 'M',
    img: '',
  },
  {
    title: 'Orange Plant',
    price: '$38',
    size: 'M',
    img: '',
  },
  {
    title: 'Fruit Tree',
    price: '$109',
    size: 'L',
    img: '',
  },
  {
    title: 'Vines',
    price: '$35',
    size: 'M',
    img: '',
  },
  {
    title: 'Ficus Ginseng Bonsai',
    price: '$35',
    size: 'S',
    img: '',
  },
  {
    title: 'Snake Plant',
    price: '$10',
    size: 'S',
    img: '',
  },
  {
    title: 'Kentia Palm',
    price: '$140',
    size: 'L',
    img: '',
  },
]