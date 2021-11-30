import React, {useState} from "react";
import MonForm from "./MonForm";

const Monster = (props) => {

    const {id, name, mon_type, life, cr, updateMon, deleteMon} = props;

    const [toggle, setToggle] = useState(false);

    const toggleForm = () => {
      setToggle(!toggle);
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Type: {mon_type}</p>
            <p>Health Points: {life}</p>
            <p>Challenge Rating: {cr}</p>
            <button onClick={toggleForm}>
                {toggle ? "Cancel" : "Edit Monster"}
            </button>
            {toggle && <MonForm id={id} name={name} mon_type={mon_type} life={life} cr={cr} updateMon={updateMon} toggleForm={toggleForm}/>}
            <button onClick={()=> deleteMon(id)}>Delete Monster</button>
        </div>
    )
};

export default Monster;