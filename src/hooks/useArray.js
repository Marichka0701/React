import {useState} from "react";

export const useArray = (defaultValue) => {
    const [arrayValue, setArrayValue] = useState(defaultValue);

    const add = (item) => {
        setArrayValue(prev => [...prev, item])
    }

    const remove = (id) => {
        const filteredArr = arrayValue.filter((item, index) => index !== +id)
        setArrayValue(filteredArr)
    }

    return {arrayValue, add, remove}
}