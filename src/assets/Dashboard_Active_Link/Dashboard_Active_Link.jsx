//eslint-disable-next-line
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dashboard_Active_Link.css"
const Dashboard_Active_Link = ({to , children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive? "Dashboard_Active_Link" : "" }
        >
           {children}
        </NavLink>
    );
};

export default Dashboard_Active_Link;
//
