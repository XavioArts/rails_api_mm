// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Monsters from './components/Monsters';
import MonForm from './components/MonForm';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Navbar from "./components/Navbar";

function App() {

  // const [toggle, setToggle] = useState(false);

  // const toggleForm = () => {
  //   setToggle(!toggle);
  // };

  return (
    // <div className="App">
    //    <h1>Monster Manual</h1>
    //    {/* <button onClick={toggleForm}>
    //      {toggle ? "Cancel" : "Make a new Monster"}
    //    </button>
    //    {toggle && <MonForm />} */}
    //    <Monsters />
    // </div>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Monsters />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
