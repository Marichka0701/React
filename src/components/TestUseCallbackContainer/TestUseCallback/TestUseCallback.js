import React, {memo} from 'react';

const TestUseCallback = memo(({value, setData}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column' , gap: 20}}>
            <p>data = {value()}</p>
            <button
                onClick={() => setData(prev => prev + 1)}
                style={{width:200, height: 50, background: "blue"}}
            >set data</button>
        </div>
    );
});

export default TestUseCallback;