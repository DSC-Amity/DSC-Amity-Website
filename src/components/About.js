import React, { Component } from "react";
import styled from "styled-components";
import CheckMark from "../assets/Checkmark.png";
import Shapes from "../assets/Upper-Shapes.png";
import Lottie from "react-lottie";
import animationData from "../Animation/Walking.json";

export default class About extends Component {
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
      <AboutUs id="about">
        <div className="shapes">
          <img src={Shapes} alt="" />
        </div>
        <div className="box">
          <div className="task task1">
            <div className="CheckMark">
              <img src={CheckMark} alt="" />
            </div>
            <div className="content">
              <h4>Lorem Ipsum</h4>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </div>
          </div>
          <hr />
          <div className="task task2">
            <div className="CheckMark">
              <img src={CheckMark} alt="" />
            </div>
            <div className="content">
              <h4>Lorem Ipsum</h4>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </div>
          </div>
          <hr />

          <div className="task task3">
            <div className="CheckMark">
              <img src={CheckMark} alt="" />
            </div>
            <div className="content">
              <h4>Lorem Ipsum</h4>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </div>
          </div>
          <hr />

          <div className="task task4">
            <div className="CheckMark">
              <img src={CheckMark} alt="" />
            </div>
            <div className="content">
              <h4>Lorem Ipsum</h4>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </div>
          </div>
        </div>
        <div className="vector">
          <Lottie
            options={defaultOptions}
            height={850}
            width={900}
            className="Walking"
          />
        </div>
      </AboutUs>
    );
  }
}

const AboutUs = styled.div`
  position: relative;
  height: 80vh;
  width: 100vw;
  background-color: #fab939;

  .shapes {
    position: absolute;
    top: 20px;
    left: -15px;
    height: 300px;
    width: 400px;
  }
  .shapes img {
    height: 100%;
    width: 100%;
  }
  .box {
    position: absolute;
    top: 10%;
    left: 15%;
    background-color: #fff;
    height: 70vh;
    width: 30vw;
    border-radius: 20px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
  }
  .task {
    height: 125px;
    width: 100%;

    padding: 20px;
    display: flex;
  }
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
  .CheckMark {
    height: 80px;
    width: 80px;
  }
  .CheckMark img {
    height: 100%;
    width: 100%;
  }
  .vector {
    float: right;
    margin-right: 50px;
  }
`;
