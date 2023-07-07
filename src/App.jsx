import pic from "./assets/pic.jpg";
import "./App.css";

function App() {
  let age = 17;

  return (
    <>
      <h1>About me:</h1>
      <h2>Emilia Muniz</h2>
      <img src={pic} alt="" />

      <h3>info</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore
        ipsam autem modi non sunt at excepturi! Iusto corrupti dicta, laudantium
        ipsam provident deleniti officiis consequatur, a perspiciatis sapiente
        nam?
      </p>

      <h3>i am {age} years old</h3>
    </>
  );
}

export default App;
