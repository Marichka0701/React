import React, {useEffect, useState} from 'react';

const SubchildTwoTwo = () => {
    const [user, setUser] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users?id=1')
            .then(response => response.json())
            .then(data => setUser(data[0]))
    }, []);
    console.log(user)
    return (
        <div>
            It is <b>Subchild_2_2</b>
        </div>
    );
};

export default SubchildTwoTwo;