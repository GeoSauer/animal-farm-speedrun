import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`/animals/${props.type}.svg`} />
      <span className="name">{props.name}</span>
      <span>{props.says}</span>
    </div>
  );
}
