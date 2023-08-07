import React, {useMemo} from 'react';

const TestUseMemo = ({data, setData}) => {
    const calculating = () => {
        for (let i = 0; i < 100000000; i++) {
            data++;
        }
        return data;
    }

    const value = useMemo(() => {
        return calculating(data);
    }, [data])

    return (
        <div style={{display: 'flex', flexDirection: 'column' , gap: 20}}>
            <h1>test use memo</h1>
            <p>data = {value}</p>
            <button
                onClick={() => setData(prev => prev + 1)}
                style={{width:200, height: 50, background: "blue"}}
            >set data</button>
        </div>
    );
};

export default TestUseMemo;