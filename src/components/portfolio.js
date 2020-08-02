import React from "react";
import Video from "./video";
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
import affordableHousingThumb from "../images/affordable_housing_thumb.jpg";
import hongKongProtestsVideo from "../videos/hong_kong_protests.mp4";
import hongKongProtestsThumb from "../images/hong_kong_protests_thumb.png";
import HongKongClashesOverNewSecurityLawVideo from "../videos/hong_kong_clashes_over_new_security_law.mp4";
import HongKongClashesOverNewSecurityLawThumb from "../images/hong_kong_clashes_over_new_security_law.jpg";
import ProtestersInHongKongDemonstrateAgainstNewNationalSecurityLawPassedByChinaVideo from "../videos/protesters_in_hong_kong_demonstrate_against_new_national_security_law_passed_by_china.mp4";
import ProtestersInHongKongDemonstrateAgainstNewNationalSecurityLawPassedByChinaThumb from "../images/protesters_in_hong_kong_demonstrate_against_new_national_security_law_passed_by_china.jpeg";
import ActivistSpeaksOutOnNationalSecurityLawThumb from "../images/activist_speaks_out_on_national_security_law.jpg";
import TurkeyIsAwashWithPlasticWasteThumb from "../images/turkey_is_awash_with_plastic_waste.jpg";
import AdaptOrDieTurkeyRestaurantsRiseToCoronavirusChallengeThumb from "../images/adapt_or_die_turkey_restaurants_rise_to_coronavirus_challenge.jpg";
import china_and_australias_war_of_words_video from "../videos/china_and_australias_war_of_words.mp4";
import china_and_australias_war_of_words_thumb from "../images/china_and_australias_war_of_words_thumb.jpeg";
import australias_bushfire_crisis from "../videos/australias_bushfire_crisis.mp4";
import australias_bushfire_crisis_thumb from "../images/australias_bushfire_crisis_thumb.jpg";
import cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive from "../audio/cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive.mp3";
import cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive_thumb from "../images/cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive_thumb.jpg";
import hong_kongs_new_reality_dawns_as_city_feels_chill_of_national_security_law_thumb from "../images/hong_kongs_new_reality_dawns_as_city_feels_chill_of_national_security_law_thumb.jpg";
import hong_kongs_reality_under_new_national_security_law_video from "../videos/hong_kongs_reality_under_new_national_security_law.mp4";
import hong_kongs_reality_under_new_national_security_law_thumb from "../images/hong_kongs_reality_under_new_national_security_law.jpg";
import locked_down_down_under_thumb from "../images/locked_down_down_under.jpg";
/* eslint-disable jsx-a11y/media-has-caption */


import "./portfolio.css";

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <h2>Portfolio</h2>
    <ul className="list">
      <div className="item">
        <div className="thumb">
          <Video
            muted
            poster={HongKongClashesOverNewSecurityLawThumb}
            controls
            loop
            preload="none"
            src={HongKongClashesOverNewSecurityLawVideo}
          />
        </div>
        <div className="description">
          <div className="title">Hong Kong clashes over new security law</div>
          <div className="body"></div>
          <div className="action">ABC News - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <Video
            muted
            poster={hong_kongs_reality_under_new_national_security_law_thumb}
            controls
            loop
            preload="none"
            src={hong_kongs_reality_under_new_national_security_law_video}
          />
        </div>
        <div className="description">
          <div className="title">Hong Kong’s reality under new national security law</div>
          <div className="body"></div>
          <div className="action">ABC News - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <Video
            muted
            poster={ProtestersInHongKongDemonstrateAgainstNewNationalSecurityLawPassedByChinaThumb}
            controls
            loop
            preload="none"
            src={ProtestersInHongKongDemonstrateAgainstNewNationalSecurityLawPassedByChinaVideo}
            style={{ objectFit: "fit" }}
          />
        </div>
        <div className="description">
          <div className="title">Protesters demonstrate against national security law passed by China</div>
          <div className="body"></div>
          <div className="action">ABC News - Correspondent</div>
        </div>
      </div>
      <a
        className="item"
        href="https://abcnews.go.com/International/hong-kong-activist-joshua-wong-speaks-national-security/story?id=71630260"
      >
        <div className="thumb">
          <img
            src={hong_kongs_new_reality_dawns_as_city_feels_chill_of_national_security_law_thumb}
            alt={"Hong Kong and Chinese national flags are flown behind a pair of surveillance cameras outside the Central Government Offices in Hong Kong, China July 20, 2020."}
          />
        </div>
        <div className="description">
          <div className="title">
            Hong Kong’s new reality dawns as city feels chill of national security law
          </div>
          <div className="body">
            Hong Kong's semi-autonomy and freedoms hang in the balance.
          </div>
          <div className="action">ABC News - Correspondent</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <a
        className="item"
        href="https://abcnews.go.com/International/hong-kong-activist-joshua-wong-speaks-national-security/story?id=71630260"
      >
        <div className="thumb">
          <img
            src={ActivistSpeaksOutOnNationalSecurityLawThumb}
            alt={"Activist Speaks Out On National Security Law Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            Activist speaks out on national security law
          </div>
          <div className="body">

          </div>
          <div className="action">ABC News - Correspondent</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <a
        className="item"
        href="https://abcnews.go.com/International/video/locked--71853178"
      >
        <div className="thumb">
          <img
            src={locked_down_down_under_thumb}
            alt={"Locked down Down Under Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            Locked down Down Under
          </div>
          <div className="body">

          </div>
          <div className="action">ABC News - Correspondent</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <a
        className="item"
        href="https://abcnews.go.com/International/hong-kong-activist-joshua-wong-speaks-national-security/story?id=71630260"
      >
        <div className="thumb">
          <img
            src={TurkeyIsAwashWithPlasticWasteThumb}
            alt={"Turkey Is Awash With Plastic Waste Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            Turkey is awash with plastic waste. Coronavirus could make it worse.
          </div>
          <div className="body">

          </div>
          <div className="action">AL JAZEERA - Writer</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <a
        className="item"
        href="https://abcnews.go.com/International/hong-kong-activist-joshua-wong-speaks-national-security/story?id=71630260"
      >
        <div className="thumb">
          <img
            src={AdaptOrDieTurkeyRestaurantsRiseToCoronavirusChallengeThumb}
            alt={"Adapt Or Die Turkey Restaurants Rise To Coronavirus Challenge Thumbnail"}
          />
        </div>
        <div className="description">
          <div className="title">
            'Adapt or die': Turkey restaurants rise to coronavirus challenge
          </div>
          <div className="body">
            Istanbul’s restaurants, bars and cafes had just started to recover. Then COVID-19 hit them with a new setback.
          </div>
          <div className="action">AL JAZEERA - Writer</div>
          <div className="action">See more →</div>
        </div>
      </a>
      <div className="item">
        <div className="thumb">
          <Video
            muted
            poster={china_and_australias_war_of_words_thumb}
            controls
            loop
            preload="none"
            src={china_and_australias_war_of_words_video}
          />
        </div>
        <div className="description">
          <div className="title">China and Australia’s war of words</div>
          <div className="body">Australia's push for an inquiry into the origins of the coronavirus has exacerbated tensions with its biggest trading partner, China. Canberra finds itself navigating a tough path between long-term security ally Washington and its economic ties to Beijing. Is another trade war looming?</div>
          <div className="action">TRT - Correspondent</div>
        </div>
      </div>
      <div className="item">
        <div className="thumb">
          <Video
            muted
            poster={australias_bushfire_crisis_thumb}
            controls
            loop
            preload="none"
            src={australias_bushfire_crisis}
          />
        </div>
        <div className="description">
          <div className="title">Australia's bushfire crisis</div>
          <div className="body">Despite public outrage and warnings from scientists, the Australian government says there's no direct link between climate change and the country's catastrophic bushfires.</div>
          <div className="action">TRT - Correspondent</div>
        </div>
      </div>
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
      {/* <div className="item">
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
      </div> */}
      {/* <div className="item">
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
      </div> */}
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
          <img
            src={cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive_thumb}
            alt={"Ankara Vows To Press Ahead With Syrian Offensive"}
          />
          <figure>
            <audio controls src={cbc_news_ankara_vows_to_press_ahead_with_syrian_offensive}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
        <div className="description">
          <div className="title">
            Ankara vows to press ahead with Syrian offensive
          </div>
          <div className="body">
          </div>
          <div className="action">CBC - Correspondent</div>
        </div>
      </div>
      {/* <div className="item">
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
      </div> */}
    </ul>
  </section>
);

export default Portfolio;
