import React, {useContext, useEffect} from 'react';
import {UserContext} from "../../../App";

const SubchildOneOne = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
        {
            user && <div> {user?.name} - {user?.username} </div>
        }
        </>
)
    ;
};

export default SubchildOneOne;