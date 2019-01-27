import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'
import Clock from './clock.js'
import $ from 'jquery'
import '../assets/scss/layout/_live.scss'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

// import {TwitterTimelineEmbed} from 'react-twitter-embed';

const BGvideoOptions = {
  height: '500',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0,
    modestbranding: 1, // Hide the Youtube Logo
    loop: 1, // Run the video in a loop - DOESN'T WORK - used onEnd function
    fs: 0, // Hide the full screen button
    cc_load_policy: 0, // Hide closed captions
    iv_load_policy: 3, // Hide the Video Annotations
    autohide: 0,
    enablejsapi: 0,
  },
}

class Test extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Live Page :: DeltaHacks</title>
          <meta name="description" content="Generic Page" />
        </Helmet>

        {/* Code for background video below this*/}
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="3SizoIuIedc"
              opts={BGvideoOptions}
              className="video-iframe"
              onReady={function(e) {
                e.target.mute()
              }}
              onEnd={function(e) {
                e.target.playVideo()
              }}
            />
          </div>
        </div>
        {/* Code for background video ends here */}

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <div>
                <h1 className="size button special fit">
                  Hacking{' '}
                  <Clock
                    startsIn="January, 26, 2019, 12:00"
                    endsIn="January, 27, 2019, 13:00"
                  />{' '}
                  
                </h1>
              </div>
              <br />

              <table className="margin">
                <th>
                  <a href="/slack" className="button special fit icon fa-slack">
                    Slack
                  </a>
                </th>
                <th>
                  <a
                    href="/schedule"
                    className="button special fit icon fa-calendar"
                  >
                    Schedule
                  </a>
                </th>
                <th>
                  <a
                    href="/workshops"
                    className="button special fit icon fa-laptop"
                  >
                    Workshops
                  </a>
                </th>
                <th>
                  <a
                    href="/challenges"
                    className="button special fit icon fa-tasks"
                  >
                    Challenges
                  </a>
                </th>
                <th>
                  <a
                    href="/mentors"
                    className="button special fit icon fa-users"
                  >
                    Mentors
                  </a>
                </th>
              </table>

              <Accordion className="paddingmain">
                <AccordionItem>
                  <AccordionItemTitle className="paddingtitle">
                    <p className="button special fit icon fa-info">
                      Important Info
                    </p>{' '}
                  </AccordionItemTitle>
                  <AccordionItemBody className="paddingbody">
                    <div className="box">
                      <div className="row boxtitles">
                        <div className="6u 12u(xsmall)">
                          <h4>Communications</h4>
                          <p>
                            Questions? Find us on <a href="/slack">Slack</a>.
                            <br />
                            Message on the #help channel or ask @Obie!
                          </p>

                          <h4>Our Locations</h4>
                          <p>
                          <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a><br />
                          <a href="https://goo.gl/maps/aBzKiZqGo2P2">ABB</a><br />
                          <a href="https://goo.gl/maps/W49CANH7LKU2">JHE</a><br />
                          </p>
                        </div>

                        <div className="6u 12u(xsmall)">
                          <h4>Links</h4>
                          <p>
                            Final Submissions due Sunday @ 12pm -{' '}
                            <a href="https://deltahacks5.devpost.com">Click Here</a>!<br />
                            Rent Hardware @ Thode 1st Floor:{' '}
                            <a href="https://hardware.mlh.io">Hardware List</a>
                          </p>
                          <h4>WiFi</h4>
                          <p>
                            SSID: <code>DeltaHacks</code>
                            <br />
                            Password: <code>deltahacks2019</code>
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
          
                                

              {/* DAY ONE */}
              {/* <div className="box sizing">
                <div className="boxtitles">
                  <h4>Registration and Breakfast</h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    Lobby <br /> 9:30am - 11:00am
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 09:30"
                        endsIn="January, 26, 2019, 11:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="box sizing">
                <div className="boxtitles">
                  <h4>Opening Ceremony</h4>
                  <p>
                    JHE 376 & 264 <br /> 11:00am - 12:00pm
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 11:00"
                        endsIn="January, 26, 2019, 12:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="box sizing">
                <div className="boxtitles">
                  <h4>Group Formation + Idea Generation</h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    MakerSpace <br /> 12:00pm - 1:30pm
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 12:00"
                        endsIn="January, 26, 2019, 13:30"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="box sizing">
                <div className="boxtitles">
                  <h4> Lunch</h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    1st Floor <br /> 12:30pm - 2:00pm
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 12:30"
                        endsIn="January, 26, 2019, 14:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div> */}

              <div className="box sizing">
                <div className="boxtitles">
                  <h4>Series of <a href="/workshops">Workshops</a></h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    MakerSpace & ABB B118 <br /> 1:00pm - 7:00pm
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 13:00"
                        endsIn="January, 26, 2019, 19:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="box sizing">
                <div className="boxtitles">
                  <h4>Dinner</h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    1st Floor <br /> 7:00pm - 9:00pm <br />
                    Catered by: Royal Cumin
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 19:00"
                        endsIn="January, 26, 2019, 21:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>

              <div className="box sizing">
                <div className="boxtitles">
                  <h4>MLH Activity</h4>
                  <p>
                    <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a>{' '}
                    2nd Floor <br /> 9:00pm - 11:00pm
                  </p>
                  <div className="timer">
                    <a href="#" className="button special small timer">
                      <Clock
                        startsIn="January, 26, 2019, 21:00"
                        endsIn="January, 26, 2019, 23:00"
                      />
                      
                    </a>
                  </div>
                </div>
              </div>
              {/* DAY TWO */}

              {/* <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Midnight Snack</h4>
                        <p>
                        <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> Lobby <br /> 12:00am - 1:00am
                        </p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 00:00'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Coffee Pong</h4>
                        <p><a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> Lobby <br /> 1:00am - 1:30am</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 1:00'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Breakfast</h4>
                        <p>
                        <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> Lobby <br /> 8:30am - 10:00am <br />
                        Catered by: Tim Hortons
                        </p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 8:30'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Workshop: How to Demo</h4>
                        <p><a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> Lobby <br /> 10:00am - 11:00am</p> LOCATION????
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 10:00'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Lunch</h4>
                        <p>
                        <a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> Lobby <br /> 11:30am - 1:30pm <br />
                        Catered by: Lazeez Shawarma
                        </p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 11:30'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Submissions Due</h4>
                        <p><a href="">DevPost</a> Lobby <br /> 12:00pm</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 12:00'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Project Expo</h4>
                        <p><a href="https://goo.gl/maps/dYT67hzPPX52">Thode Library</a> 2nd Floor <br /> 1:30pm - 3:30pm</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 13:30'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Closing Ceremony, Project Demos, & Prizes</h4>
                        <p>JHE 376 & 264 <br /> 3:30am - 5:30pm</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 15:30'/></a>
                        </div>
                        </div>
                        </div>

                        <div className="box sizing">
                        <div className="boxtitles">
                        <h4>Busses Depart</h4>
                        <p>5:45pm</p>
                        <div className="timer">
                        <a href="#" className="button special small timer">
                        <Clock startsIn='January, 27, 2019, 17:45'/></a>
                        </div>
                        </div>
                        </div> */}

              {/* DAY TWO */}

              {/* <div className="box">
                                <h4 className="boxtitles">Twitter</h4>
                                    <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="DeltaHacks"
                                    options={{height: 1000}}
                                    theme= "dark"
                                    transparent= "true"
                                    borderColor= "#FFFFFF"
                                    />
                            </div>  */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}
export default Test

//

// const Sponsors = (props) => (
//     <div>

//     </div>
// )

// export default Sponsors
