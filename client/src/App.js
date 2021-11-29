// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Monsters from './components/Monsters';
import MonForm from './components/MonForm';

function App() {

  const [toggle, setToggle] = useState(false);

  const toggleForm = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
       <h1>Monster Manual</h1>
       <button onClick={toggleForm}>
         {toggle ? "Cancel" : "Make a new Monster"}
       </button>
       {toggle && <MonForm />}
       <Monsters />
    </div>
  );
}

export default App;
