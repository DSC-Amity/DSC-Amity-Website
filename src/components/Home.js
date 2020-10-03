import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Logo from "../assets/Logo.png";
import Lottie from "react-lottie";
import animationData from "../Animation/GroupWorking.json";

//Importing pngs
// import Blogging from "../assets/Vectors/Home/Blogging Animation/Blogging - Colour/blogging.svg";
// import Chatbot from "../assets/Vectors/Home/Chat Bot Animation/Chat Bot Coloured/Illustrations/chatbot.svg";
// import Testing from "../assets/Vectors/Home/download (4).png";
// import Click from "../assets/Vectors/Home/download (3).png";
// import WebDev from "../assets/Vectors/Home/webdev.png";
// import Filler from "../assets/Vectors/Home/filler.png";

export default class Home extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <StyledHome className="section" id="home">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <Navbar />
        <h3>long established fact</h3>
        <h1>dolorem ipsum quia dolorem</h1>
        <div className="Vector-Box">
          {/* <img src={Blogging} alt="" className="Blogging" />
            <img src={Chatbot} alt="" className="Chatbot" />
            <img src={Testing} alt="" className="Testing" />
            <img src={Click} alt="" className="Click" />
            <img src={WebDev} alt="" className="WebDev" />
            <img src={Filler} alt="" className="Filler" /> */}

          <Lottie
            options={defaultOptions}
            height={700}
            width={700}
            className="GroupWorking"
          />
        </div>
      </StyledHome>
    );
  }
}

const StyledHome = styled.div`
  margin: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;

  .Logo {
    position: absolute;
    top: 2%;
    left: 35px;
    height: 70px;
    width: 400px;
  }
  .Logo img {
    height: 100%;
    width: 100%;
  }
  h3 {
    position: absolute;
    left: 43%;
    top: 15%;
    font-weight: 500;
    color: #c9cfd3;
  }
  h1 {
    position: absolute;
    left: 35%;
    top: 20%;
    font-weight: 700;
    color: #42506d;
  }
  .vector-box {
    position: relative;
    height: 50vh;
    width: 100vw;
    border: black solid 2px;
  }
  .GroupWorking {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  ${"" /* .Blogging {
    position: absolute;
    width: 500px;
    height: 400px;
    float: right;
    right: 50%;
    bottom: -10%;
  }
  .Chatbot {
    position: absolute;
    width: 500px;
    height: 700px;
    float: left;
    bottom: -20%;
    left: 0;
  }
  .Testing {
    position: absolute;
    width: 400px;
    height: 400px;
    float: right;
    right: 30%;
    bottom: -30%;
  }
  .Click {
    position: absolute;
    width: 200px;
    height: 300px;
    float: right;
    right: 26%;
    bottom: 25%;
  }
  .WebDev {
    position: absolute;
    width: 400px;
    height: 600px;
    float: right;
    right: -3%;
    bottom: 0%;
    z-index: 1;
  }
  .Filler {
    position: absolute;
    width: 400px;
    height: 300px;
    float: right;
    right: 5%;
    bottom: -20%;
  } */}
`;
