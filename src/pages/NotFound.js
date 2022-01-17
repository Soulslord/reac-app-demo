import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Sorry this page doesn't exist</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;