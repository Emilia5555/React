import Person from "./Person";
import Pet from "./Pet";
import em from "./assets/chica.jpg";
import max from "./assets/max.jpg";
import hannah from "./assets/hannah.jpg";
import Card from "./Card";
function App() {
  return (
    <>
      <h1>Welcome to my animal social media app</h1>
      <Person
        firstName={"Emilia"}
        lastName={"Muñiz"}
        age={"17"}
        picture={em}
        favColor={"pink"}
      />
      <Person
        firstName={"Max"}
        lastName={"Starnes"}
        age={"17"}
        picture={max}
        favColor={"purple"}
      />

      <Person
        firstName={"Hannah"}
        lastName={"Konezny"}
        age={"18"}
        picture={hannah}
        favColor={"purple"}
      />

      <h1>Pets section</h1>

      <Pet name={"Chica"} type={"cat"} breed={"Calico"} age={"1"} />
      <Pet name={"Mari"} type={"cat"} breed={"black"} age={"1"} />
    </>
  );
}

export default App;
