import FilterTile from "./FilterTile";

export default function Filters(props) {
  return (
    <div className="filters">
      <div>
        <h2 className="filtersHeader">Filters</h2>
        <a className="clearFilters">Clear filters</a>
      </div>
      <h3 className="filtersHeader">Categories</h3>
      <FilterTile text="Blooming Plants" />
      <FilterTile text="Cacti & Succulents" />
      <FilterTile text="Foliage Plants" />
      <FilterTile text="Orchid Plants" />
      <FilterTile text="Hanging Plants" />
      <FilterTile text="Air Plants" />
      <FilterTile text="Instant Jungle Bundles" />
      <FilterTile text="Pet Friendly Plants" />
      <FilterTile text="Large Indoor Plants" />
      <h3 className="filtersHeader" style={{ paddingTop: "20px" }}>
        Sizes
      </h3>
      <FilterTile text="S" />
      <FilterTile text="M" />
      <FilterTile text="L" />
    </div>
  );
}
