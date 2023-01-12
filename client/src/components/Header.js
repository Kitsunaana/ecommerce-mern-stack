import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    const showNavigation = () => {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Logo</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/signup">Sign up</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/signin">Sign in</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }

    return (
        <header id='header'>
            {showNavigation()}
        </header>
    );
};

export default Header;