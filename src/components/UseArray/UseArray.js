import React, {useState} from 'react';
import {useArray} from "../../hooks/useArray";
import '../../utils/reset.css'

const UseArray = () => {
    const array = [...new Array(10).keys()]
    const [inputValue, setInputValue] = useState('');
    const {arrayValue, add, remove} = useArray(array);

    return (
        <div>
            <h1>use array</h1>

            <div>
                {arrayValue.map((item, index) => {
                    return <div key={item}>
                        <h3>{item}</h3>
                        <button
                            onClick={() => remove(index)}
                            style={{width: 100, height: 40, background: "blue", marginTop: 10}}
                        >remove
                        </button>
                    </div>
                })}
            </div>
            <br/>

            <input
                style={{background: "gray"}}
                type="number"
                value={inputValue}
                placeholder={'enter value'}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => add(inputValue)}
                style={{width: 100, height: 40, background: "blue"}}
            >add</button>
        </div>
    );
};

export default UseArray;