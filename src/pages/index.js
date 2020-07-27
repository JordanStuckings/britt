import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Bio from "../components/bio";
import Banner from "../components/banner";
import Contact from "../components/contact";
import TweetCarousel from "../components/tweet-carousel";
import showreelThumb from "../images/showreel_thumb.png";
import showreelVideo from "../videos/showreel.mp4";
import Video from "../components/video";
import Image from "../components/image";

const HomePage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        "portfolio",
        "journalist",
        "showreel",
        "asia",
        "reporter",
        "Hong Kong",
        "china",
        "ABC",
      ]}
    />
    <Hero />
    <Banner>
      <Video
        muted
        poster={showreelThumb}
        controls
        loop
        preload="auto"
        src={showreelVideo}
      />
    </Banner>
    <Bio />
    <Banner>
      <TweetCarousel />
    </Banner>
    <Portfolio />
    <Contact />
  </Layout>
);


export default HomePage;
