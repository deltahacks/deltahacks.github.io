import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/BannerLanding'
import FAQ from '../components/FAQ'
import YouTube from 'react-youtube'

import hackers from '../assets/images/hackers.jpg'
import workshop from '../assets/images/workshop.jpg'
import sponsors from '../assets/images/sponsors.jpg'
import mentor from '../assets/images/mentor.jpg'
import MLH from '../assets/images/mlh.svg'
import schedule from '../assets/images/schedule.jpg'
import code from '../assets/images/coding.jpg'

const BGvideoOptions = {
    height: '500',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay:1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop - DOESN'T WORK - used onEnd function
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0,
        enablejsapi: 0
    }
};
const FGvideoOptions = {
    height: '500',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        controls: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 0,            // Run the video in a loop
        fs: 1,              // Show the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 1,
        enablejsapi: 0
    }
};

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>

                <a id="mlh" href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white" target="_blank">
                    <img id="mlhimg" src={MLH} alt="Major League Hacking 2019 Hackathon Season"/>
                </a>

                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <Banner />

                <div id="main">

                    {/* Code for background video below this*/}
                    <div className="video-background">
                        <div className="video-foreground">
                            <YouTube
                                videoId="tJA4XoCAs1Y"
                                opts={BGvideoOptions}
                                className="video-iframe"
                                onReady={function(e) {
                                    e.target.mute();
                                }}
                                onEnd={function(e) {
                                    e.target.playVideo();
                                }}
                            />
                        </div>
                    </div>
                    {/* Code for background video ends here */}

                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${schedule})`}}>
                            <header className="major">
                                <h3>Schedule</h3>
                                <p>The event schedule</p>
                            </header>
                            <Link to="/schedule" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${code})`}}>
                            <header className="major">
                                <h3>Live</h3>
                                <p>Live Updates to Events</p>
                            </header>
                            <Link to="/live" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${hackers})`}}>
                            <header className="major">
                                <h3>&#9651; Challenges</h3>
                                <p>Hack for Change</p>
                            </header>
                            <Link to="/trianglechallenges" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${sponsors})`}}>
                            <header className="major">
                                <h3>Sponsor Challenges</h3>
                                <p>Problems from the industry</p>
                            </header>
                            <Link to="/sponsorchallenges" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${mentor})`}}>
                            <header className="major">
                                <h3>Mentors</h3>
                                <p>Get some help</p>
                            </header>
                            <Link to="/mentors" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${workshop})`}}>
                            <header className="major">
                                <h3>Workshops</h3>
                                <p>Learn new skills</p>
                            </header>
                            <Link to="/workshops" className="link primary"></Link>
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}

                    <section id="two">

                        <div className="inner">
                            <header className="major">
                                <h3>What's DeltaHacks?</h3>
                            </header>
                            <p>DeltaHacks is McMaster’s annual student hackathon for change. We want to encourage students in all fields of study to come together to build real world applications that create positive change. The difference between DeltaHacks and other hackathons is that we embrace elements of design thinking to make “hacks” that solve real world problems. <br /><br />

                            The ultimate goal behind this hackathon is to include, not only the engineering and computer science students, but all talented individuals from all backgrounds to collaborate, create, and bring ideas to life. We want you to shoot for the stars.
                            </p>
                            <ul className="actions">
                                <li><Link to="/trianglechallenges" className="button">&#9651; Challenges</Link></li>
                            </ul>
                        </div>

                        <div className="inner">
                            <header className="major">
                                <h3>Sponsors!</h3>
                            </header>
                            <p>Our sponsors help us put food on the table - for you! Without them, there would be no DeltaHacks. They're also a great source of information about their industry, and a good starting place for your next internship or job.</p>
                            <ul className="actions">
                                <li><Link to="/sponsors" className="button">Our Sponsors</Link></li>
                                <li><Link to="/sponsorchallenges" className="button">Sponsor Challenges</Link></li>
                            </ul>
                        </div>

                        <div className="inner">
                            <header className="major">
                                <h3>Mentors!</h3>
                            </header>
                            <p>Mentors are an irreplaceable part of the hackathon ecosystem. It's a great way to give back to the community. As a Technical Mentor, you'll assist hackers with using new technologies, helping them learn what you already excel at! As a Challenger Mentor, you'll be able to provide a problem to hackers and guide them while they look for a solution! The possibilities are endless.
                            </p>
                            <ul className="actions">
                                <li><Link to="/mentors" className="button">Meet our Mentors</Link></li>
                            </ul>
                        </div>

                        <div className="inner">
                            <header className="major">
                                <h3>Workshops!</h3>
                            </header>
                            <p>An integral part of the hackathon experience is you - the hacker! We want to make sure you have plenty of opportunities to learn that one skill you always wanted to. What better place than surrounded by the best coders around? We partner with industry professionals to host workshops that teach you exactly what you need to get that project working.</p>
                            {/* <ul className="actions">
                                <li><Link to="/workshops" className="button next scrolly">Workshops</Link></li>
                            </ul> */}
                        </div>


                    </section>

                    <section id="recap">
                        <div className="inner">
                            <YouTube
                                videoId="3SizoIuIedc"
                                opts={FGvideoOptions}
                                className="video-iframe"
                                onReady={null}
                                onEnd={null}
                            />
                            {/* <header className="major">
                                <h2>Sed amet aliquam</h2>
                            </header>
                            <p>Nullam et orci eu.</p> */}
                        </div>
                    </section>

                </div>
                

                <FAQ />

            </div>

        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`