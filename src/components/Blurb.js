import Title from "./Title";

export default function Blurb(props) {
  return (
    <div className="blurb">
      <Title text={props.title} />
      <p>{props.body}</p>
    </div>
  );
}
