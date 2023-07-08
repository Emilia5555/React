import Dog from "./Dog";
import Card from "./Card";

const Pet = ({ name, type, breed, age }) => {
  return (
    <>
      <Card>
        <h1>Pet:</h1>
        <h2>Name: {name}</h2>
        <h2>Type: {type}</h2>
        <h2>Breed: {breed}</h2>
        <h2>Age: {age}</h2>
        <Dog nickname={name + "y"} />
      </Card>
    </>
  );
};

export default Pet;
