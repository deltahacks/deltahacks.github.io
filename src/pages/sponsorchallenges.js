import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import YouTube from 'react-youtube'


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

const SponsorChallenges = (props) => (
    <div>

        {/* Code for background video below this*/}
        {/*
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
        */ }
            {/* Code for background video ends here */}
                    

        <Helmet>
            <title>Sponsor Challenges :: DeltaHacks 5</title>
            <meta name="description" content="The DeltaHacks Sponsor Challenges" />
        </Helmet>


        <div id="main" className="gradient3">
            <Accordion>
                <h1>&#9651; Sponsor Challenges</h1>
                <div className="box">
                        <h3>What are the Sponsor Challenges?</h3>
                        <p>Each of the following challenges comes with their own prize category. For details on the prizes available, check out the event <u><a href="/devpost">DevPost</a></u>!<br />
                        </p>
                </div>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Innovation Factory - Autonomous Solutions Challenge</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <b>Problem Statement:</b>
                        <p>Cargo theft is a growing problem for Canadian businesses and their transportation providers. According to statistics from the Insurance Bureau of Canada’s National Cargo Theft Reporting Program, 2018 will see record cargo thefts. They estimate that over $55 million in goods will be stolen this year. Most of the cargo theft is orchestrated by organized crime rings in Toronto, Montreal, and Vancouver.</p>    
                        <p>In addition to the loss of the value of the goods stolen, businesses also suffer secondary financial losses due to increased insurance costs, increased security costs, increased technology costs to track assets, and loss of productivity when trucks are stolen and unavailable for use. There is also a safety issue for drivers when a cargo theft happens with a “live” load on the road.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <b>Potential Solution:</b>
                        <p>While most medium- to large-scale trucking companies have tractors and trailers equipped with GPS tracking devices, these are often only useful in recovering the stolen tractor/trailer/goods well after the theft has taken place and been reported.</p>
                        <p>However, an opportunity exists to create a “theft detection” app that will provide a real time alert to company management that a theft may be in progress in its early stages. Using artificial intelligence, the app could identify if a tractor or trailer equipped with GPS is in motion during a time period that is outside the norm, based on historical GPS data. For example, most thefts take place on weekends. The app would detect if a trailer that typically works on Mondays to Fridays is in motion on a Saturday, and then alert management that there may be a theft in progress.</p>
                        <p>This app would benefit businesses by giving them precious time to alert police, which would increase the chances of recovering the goods, minimize possible damage to the equipment, and increase the chances of apprehending the thieves. As cargo theft arrests increase, the number of incidents will decrease as organized crime moves on to easier theft opportunities. Insurance premiums would decrease for companies as their security profile improves.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <b>Potential Customers:</b>
                        <ul>
                            <li>Trucking and logistics companies</li>
                            <li>Companies with their own fleet of trucks</li>
                            <li>Insurance companies</li>
                            <li>Alarm and security companies</li>
                        </ul>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ McMaster Materials Department - The Ultimate Image Analysis Software</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>The properties of materials depend on the way in which atoms and defects are arranged in the material.  For this reason, materials engineers observe the material using optical and electron microscopes.  The images they take are often like attached figures.  What we would like you to do, is to measure the fractions of the light and dark “phases” in these figures.  The fraction could simply be expressed as number of pixels of a given color over the total number of pixels. The problem is complicated by the lighting conditions.  Sometimes you’ll get very good contrast between the phases (e.g. micro1.png) and sometimes there is less contrast.  In addition, the light and dark phases may contain “particles” like those shown in micro2.png.  You will be awarded (25) points for achieving each of the targets listed below as well as (50) points for the user interface and ease of use.</p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>Target 1:  Measure the fraction of the dark phase with an accuracy of 0.5% or better in an image that does not contain particles (e.g. micro1.png).</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>Target 2:  Measure the fraction of the dark phase with an accuracy of 0.5% or better in an image that contains particles (e.g. micro3.png).  For images with particles, the particles inside the dark phase should be counted with the dark phase and the ones inside the light phase should be counted with the light phase.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>Target 3:  Same as target 2, but you will be given images with uneven lighting conditions.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>Target 4:  You need to measure the average size (equivalent diameter) of the grains in the images.  The “grains” simply refer to the polygons that make the images.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>Target 5:  You are able to produce a histogram of the grain size.</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>On the day of the challenge, you will be provided with over 300 images to practice on.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ RBC - Made From Scratch</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>We are looking at the following areas for judging: Forget APIs and prepackaged products -- the core parts of the winning project here will be entirely built from scratch. Libraries and frameworks are allowed, but the part of the project that makes it awesome should be written or built by you. Essentially, students are welcome, even encouraged to use open source libraries, tools, frameworks but they cannot be the core or ‘special sauce’ of their solution.</p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For example, you can’t use the IMDB API for movie recommendations.  You can however, use Google geolocation API’s to help use maps to connect people’s phones to a bank’s branch, etc., floodzones, etc. – since you’re layering your own logic/analytics on top of some base info.  We do not want anyone reinventing the wheel, rather building an monster truck using one ;)</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ The Forge Outstanding Technology Award</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Awarded to two teams with the most commercial potential.</p>    
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ CIBC - Bridge Between Mobile and Retail Banking</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>In today’s modern world, more and more clients turn to mobile banking. It is the fastest way for clients to complete transactions, and retrieve information such as their credit scores. We would like clients to have a similar experience in retail banking. How would you bridge the gap between mobile and retail banking? So that clients are more likely to come into a banking center and have a resourceful and efficient experience that mobile banking provides.
                        </p>    
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ TD - Case Challenge</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <b>Problem Statement:</b>
                        <p>Canadians Lack Strong Confidence in Achieving their Financial Goals</p>    
                        <ul>
                            <li>79% of Canadians do not have a strong sense of confidence in their ability to achieve their financial goals</li>
                            <li>Only 18% strongly agree that they are knowledgeable about financial matters; and</li>
                            <li>Only one in five strongly agree that they’re successful in sticking with their financial strategies.</li>
                        </ul>
                        * Stats Based off study done by the Financial Planning Standards Council (Nov '15)
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <b>Challenge Question:</b>
                        <p>How can Artificial Intelligence enable people to have confidence in their future?</p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <b>Judging:</b>
                        <p>During your presentation you will be judged on the following criteria, it is up to you to address them all!</p>
                        <ul>
                            <li>Innovation – How unique is your solution?</li>
                            <li>Impact – How much is your idea expected to improve customer confidence?</li>
                            <li>Feasibility – How realistic is the solution for TD?</li>
                            <li>Use of Data & Technology, AI</li>
                            <li>Alignment with Case Challenge – Does your solution address the case challenge and problem statement?</li>
                        </ul>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        </div>

    </div>
)

export default SponsorChallenges