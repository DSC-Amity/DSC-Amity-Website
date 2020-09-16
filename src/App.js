import React from 'react';
import Navbar from './Navbar';
import Home from './Home'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
function App() {
    return (
        <div className="App" id="App" >
            <Navbar/>
            <Home/>
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
