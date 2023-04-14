import Card from "./Card";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className="greenbg">
      {characters.map((char) => (
        <Card
          onClose={onClose}
          name={char.name}
          status={char.status}
          image={char.image}
          species={char.species}
          gender={char.gender}
          id={char.id}
          key={char.id}
        />
      ))}
    </div>
  );
}
