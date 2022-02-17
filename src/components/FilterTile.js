export default function FilterTile(props) {
  return (
    <div className="filterTile">
      <input type="checkbox" id={props.text} name={props.text} />
      <p>{props.text}</p>
    </div>
  );
}
