import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselContainer } from "./styles";
const TweetCarousel = () => (
  <CarouselContainer>
    <Carousel interval={null} controls>
      <Carousel.Item>
        <blockquote class="twitter-tweet">
          <p lang="ja" dir="ltr">
            香港, June 2019{" "}
            <a href="https://t.co/2hmRHE6ody">pic.twitter.com/2hmRHE6ody</a>
          </p>
          &mdash; Britt Clennett (@BrittClennett){" "}
          <a href="https://twitter.com/BrittClennett/status/1263868698785390597?ref_src=twsrc%5Etfw">
            May 22, 2020
          </a>
        </blockquote>
      </Carousel.Item>
      <Carousel.Item>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            In the chaos with{" "}
            <a href="https://twitter.com/karsonwhy?ref_src=twsrc%5Etfw">
              @karsonwhy
            </a>{" "}
            as HK police make their first arrests under the new security law{" "}
            <a href="https://twitter.com/ABC?ref_src=twsrc%5Etfw">@ABC</a>{" "}
            <a href="https://t.co/Iis5j4oB55">https://t.co/Iis5j4oB55</a>
          </p>
          &mdash; Britt Clennett (@BrittClennett){" "}
          <a href="https://twitter.com/BrittClennett/status/1278543435390005248?ref_src=twsrc%5Etfw">
            July 2, 2020
          </a>
        </blockquote>
      </Carousel.Item>
    </Carousel>
  </CarouselContainer>
);

export default TweetCarousel;
