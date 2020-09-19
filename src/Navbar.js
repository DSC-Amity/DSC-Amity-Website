import React from 'react'
import './App.css'
import logo from "./assets/DSClogo2.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="nav" id="navbar">
            <div className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo-title">
                <div >
                    <img src={logo} alt="DSC Logo" id="nav-logo"/>
                </div>
                <div className="nav-title">
                    <h2>Developer Student Clubs</h2>
                    <p>Amity University</p>
                </div>
            </div>
        </div>
    )
}
