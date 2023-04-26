import React, { useState } from "react";
import './NameUpdater.css';
export default function NameUpdater() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState("****");

    const NameChange = (e) => {
        setName(e.target.value);
    };

    const FormSubmit = (e) => {
        e.preventDefault();
        setShowName(name);
        setName("");
    };

    return (
        <div className="container">
            <h1>Hi my name is : {showName}</h1>
            <form onSubmit={FormSubmit}>
                <input type="text" value={name} onChange={NameChange} />
                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
}
