import React from "react";
import "./Header.css";
import logo from "./logo.png";

function Header()
{
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <img src={logo} className="navbar-logo" alt="NASA logo" draggable="false" />
                <h1 className="navbar-title">
                    Astronomy Picture of the Day
                </h1>
            </div>
        </header>
    );
}

export default Header;
