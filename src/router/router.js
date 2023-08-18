import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import Episodes from "../components/Episodes/Episodes";
import Characters from "../components/Characters/Characters";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                path: '/',
                element: <Episodes/>,
            },
            {
                path: '/characters',
                element: <Characters/>,
            }
        ]
    },
])

export {router}