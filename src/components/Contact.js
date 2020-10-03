import React, { Component } from "react";
import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";

export default class Contact extends Component {
  render() {
    return (
      <StyledContact id="contact">
        <h2>Connect with us </h2>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-envelope" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaDiscord className="discord" />
            </a>
          </li>
        </ul>
      </StyledContact>
    );
  }
}

const StyledContact = styled.div`
 
  top:0;
  left:0:
  display:flex;
  position:relative;
  
  height: 30vh;
  width:100vw;
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
   
  }
  ul li {
    list-style: none;
  }
  ul li a {
    position: relative;
    width: 100px;
    height: 100px;
    background: #f1f1f1;
    display: block;
    margin: 0 10px;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    background: linear-gradient(0deg, #ddd, #fff);
    transition: 0.5s;
  }
  ul li a:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  ul li a .fa {
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: 90px;
    font-size: 50px;
    color: #232323;
    transition: 0.5s;
  text-align:center;
    
    
  }
  ul li a .discord{
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: 94px;
   font-size:1em;
    color: #232323;
    transition: 0.5s;
    text-align:center;
  }
    
  ul li:nth-child(1) a:hover .fa {
    color: #1da1f2;
  }
  ul li:nth-child(2) a:hover .fa {
    color: #007bb5;
  }
  ul li:nth-child(3) a:hover .fa {
    color: #c32aa3;
  }
  ul li:nth-child(4) a:hover .fa {
    color: #ea4335;
  }
  ul li:nth-child(5) a:hover .discord  {
    color: #738ADB;
  }
  h2{
    position:absolute;
    top:0px;
    left:40%;    
      text-transform: uppercase;
  }

`;
