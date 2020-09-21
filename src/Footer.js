import React from 'react'
import './App.css'
import { Col, Container, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div className="footer d-flex flex-column align-items-center" id="footer">
            <p>Made with <FontAwesomeIcon icon={faHeart} /> by <a href="/" className="text-warning">DSC Amity</a></p>
            <p>Copyright © 2020, All rights reserved.</p>
        </div>
    )
}
