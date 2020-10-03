import React, { Component } from "react";
import styled from "styled-components";

export default class Events extends Component {
  render() {
    return (
      <Event id="events">
        <div className="box">
          <div className="right">
            <div className="right-item right-item-1 "></div>
            <div className="right-item right-item-2 "></div>
          </div>
          <div className="block"></div>
          <div className="left">
            <div className="left-item left-item-1"></div>
            <div className="left-item left-item-2"></div>
          </div>
        </div>
      </Event>
    );
  }
}
const Event = styled.div`
  padding: 150px 0px;
  height: 90vh;
  width: 100vw;
  .box {
    background-color: #c6fbff;
    height: 50vh;
    width: 100vw;

    position: relative;
  }
  .box .right {
    float: right;
    width: 50vw;
  }
  .box .left {
    float: left;
    width: 50vw;
    position: absolute;
    top: 0;
  }
  .box .right .right-item {
    height: 150px;
    width: 150px;
    margin-left: 300px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
  }
  .box .right .right-item-1 {
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .box .right .right-item-2 {
    margin-bottom: 50px;
    margin-top: 25px;
  }
  .box .left .left-item {
    height: 150px;
    width: 150px;
    margin-left: 400px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
  }
  .box .left .left-item-1 {
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .box .left .left-item-2 {
    margin-bottom: 50px;
    margin-top: 25px;
  }
  .box .block {
    position: absolute;
    top: -50px;
    left: 665px;
    height: 60vh;
    width: 350px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
  }
`;
