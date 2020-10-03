import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function handleClick() {
    document.getElementById("side-menu").style.visibility = "hidden";
}

export default function SideMenu() {
    return (
        <div id="side-menu">
        <div id="close-button">
            <FontAwesomeIcon icon={faTimes} onClick={handleClick} id="faClose"/>
        </div>
            <ul className="menu-list">
                <li>Vision</li>
                <li>Team</li>
                <li>Contact Us</li>
                <li>Submit an Idea</li>
                <li>Form</li>
            </ul>
        </div>
    )
}
