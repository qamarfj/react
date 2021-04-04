import logo from "./logo.svg";
import "./App.css";
import pic from "./pic.jpg";
var path = require("path");
var pic3 = path.basename("/react/assets/pic.jpg");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={pic}></img>
        <img src="./pic.jpg" alt="2nd pic"></img>
        <img src={pic3} alt="3rd pic"></img>
      </header>
    </div>
  );
}

export default App;
