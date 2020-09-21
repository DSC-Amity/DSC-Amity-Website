import React,{ useState} from 'react'
import './App.css'
import logo from "./assets/DSClogo2.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'


export default function Navb(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
       <Navbar color="faded" dark>
           <NavbarBrand href='/' className="mr-auto">
                    <div className="logo-title">
                    <div >
                        <img src={logo} alt="DSC Logo" id="nav-logo" />
                    </div>
                    <div className="nav-title">
                        <h2>Developer Student Clubs</h2>
                        <p>Amity University</p>
                    </div>
                </div>
           </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar >
                    <NavItem >
                        <NavLink href="#home" >Vision</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#team">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#updates">Updates</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#blog">Our Blogs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#idea">Submit an Idea</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#join">Join Us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
       </Navbar>
        </div>
    )
}

