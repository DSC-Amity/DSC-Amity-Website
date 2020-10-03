import React, { Component } from "react";
import styled from "styled-components";
import pic from "../assets/photos/6p0yst.jpg";
export default class Team extends Component {
  render() {
    return (
      <Teams>
        <div className="team-mates">
          <div className="member member1 animate__animated animate__fadeInDown">
            <img src={pic} alt="" />
          </div>
          <div className="member member2 animate__animated animate__fadeInLeft">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member3 animate__animated animate__fadeInBottomLeft">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member4 animate__animated animate__fadeInUp">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member5 animate__animated animate__fadeInBottomRight">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member6 animate__animated animate__fadeInRight">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member7 animate__animated animate__fadeIn ">
            {" "}
            <img src={pic} alt="" />
          </div>
          <div className="member member8 animate__animated animate__fadeInDown ">
            {" "}
            <img src={pic} alt="" />
          </div>
        </div>
        <div className="team-intro">
          <h2 className="heading">It is a long established</h2>
          <div className="content">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </div>
        </div>
      </Teams>
    );
  }
}

const Teams = styled.div`
  position: relative;
  padding: 20%;
  margin-bottom: 100px;
  height: 100vh;

  .team-mates {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 50vw;
    float: left;
    margin: 10px;
  }
  .team-intro {
    width: 50vw;
    float: right;

    position: absolute;
    top: 30%;
    right: 0%;
    padding: 20px 200px;
    padding-right: 100px;
  }
  .team-intro .heading {
    padding: 10px;
  }
  .team-intro .content {
    padding: 10px;
  }
  .member {
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.4);
  }
  .team-mates .member img {
    height: 100%;
    width: 100%;
  }
  .team-mates .member1 {
    height: 300px;
    width: 200px;
  }
  .team-mates .member2 {
    height: 200px;
    width: 150px;

    position: absolute;
    top: 50%;
    left: -10%;
  }
  .team-mates .member3 {
    height: 150px;
    width: 150px;

    position: absolute;
    top: 105%;
    left: 10%;
  }
  .team-mates .member4 {
    height: 150px;
    width: 400px;
    position: absolute;
    top: 130%;
    left: 20%;
  }
  .team-mates .member5 {
    height: 150px;
    width: 150px;
    position: absolute;
    top: 95%;
    left: 40%;
  }
  .team-mates .member6 {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 25%;
    left: 70%;
  }
  .team-mates .member7 {
    height: 150px;
    width: 300px;
    position: absolute;
    top: 10%;
    left: 40%;
  }
  .team-mates .member8 {
    height: 150px;
    width: 150px;
    position: absolute;
    top: -20%;
    left: 60%;
  }
`;
