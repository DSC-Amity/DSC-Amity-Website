import React from "react";
import styled from "styled-components";
import Communities from "../assets/communities.jpg";
import UpperShape from "../assets/Upper-Shapes.png";
import LowerShape from "../assets/Lower-Shapes.png";

export default function Updates() {
  return (
    <Update id="updates">
      <div className="box">
        <div className="content">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
          </p>
        </div>
        <div className="image">
          <div className="image-box">
            <img src={Communities} alt="" className="Communities" />
          </div>
          <div className="Shape-Up">
            <div className="UpperShape">
              <img src={UpperShape} alt="" />
            </div>
          </div>

          <div className="Shape-Low">
            <div className="LowerShape">
              <img src={LowerShape} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <a class="twitter-timeline" data-height="500" data-theme="dark" href="https://twitter.com/DscAmity?ref_src=twsrc%5Etfw">Tweets by DscAmity</a> */}
    </Update>
  );
}
const Update = styled.div`
  height: 100vh;
  width: 100vw;

  padding: 100px 200px;

  .box {
    display: flex;
  }
  .box .content {
    height: 80%;
    width: 50%;
    float: left;
    padding: 40px;
  }
  .box .content {
    font-size: 1.6em;
  }
  .box .image {
    height: 80%;
    width: 50%;
    float: right;
    position: relative;
  }
  .image-box {
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .box .image .Communities {
    height: 100%;
    width: 80%;
    float: right;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.4);
  }
  .box .image .Shape-Up {
    position: absolute;
    z-index: 0;
    height: 400px;
    width: 400px;
    top: -190px;
    left: -130px;
    z-index: 0;
  }
  .box .image .Shape-Up .UpperShape img {
    height: 100%;
    width: 100%;
  }
  .box .image .Shape-Low .LowerShape img {
    height: 100%;
    width: 100%;
  }
  .box .image .Shape-Low {
    position: absolute;
    z-index: 0;
    height: 500px;
    width: 500px;
    bottom: -370px;
    right: -250px;
    z-index: 0;
  }
`;
