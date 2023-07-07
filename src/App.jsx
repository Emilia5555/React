import pic from "./assets/pic.jpg";
import "./App.css";

function App() {
  let age = 17;

  return (
    <>
      <div id="parent">
        <div id="child">
          <img src={pic} alt="" />

          <h1>Emilia Muñiz 💕</h1>
          <h2>✨unemployed✨</h2>
          <div id="abt">
            <h3>About me:</h3>

            <p>
              I just found out I got a 5 on my AP computer science test!!!
              💪💪💪
            </p>
          </div>
          <div id="contact">
            <h3>Contact info:</h3>
            <p>
              Email: emiliamuñiz@gmail.com <br /> LinkedIn:
              https://www.linkedin.com/in/emilia-mu%C3%B1iz-94b249251/
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
