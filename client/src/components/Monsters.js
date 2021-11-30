import React, {useState, useEffect} from "react";
import axios from "axios";
import Monster from "./Monster";
import MonForm from "./MonForm";

const Monsters = (props) => {

    const [mons, setMons] = useState([]);

    const [toggle, setToggle] = useState(false);

    const toggleForm = () => {
      setToggle(!toggle);
    };

    useEffect(()=> {
        getMons();
    }, []);

    const getMons = async () => {
        let result = await axios.get("/api/monsters");
        setMons(result.data);
    };

    // will need the addMon, updateMon, and deleteMon functions here 
    // since the list of mons is in this component

    const renderMons = () => {
        if (mons.length === 0) {
            return (
                <h3>No Entries</h3>
            );
        } else
        return mons.map((mon) => {
            return <Monster {...mon} key={mon.id} />;
        });
    };

    return (
        <div>
            <button onClick={toggleForm}>
                {toggle ? "Cancel" : "Make a new Monster"}
            </button>
            {toggle && <MonForm />}
            <div>
                <h2>All monsters:</h2>
                {renderMons()}
            </div>
        </div>
    )
};

export default Monsters;