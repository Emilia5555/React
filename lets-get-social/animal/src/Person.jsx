import "./css/Person.css";

const Person = ({ firstName, lastName, age, favColor, picture }) => {
  //   let firstName = props.firstName;
  //   let lastName = props.lastName;
  //   let age = props.age;
  //   let favColor = "purple";
  //   let picture = props.picture;
  return (
    <>
      <img src={picture} alt="" />
      <h2>First name: {firstName}</h2>
      <h2>Last name: {lastName}</h2>
      <h2>Age: {age}</h2>
      <h2>Favorite color: {favColor}</h2>
    </>
  );
};

export default Person;
