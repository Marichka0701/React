import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div style={{background: "lightgray"}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;