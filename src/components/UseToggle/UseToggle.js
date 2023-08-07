import React from 'react';
import {useToggle} from "../../hooks/useToggle";

const UseToggle = () => {
    const [status, toggleStatus] = useToggle(false);

    return (
        <div>
            <h1>use toggle</h1>
            <br/>
            <h2>Component`s status: {status}</h2>
            <br/>
            <button
                onClick={toggleStatus}
                style={{width: 100, height: 40, background: "blue"}}
            >change status</button>
        </div>
    );
};

export default UseToggle;