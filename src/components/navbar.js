import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbrand">
                <a className="navbar-item brand" href="">@felipesantana.dev</a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/items" className="navbar-item">Items</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;