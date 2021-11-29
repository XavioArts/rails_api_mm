import React, {useState} from "react";
import axios from "axios";

const MonForm = (props) => {
    return (
        <div>
            <h3>New Monster</h3>
            <form>
                <p>Name</p>
                <input />
                <button>Create</button>
            </form>
        </div>
    )
};

export default MonForm;