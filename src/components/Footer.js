import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Footer() {
  return (
    <Footers
      className="footer d-flex flex-column align-items-center"
      id="footer"
    >
      <p>
        Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a href="/" className="Dsc">
          DSC Amity
        </a>
      </p>
      <p>Copyright © 2020, All rights reserved.</p>
    </Footers>
  );
}
const Footers = styled.div`
  padding: 20px 100px 120px 100px;
  background-color: #fab939;
  .Dsc {
    color: #d93a1d;
  }
`;
