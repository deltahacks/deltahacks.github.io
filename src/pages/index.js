import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import FAQ from '../components/FAQ'
import YouTube from 'react-youtube'

import hackers from '../assets/images/hackers.jpg'
import workshop from '../assets/images/workshop.jpg'
import sponsors from '../assets/images/sponsors.jpg'


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

const Landing = (props) => (
    <div>
        <Helmet>
            <title>DeltaHacks V</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            {/* Code for background video below this*/}
            <div className="video-background">
                <div className="video-foreground">
                    <YouTube
                        videoId="3SizoIuIedc"
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


            {/* <section id="one"> */}
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
        

            <section id="who" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={hackers} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What's DeltaHacks?</h3>
                            </header>
                            <p>DeltaHacks is McMaster’s annual student hackathon for change. We want to encourage students in all fields of study to come together to build real world applications that create positive change. The difference between DeltaHacks and other hackathons is that we embrace elements of design thinking to make “hacks” that solve real world problems. <br /><br />

                            The ultimate goal behind this hackathon is to include, not only the engineering and computer science students, but all talented individuals from all backgrounds to collaborate, create, and bring ideas to life. We want you to shoot for the stars.
                            </p>
                            <ul className="actions">
                                <li><Link to="#workshops" className="button down scrolly">Keep going!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section id="workshops">
                    <Link to="#" className="image">
                        <img src={workshop} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Workshops!</h3>
                            </header>
                            <p>An integral part of the hackathon experience is you - the hacker! We want to make sure you have plenty of opportunities to learn that one skill you always wanted to. What better place than surrounded by the best coders around? We partner with industry professionals to host workshops that teach you exactly what you need to get that project working.</p>
                            <ul className="actions">
                                <li><Link to="#sponsors" className="button next scrolly">Any other cool stuff?</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section id="sponsors">
                    <Link to="#sponsors" className="image">
                        <img src={sponsors} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sponsors!</h3>
                            </header>
                            <p>Our sponsors help us put food on the table - for you! Without them, there would be no DeltaHacks. They're also a great source of information about their industry, and a good starting place for your next internship or job.</p>
                            {/* <ul className="actions">
                                <li><Link to="/sponsors" className="button disabled">Our Sponsors</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>

            </section>
        </div>

        <FAQ />
    </div>
)

export default Landing