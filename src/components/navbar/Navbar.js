import React, { Component } from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

export default class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <StyledNavbar>
        <nav className="NavbarItems">
          {/* <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i> 
          </div> */}
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </StyledNavbar>
    );
  }
}

const StyledNavbar = styled.div`
  .NavbarItems {
    position: absolute;
    top: 2%;
    left: 30%;
    width: 60vw;
  }
  .nav-menu {
    display: flex;
    list-style: none;
    padding: 2%;
  }
  .nav-links {
    padding: 10px;
    margin: 20px;
    line-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 20px;
    color: #333b51;
  }
  .nav-links:hover {
    border-bottom: solid coral 2px;
    color: coral;
    text-decoration: none;
  }
`;
