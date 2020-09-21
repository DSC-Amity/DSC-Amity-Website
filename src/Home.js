import React from 'react'
import './App.css'
import TypeIt from "typeit-react";
import anim from './assets/DSClogo.svg'


export default function Home() {
    return (
        <div className="section" id="home">
            <div className="sub-section">
                <h1 className="section-title">
                    <TypeIt options= {{
                        cursor:false
                    }}>Who Are We?</TypeIt>
                </h1>
                <div className="d-flex flex-wrap">
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</blockquote>
                    <img src={anim} className="page-anim"/>
                </div>
            </div>
        </div>
    )
}
