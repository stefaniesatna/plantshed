import FilterTile from "./FilterTile";

const filterPlantOptions = [
  "Blooming Plants",
  "Cacti & Succulents",
  "Foliage Plants",
  "Orchid Plants",
  "Hanging Plants",
  "Air Plants",
  "Instant Jungle Bundles",
  "Pet Friendly Plants",
  "Large Indoor Plants",
]
const filterSizeOptions = [
  "S",
  "M",
  "L",
]

export default function Filters(props) {
  return (
    <div className="filters">
      <div>
        <h2 className="filtersHeader">Filters</h2>
        <a className="clearFilters">Clear filters</a>
      </div>
      <h3 className="filtersHeader">Categories</h3>

      {filterPlantOptions.map((plant, i) => {
        return (
          <FilterTile text={plant} key={i} />
        )
      })}
      <h3 className="filtersHeader" style={{ paddingTop: "20px" }}>
        Sizes
      </h3>
      {filterSizeOptions.map((size, i) => {
        return (
          <FilterTile text={size} key={i} />
        )
      })}
    </div>
  );
}
