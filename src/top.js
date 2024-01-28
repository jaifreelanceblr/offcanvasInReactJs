import React from "react";
import { Link } from "react-router-dom";

function Top(props) {

    return (
        <div className="container-fluid">
            <nav className="navbar  navbar-light bg-light" >
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContents" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarSupportedContent" aria-labelledby="navbarSupportedContentLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarSupportedContent">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul style={{ listStyle: 'none' }}>
                            <li className="nav-item" >
                                <Link className="nav-link"   data-bs-dismiss="offcanvas"  to='/' >Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link"   data-bs-dismiss="offcanvas" to="/login"  >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Top;