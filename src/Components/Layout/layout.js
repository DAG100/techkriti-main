import React from 'react';
import Sidenav from './sidenav';
import Slides from "../slides.js";
import {Outlet} from "react-router-dom";

const Layout = (props) => {
    return(
        <div>
        {/* <div style={{"border":"2px solid red"}}>
            {/* <Toolbar/>
            <Sides/>
            <Backdrop/> 
            
    </div> */}
        <Sidenav /> 
        <Outlet />    
        </div>
    )
}

export default Layout;

