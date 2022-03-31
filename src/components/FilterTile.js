export default function FilterTile(props) {
  return (
    <div className="filterTile" data-cy="filterTile">
      <input
        type="checkbox"
        data-cy="filterCheckbox"
        id={props.text}
        name={props.text}
      />
      <p>{props.text}</p>
    </div>
  );
}
