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
        <ProductGrid />
      </div>
    </>
  );
}
