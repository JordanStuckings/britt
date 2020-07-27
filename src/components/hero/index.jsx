import React from "react";

import { Profile, ProfileImage, ProfileName, ProfileTitle } from "../profile";

import ProfileImageSource from "../../images/britt-head-shot-square.png";

import { StyledHero, Summary } from "./styles";

const Hero = () => (
  <StyledHero>
    <Profile>
      <ProfileImage src={ProfileImageSource}></ProfileImage>
    </Profile>
    <Summary>
      <ProfileName>Britt Clennett</ProfileName>
      <ProfileTitle>Journalist</ProfileTitle>
    </Summary>

  </StyledHero>
);

export default Hero;
