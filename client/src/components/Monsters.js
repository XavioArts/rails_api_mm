import React, {useState, useEffect} from "react";
import axios from "axios";
import Monster from "./Monster";

const Monsters = (props) => {

    const [mons, setMons] = useState([]);

    useEffect(()=> {
        getMons();
    }, []);

    const getMons = async () => {
        let result = await axios.get("/api/monsters");
        setMons(result.data);
    };

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
            <h2>All monsters:</h2>
            {renderMons()}
        </div>
    )
};

export default Monsters;