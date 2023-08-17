import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Episodes from "../Episodes/Episodes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [{
            index: true,
            path: '/',
            element: <Episodes/>,
        }]
    },
])

export {router}