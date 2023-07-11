import React from 'react';
import SubchildOneOne from "./SubchildOneOne/SubchildOneOne";
import SubchildOneTwo from "./SubchildOneTwo/SubchildOneTwo";

const ChildOne = () => {
    return (
        <div>
            <SubchildOneOne />
            <SubchildOneTwo />
        </div>
    );
};

export default ChildOne;