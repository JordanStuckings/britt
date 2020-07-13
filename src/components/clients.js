import React from "react";
import acydLogo from "../images/acyd_logo_black.png";
import atvLogo from "../images/atv_logo_black.png";
import cgtnLogo from "../images/cgtn_logo_black.png";
import reutersLogo from "../images/reuters_logo_black.png";
import unitedNationsLogo from "../images/united_nations_logo_black.png";
import alJazeeraLogo from "../images/al_jazeera_logo_black.png";
import trtWorldLogo from "../images/trt_world_logo_black.png";
import cbcLogo from "../images/cbc_logo_black.png";

import "./clients.css";

const Clients = () => (
  <section className="clients">
    <a href="https://www.thomsonreuters.com/en.html" className="link">
      <img className="logo" src={reutersLogo} alt="Reuters Logo" />
    </a>
    <a href="https://www.cgtn.com" className="link">
      <img className="logo" src={cgtnLogo} alt="CGTN Logo" />
    </a>
    <a href="https://acyd.org.au" className="link">
      <img className="logo" src={acydLogo} alt="ACYD Logo" />
    </a>
    <a href="https://www.hkatv.com" className="link">
      <img className="logo" src={atvLogo} alt="ATV Logo" />
    </a>
    <a href="https://www.un.org" className="link">
      <img className="logo" src={unitedNationsLogo} alt="United Nations Logo" />
    </a>
    <a href="https://www.aljazeera.com" className="link">
      <img className="logo" src={alJazeeraLogo} alt="Al Jazeera Logo" />
    </a>
    <a href="https://www.trtworld.com" className="link">
      <img className="logo" src={trtWorldLogo} alt="TRT World Logo" />
    </a>
    <a href="https://www.cbc.ca" className="link">
      <img className="logo" src={cbcLogo} alt="CBC Logo" />
    </a>
  </section>
);

export default Clients;
