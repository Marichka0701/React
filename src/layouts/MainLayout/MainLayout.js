import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div style={{background: "lightgray", minHeight: '100vh',width: '100%', height: '100%'}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;