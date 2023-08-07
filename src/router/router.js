import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import {links} from "../constants/links";
import TestUseMemoContainer from "../components/TestUseMemoContainer/TestUseMemoContainer";
import TestUseCallbackContainer from "../components/TestUseCallbackContainer/TestUseCallbackContainer";
import UseToggle from "../components/UseToggle/UseToggle";
import UseFetch from "../components/UseFetch/UseFetch";
import UseArray from "../components/UseArray/UseArray";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children: [
            {
                index: true,
                path: `${links.USE_MEMO}`,
                element: <TestUseMemoContainer/>
            },
            {
                path: `${links.USE_CALLBACK}`,
                element: <TestUseCallbackContainer/>
            },
            {
                path: `${links.USE_TOGGLE}`,
                element: <UseToggle/>
            },
            {
                path: `${links.USE_FETCH}`,
                element: <UseFetch/>
            },
            {
                path: `${links.USE_ARRAY}`,
                element: <UseArray/>
            }
        ]
    }
])