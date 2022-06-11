import React from "react"
import reactLogo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-item1">
                <img src={reactLogo}></img>
                <h2>ReactFacts</h2>
            </div>
            <div className="nav-item2">
                <ul className="nav-list">
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
            </div>
        </nav>
    )
}