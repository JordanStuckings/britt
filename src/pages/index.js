import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Portfolio from '../components/portfolio'
import Clients from '../components/clients'
import Bio from '../components/bio'
import Banner from '../components/banner'
import Enquire from '../components/enquire'
import Tweet from '../components/tweet'
import protestShot from '../images/protest_shot.jpg'
import showreelThumb from '../images/showreel_thumb.png'
import showreelVideo from '../videos/showreel.mp4'



const HomePage = () => (
<Layout>
    <SEO title="Home" keywords={['portfolio', 'journalist', 'showreel', 'asia', 'reporter', 'Hong Kong', 'china']} />
    <Hero />
    <Banner>
        <video muted poster={showreelThumb} controls loop preload="auto">
            <source src={showreelVideo} type="video/mp4" media="all and (min-width:769px)" />
        </video>
    </Banner>
    <Bio />
    <Banner>
        <Tweet />
    </Banner>
    <Banner>
        <img src={protestShot} />
    </Banner>
    <Portfolio />
    <Clients />
    <Enquire />
</Layout>
)

export default HomePage


