export default function Home() {
  return (
    <div className="home">
      <h1>
        Coffee and plants,
        <br />
        anywhere.
      </h1>

      <span>
        <div>
          <img src="/img/homepage-coffee-table.png" />
          <button>Shop Coffee</button>
        </div>
        <div>
          <button>Special Offers</button>
          <img src="/img/homepage-food-table.png" />
        </div>
        <div>
          <img src="/img/homepage-plants.png" />
          <button>Shop Plants</button>
        </div>
      </span>
    </div>
  );
}
