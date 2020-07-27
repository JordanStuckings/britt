import React from "react";
import { Link } from "gatsby";
import "./footer.css";

const footer = () => {
  const youtubeIcon = `M118.9,13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7,0,60.7,0,60.7,0s-38,0-47.5,2.5C8.1,3.9,3.9,8.1,2.5,13.3
C0,22.8,0,42.5,0,42.5s0,19.8,2.5,29.2c1.4,5.2,5.5,9.3,10.7,10.7C22.8,85,60.7,85,60.7,85s38,0,47.5-2.5
c5.2-1.4,9.3-5.5,10.7-10.7c2.5-9.5,2.5-29.2,2.5-29.2S121.5,22.8,118.9,13.3z`;
  const twitterIcon = `M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z`;

  return (
    <footer className="footer">
      <div className="inner">
        <div className="column">
          <ul className="list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/#portfolio">Portfolio</Link>
            </li>
            <li className="item">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="column" style={{ paddingLeft: "auto" }}>
          <ul className="list">
            <li className="item">
              <svg
                className="icon"
                viewBox="0 0 120 55"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "auto" }}
              >
                <path d={youtubeIcon} fill="currentColor"></path>
                <polygon
                  points="48.6,60.7 80.2,42.5 48.6,24.3"
                  fill="white"
                ></polygon>
              </svg>
              <a href="https://www.youtube.com/channel/UCKUYXHsxEe2WiE1Ns-AHqpg">
                YouTube
              </a>
            </li>

            <li className="item">
              <svg
                className="icon"
                viewBox="328 355 335 276"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"

              >
                <path d={twitterIcon} fill="currentColor"></path>
              </svg>
              <a href="https://twitter.com/brittclennett">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
