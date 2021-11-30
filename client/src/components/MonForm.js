import React, {useState} from "react";
import axios from "axios";

const MonForm = (props) => {
    const {
        id, 
        name: oldName, 
        life: oldLife, 
        cr: oldCr, 
        mon_type: oldType, 
        addMon, 
        updateMon, 
        toggleForm} = props;
    //here i will add use states for update to use prev info

    const[name, setName] = useState(oldName ? oldName: "");
    const[life, setLife] = useState(oldLife ? oldLife: "");
    const[cr, setCr] = useState(oldCr ? oldCr: "");
    const[mon_type, setType] = useState(oldType ? oldType: "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMon = {
            name: name,
            life: life,
            cr: cr,
            mon_type: mon_type
        };
        if (id) {
            let result = await axios.put(`/api/monsters/${id}`, newMon);
            updateMon(result.data);
        } else {
            let result = await axios.post("/api/monsters", newMon);
            addMon(result.data);
        }
        toggleForm();
    };

    return (
        <div>
            <h3>{id ? "Edit" : "New"} Monster</h3>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Monster Type</p>
                <input value={mon_type} onChange={(e) => setType(e.target.value)} />
                <p>Health Points</p>
                <input value={life} onChange={(e) => setLife(e.target.value)} />
                <p>Challenge Rating</p>
                <input value={cr} onChange={(e) => setCr(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default MonForm;