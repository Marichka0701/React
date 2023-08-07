import {useState} from "react";

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);

    const baseURL = 'https://jsonplaceholder.typicode.com';

    fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
        .then(value => setData(value))

    return data;
}