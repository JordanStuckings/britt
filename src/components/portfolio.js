import React from "react";
import changingFaceVideo from "../videos/changing_face_240p.mp4";
import changingFaceThumb from "../images/changing_face_thumb.png";
import christmasCancelledThumb from "../images/christmas_cancelled_thumb.jpg";
import colivingGainsPopularityVideo from "../videos/co-living_gains_popularity.mp4";
import colivingGainsPopularityThumb from "../images/co-living_gains_popularity_thumb.png";
import bridgeThreatensDolphinsVideo from "../videos/bridge_threatens_dolphins.mp4";
import bridgeThreatensDolphinsThumb from "../images/bridge_threatens_dolphins_thumb.png";
import hongKongBooksellerVideo from "../videos/hong_kong_bookseller.mp4";
import hongKongBooksellerThumb from "../images/hong_kong_bookseller_thumb.png";
import activistsJailedVideo from "../videos/activists_jailed.mp4";
import activistsJailedThumb from "../images/activists_jailed_thumb.png";
import counterfeitMarketAudio from "../audio/counterfeit_market.mp3";
import counterfeitMarketThumb from "../images/counterfeit_market_thumb.jpg";
import ivoryTradeVideo from "../videos/ivory_trade.mp4";
import ivoryTradeThumb from "../images/ivory_trade_thumb.png";
import affordableHousingThumb from "../images/affordable_housing_thumb.jpg";
import hongKongProtestsVideo from "../videos/hong_kong_protests.mp4";
import hongKongProtestsThumb from "../images/hong_kong_protests_thumb.png";
import hollywoodChinaCourtshipVideo from "../videos/hollywood_china_courtship.mp4";
import hollywoodChinaCourtshipThumb from "../images/hollywood_china_courtship.png";
import turkeysCashCropsVideo from "../videos/turkeys_cash_crops.mp4";
import turkeysCashCropsThumb from "../images/turkeys_cash_crops.png";

/* eslint-disable jsx-a11y/media-has-caption */

import "./portfolio.css";

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <h2>Portfolio</h2>
    <ul className="list">
      <a
        className="item"
        href="https://www.aljazeera.com/ajimpact/lack-affordable-housing-feeds-hong-kong-discontent-190801151538867.html"
      >
        <div className="thumb">
          <img
            src={affordableHousingThumb}
            alt={"Affordable Housing Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            A lack of affordable housing feeds Hong Kong's discontent
          </div>
          <div className="body">
            Frustration at the Chinese territory’s sky-high property prices is
            one of many reasons why people are protesting.
          </div>
          <div className="action">AL JAZEERA - Writer</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={hongKongProtestsThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={hongKongProtestsVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Hong Kong Protests: Demonstrators demand inquiry into violence
          </div>
          <div className="body">
            Democracy activists in Hong Kong have accused Beijing of "fanning
            the flames" of a city that is already fractured.
          </div>
          <div className="action">TRT World - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={hollywoodChinaCourtshipThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={hollywoodChinaCourtshipVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">The Hollywood/China Courtship</div>
          <div className="body">
            China's blossoming relationship with Hollywood has an impact on
            audiences around the world.
          </div>
          <div className="action">CGTN - Producer</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={turkeysCashCropsThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={turkeysCashCropsVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">Cracking the China market</div>
          <div className="body">
            The US-China trade war has tested the world's two biggest economies
            and rattled global markets. But it appears an unlikely winner may
            have emerged from the dispute between the world's largest economies:
            Turkish hazelnut producers.
          </div>
          <div className="action">TRT World - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video muted poster={changingFaceThumb} controls loop preload="none">
            <source
              src={changingFaceVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Changing Face: China’s cosmetic surgery boom
          </div>
          <div className="body">
            An in-depth look into the country's growing obsession with cosmetic
            surgery and the challenges that lie ahead for an industry laden with
            risks.
          </div>
          <div className="action">CGTN - Presenter/Producer</div>
        </div>
      </div>
      <a
        className="item"
        href="https://www.aljazeera.com/ajimpact/christmas-cancelled-chinese-factories-feel-chill-trade-190627144329359.html"
      >
        <div className="thumb">
          <img
            src={christmasCancelledThumb}
            alt={"Christmas Cancelled Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            Christmas cancelled: Chinese factories feel chill of US trade war
          </div>
          <div className="body">
            Existing and looming tariffs are shrinking production at US
            export-focused factories. Some are moving to Southeast Asia.
          </div>
          <div className="action">AL JAZEERA - Writer</div>
          <div className="action">See more →</div>
        </div>
      </a>
      {/*<Link className="item" to="/2018-thai-cave-rescue">
            <div className="thumb">
                <img src={thaiRescueThumb} />
            </div>
            <div className="description">
                <div className="title">
                    2018 Thai cave rescue
                </div>
                <div className="body">
                    The media village at Tham Luang cave is packed - there’s more than 1,000 of us - and yet the Thai volunteers here remain so patient and hospitable
                </div>
                <div className="action">
                    See more →
                </div>
            </div>
        </Link>*/}
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={colivingGainsPopularityThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={colivingGainsPopularityVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Co-living gains popularity amid housing crisis in Hong Kong
          </div>
          <div className="body">
            As housing prices spiral in Hong Kong, young professionals are
            living in ever shrinking spaces.
          </div>
          <div className="action">TRT WORLD - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={bridgeThreatensDolphinsThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={bridgeThreatensDolphinsVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Bridge to China threatens Hong Kong's pink dolphin
          </div>
          <div className="body">
            Hong Kong’s rare pink dolphins are battling for survival as building
            work on a 19-mile bridge linking the Asian financial hub with China
            disrupts the communication and feeding activities of the highly
            sociable animals.
          </div>
          <div className="action">REUTERS - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={hongKongBooksellerThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={hongKongBooksellerVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Hong Kong Booksellers: Gui Minhai reportedly abducted on holiday
          </div>
          <div className="body">
            Hong Kong bookseller Gui Minhai had been free for only three months
            before being reportedly kidnapped for a second time. His
            disappearance while travelling in China adds to concerns over
            Beijing's growing influence in Hong Kong.
          </div>
          <div className="action">TRT WORLD - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video
            muted
            poster={activistsJailedThumb}
            controls
            loop
            preload="none"
          >
            <source
              src={activistsJailedVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Activists jailed for role in mass protests
          </div>
          <div className="body">
            Almost five years after the Occupy protests paralysed parts of the
            city for 79 days, seven of its leaders were given jail sentences
            today.
          </div>
          <div className="action">TRT WORLD - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <img
            src={counterfeitMarketThumb}
            alt={"Counterfeit Market Thumbnail"}
          />
          <figure>
            <audio controls src={counterfeitMarketAudio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
        <div className="description">
          <div className="title">
            China's counterfeit market thrives despite amid economic slowdown
          </div>
          <div className="body">
            Shop vendors at a popular market in Beijing, sales of brands like
            the iconic “Canada Goose” have been faring well thanks to chilly
            weather and slashed prices.
          </div>
          <div className="action">CBC - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <video muted poster={ivoryTradeThumb} controls loop preload="none">
            <source
              src={ivoryTradeVideo}
              type="video/mp4"
              media="all and (min-width:769px)"
            />
          </video>{" "}
        </div>
        <div className="description">
          <div className="title">
            Culture vs. Conservation: China’s Ivory Trade
          </div>
          <div className="body">
            Chinese demand for elephant tusks is fueling poaching of elephants
            in Africa (leading to a possible extinction). Activists say age-old
            perceptions towards so-called "white gold" need to be changed.
          </div>
          <div className="action">CGTN - Presenter/Producer</div>
        </div>
      </div>
    </ul>
  </section>
);

export default Portfolio;
