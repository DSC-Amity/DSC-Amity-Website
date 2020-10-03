import React, { Component } from "react";
import styled from "styled-components";

export default class Aim extends Component {
  render() {
    return (
      <StyledAim id="aim">
        <div className="heading">
          <h2>OUR FOCUS</h2>
        </div>
        <div className="content-box">
          <div className="box box1">
            <div className="vector vector1"></div>
            <div className="content content1">
              <p>
                <h4 className="content-heading">Heading</h4>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="box box2">
            <div className="vector vector2"></div>
            <div className="content content1">
              <p>
                <h4 className="content-heading">Heading</h4>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="box box3">
            <div className="vector vector3"></div>
            <div className="content content1">
              <p>
                <h4 className="content-heading">Heading</h4>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </StyledAim>
    );
  }
}

const StyledAim = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fffdea;
  .heading {
    position: relative;
    width: 100vw;
    height: 10vh;
  }
  .heading h2 {
    position: absolute;
    top: 20%;
    left: 45%;
    border: 2px solid #000;
  }
  .content-box {
    width: 100vw;
    height: 90vh;
    display: flex;
    padding: 100px 200px;
  }
  .content-box .box {
    position: relative;
    height: 70%;
    width: 33.3%;
    margin: 40px;
    padding: 40px;
    background-color: #fff;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
  .content-box .vector {
    position: absolute;

    height: 50%;
    width: 90%;
    margin: 10px;
    top: -20%;
    left: 2%;
    border-radius: 10px;
  }
  .content-box .box .content {
    position: absolute;
    padding: 1px 20px;

    margin: 120px 40px;
    margin-left: 0;
    height: 200px;
  }

  .content-box .box .content p .content-heading {
    margin: auto;
    padding: 2px 25%;
  }
  .content-box .box1 .vector1 {
    background-color: #c6fbff;
  }
  .content-box .box2 .vector2 {
    background-color: #ffd400;
  }
  .content-box .box3 .vector3 {
    background-color: #ab5859;
  }
`;
