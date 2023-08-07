import {useState} from "react";

export const useToggle = (defaultValue) => {
    const [status, setStatus] = useState(defaultValue);

    const toggleStatus = () => {
        setStatus(prev => !prev);
    }

    return [status.toString(), toggleStatus];
}