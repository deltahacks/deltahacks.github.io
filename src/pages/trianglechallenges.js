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
import '../assets/scss/layout/_extra.scss'


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

const Challenges = (props) => (
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
            <title>Challenges :: DeltaHacks 5</title>
            <meta name="description" content="The DeltaHacks Triangle and Sponsor Challenges" />
        </Helmet>


        <div id="main" className="chalbg">
            <Accordion>
                <h1>&#9651; Triangle Challenges</h1>
                <div className="box">
                        <h3>What are the Triangle Challenges?</h3>
                        <p>DeltaHacks is a hackathon for social change, and completing one of the Triangle Challenges is a great way to make sure your hack makes a difference.</p>
                        <h3>What's in it for me?</h3>
                        <p>Apart from the satisfaction of your hack being used in real life, all hacks entered will also become part of the prize pool for the Triangle Challenges. The top 3 hacks in the prize pool will be awarded prizes! For details on the prizes available, check out the event <u><a href="/devpost">DevPost</a></u>!<br />
                        </p>
                </div>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Donation Shop Webpage - Food4Kids</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Food4Kids is looking for a webpage that will offer donors the ability to purchase specific items that will go into bags for the children to receive.  Ideally this will be one page that acts as a grocery store for donors to pick and choose their items. <br /><br />
                        <code><a href="https://drive.google.com/file/d/1GQzZtKRNTsirJO_f0LV2wV1rkrYKHYP-/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Tom Flood on Slack or by email: tom@food4kids.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>EzSec will bring a high-performance R1 unit (r1secure.com) and give whoever is able to hack it a prize.  Ezzeldin Tahoun will guide participants in how to penetration test the device.</p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Mac Pump App - McMaster University</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Dr. Maria E. Calvo B. MD. would like you to develop an application that makes it easy for physicians to communicate with and log data on their patients useing intrathecal pumps.</p>    
                        <p><code><a href="https://drive.google.com/file/d/1Y37UloYOfHXbH5q82mNcfkXU_AqaUvU0/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Maria Calvo on Slack or by email: marucalvo822@yahoo.com</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Digitising Construction</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Other than a few technologies that have seeped into the industry, the shortage of finding, hiring, and screening skilled labor is still very much a problem and a huge opportunity to explore.  As a seasoned individual within the construction domain, Royston would like to challenge teams to find a way to connect employers and talent within the constuction indursty.</p>    
                        <p><code><a href="https://drive.google.com/file/d/1YfEOQRlbESs10vDwbeDBzr-Eeg5Y84F6/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Royston Rebello on Slack or by email: roystonarebello@gmail.com</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Health Challenge - McMaster University</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Om is offering an additional $100 prize for the team who wins this challenge.  20-30% of all men and 10-15% of all women in North America are affected by Sleep Apnea, a condition wherin a person stops breathing during sleep.  This can cause discomfort and disrupt sleep paterns.  Om and Shriksha have built a functional prototype and collected data on healthy volunteers, but they want your help to develop a an application to detect changes in sleep patterns, useage of MLH hardware is accepted and encouraged.</p>    
                        <p><code><a href="https://drive.google.com/file/d/10IP319tSRL21ujhGYyZHcyUqSoGx0MyH/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Om Bhatt on Slack or by email: om.bhatt@medportal.ca</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Exercise for the Community - McMaster University</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Dr. Curnew's Cardiology Clinic wants you to develop an app that simply makes it easy, convenient, and fun for people in your community to connect and plan physical activities together.</p>    
                        <p><code><a href="https://drive.google.com/file/d/1UMInygFA2XizX53Df2yNvFyx7PdU9nYC/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Maggie Hou on Slack or by email: houy14@mcmaster.ca</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Community Engagement Tracking App - United Way</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Every year UWHH raises millions of dollars in order to invest in a wide range of social services across Hamilton & Halton. This is primarily done by investing over 153 programs across 82 agencies, or non-profit charitable partners. One of the key ways to raise money is through workplace campaigns. These involve building relationships with companies of all different sizes and providing a wide range of engagement and volunteers opportunities, or Days of Caring. Days of Caring are an important part of how we communicate the impact of donations. During campaign season, the logistics of managing these opportunities across hundreds of companies and dozens of managers (RDMs), can prove challenging. UWHH is looking for an app based solution that can help us coordinate the offering across multiple people, locations, and agencies. Details about what kind of information can be found below. We are also interested in gamifying the process as DOC opportunities are scarce and account managers (RDMS) put in request that can be hard to accommodate. Each manager believes their account to be the most important and we hope to introduce some limits and guidelines on who can request how many DOC opportunities and to begin building out a database that can help us track the impact of DOCS on donations. By introducing a point system based on criteria such as account size, specific departments, previous DOC usage, etc., we hope to create an internal marketplace for DOC that will allow RDM’s to choose, trade, and swap these opportunities and thus reduce the difficulty of allocating the resources in a constrained market. The impact of this would be substantial as understanding the impact of DOC can help UWHH become much more strategic about the use of this powerful experience and generate more donations and therefore impact the lives of more people.</p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Corinne Roynon on Slack or by email: CRoynon@uwhh.ca</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Social Impact App - Mission Services</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>We are requesting the development of A GALA (Gibson & Landsdale neighbourhoods) Youth Programs app featuring information about programs provided by Mission Services of Hamilton, CORE (Cathy Wever School), Pinkly Lewis Recreation Centre, 541 Eatery and Exchange, and Barton Library. These programs provide a mix of after-school activities, learning opportunities, food programs, mentoring and more to kids from low-income homes.</p>
                        <p><code><a href="https://drive.google.com/file/d/1hfGbSy2IavPaqzvczyKkWuJqdlps6HYr/view?usp=sharing">Specifications</a></code></p>
                    </AccordionItemBody>
                    <AccordionItemBody>
                        The idea is to have an app that provides an interactive space with the following features:
                        <ul>
                            <li>General information about all available programs</li>
                            <li>Includes a space for youth to be involved by providing suggestions or comments</li>
                            <li>Allows for youth to know programming in advance and for them to be involved in planning – provides maximum impact and ensures they get the most out of the program</li>
                            <li>Ease of access and communication allows more youth leadership</li>
                            <li>Provides accessible leadership development opportunities</li>
                            <li>Can be used by youth, parents, and program leaders</li>
                            <li>Provides a platform to interact and engage with parents as we supports kids with the resources (related to academics, nutrition, mental health, physical health, etc.)  to succeed in school and make plans for their future</li>
                            <li>Provides general info about available programs to all users as well as a second level sign-in so that youth and parents participating in a specific program can access their specific program area</li>
                            <li>Regarding youth user information, privacy of information is paramount</li>
                        </ul>  
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Katie Jessup on Slack or by email: kjessup@mission-services.com</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ HyperCare - Automation Challenge</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Build an application that helps automate the paperwork in healthcare, either for patients, clinicians or organizations.</p>    
                    </AccordionItemBody>
                </AccordionItem>
                {/* <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Wifi Security Hack - EzSec</p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p></p>    
                    </AccordionItemBody>
                    <AccordionItemBody>
                        <p>For more information, contact Ezzeldin Tahoun on Slack or by email: tahoune@mcmaster.ca </p>
                    </AccordionItemBody>
                </AccordionItem> */}
            </Accordion>
            <br />
            <br />
            <br />
        </div>

    </div>
)

export default Challenges