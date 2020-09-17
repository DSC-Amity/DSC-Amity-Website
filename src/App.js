import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

export default function App() {
    return (
        <div className="App" id="particles-js">
            <Navbar />
            <Home />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

