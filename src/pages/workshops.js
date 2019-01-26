import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import mentor from '../assets/images/mentor.jpg'

class Mentor extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Workshops - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>

               
        <div id="main" className="gradient">
        <section id="description">
            <div className="inner">
                <h2>DeltaHacks V :: Workshops</h2>
                <div className="table-wrapper">
                    {/* SATURDAY */}
                    <h4>SATURDAY : JAN 26, 2019</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>TIME</th>
                                <th>PRESENTER & TOPIC</th>
                                <th>VENUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1:00 PM - 2:00 PM</td>
                                <td>Natalie Chin - <i>A Deep Dive on Blockchain: What’s Behind the Cryptocurrency</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            <tr>
                                <td>1:00 PM - 2:30 PM</td>
                                <td>Darren Tu & Simon Gyorkos - <i>Build and Deploy Your First Website</i></td>
                                <td>ABB B118</td>
                            </tr>

                            <tr>
                                <td>2:00 PM - 2:30 PM</td>
                                <td>Materials Engineering - <i>Introduction to their Challenge</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            <tr>
                                <td>3:00 PM - 4:00 PM</td>
                                <td>Innovation Factory - <i>Introduction to their Challenge</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            <tr>
                                <td>3:30 PM - 4:30 PM</td>
                                <td>Ocean Cheung - <i>Intro to Android Dev</i></td>
                                <td>ABB B118</td>
                            </tr>

                            <tr>
                                <td>4:00 PM - 5:00 PM</td>
                                <td>TD - <i>Chatbot with Dialogflow</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            <tr>
                                <td>5:00 PM - 5:30 PM</td>
                                <td>RBC - <i>Use of Algo’s and Machine Learning</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            <tr>
                                <td>6:00 PM - 7:00 PM</td>
                                <td>Prasann Pandya - <i>Deploying Machine Learning Models on the Web</i></td>
                                <td>Thode MakerSpace</td>
                            </tr>

                            {/* Need details for below */}


                            <tr>
                                <td>6:30 PM - 7:30 PM</td>
                                <td>Thomas Dykstra - NodeJS + Azure</td>
                                <td>ABB B118</td>
                            </tr>

                            <tr>
                                <td>8:30 PM - 9:30 PM</td>
                                <td>Thomas Dykstra - Amazon Alexa</td>
                                <td>ABB B118</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
            <Accordion>
                <h2>Descriptions</h2>
                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ A Deep Dive on Blockchain: What’s Behind the Cryptocurrency <i>by Natalie Chin</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>The current Internet world is full of data breaches from corporations we have entrusted to keep our data safe – like Equifax, Yahoo, Facebook, and more. Blockchain allows us to take back the trust we’ve put in them – taking it into our own hands. In this workshop, we’re going to talk about what blockchain is, what difference it can make in our lives, setting up a development environment, and live-coding examples of cryptocurrency transactions.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Build and Deploy Your First Website<i> by Darren Tu & Simon Gyorkos</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>During this workshop, participants will learn the structure and syntax of basic HTML and CSS. Participants will receive a skeleton of a portfolio website and will update the HTML to include information about themselves and edit the CSS to style and position elements on their page! Then, they’ll deploy their new website.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Introduction to Challenge <i> by Materials Engineering</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>We will be introducing our challenge. <br />
                        <code><a href="/sponsorchallenges">Sponsor Challenges</a></code></p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Introduction to Challenge <i> by Innovation Factory</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>We will be introducing our challenge. <br />
                        <code><a href="/sponsorchallenges">Sponsor Challenges</a></code></p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Introduction to Android Development<i> by Ocean Cheung</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Learn how to build android apps for DeltaHacks, or how to polish one up to be used as a portfolio piece.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Chatbot with Dialogflow<i> by TD</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>An introduction to creating chatbots using Dialogflow.  This session provides an overview of creating a couple of simple chatbots using the Dialogflow graphical user interface(no programming required).  We will create a frequently asked questions or knowledge bot, as well as a simple order taking bot.  We will also explore the various integrations options available(Google Assistant, FaceBook Messenger, Telephony), discuss request fulfillment to backend services, and review some of the prebuilt agents that the product Dialogflow offers.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Use of Algo’s and Machine Learning<i> by RBC</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Hosted by Marat Khandros, Director of Development, Global Technology Infrastructure <br />
                        For our workshop we will show how a heavily used production app started as a simple java/springboot server and grew to encompass many points within GTI.  We will set up this base framework which some of the students might use for their projects.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Deploying Machine Learning Models on the Web<i> by Prasann Pandya</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Learn how to take a trained machine learning model and deploy it on a web server as an API which can then be used on a mobile app or a website. Attendees will also learn how to use some standard computer vision/NLP models already deployed as an API in their hackathon projects.</p>
                    </AccordionItemBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ NodeJS & Azure<i> by Thomas Dykstra</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Be sure to attend this workshop. We will start from the basics. No. Seriously. We are going to start with guiding you on how to download Visual Studio Code and take it from there. The Javascript web development is THE tool you need to get your hack to working! <br /> <br />

                        BONUS: we will be guiding each of you so that you can have a final product to take with you at the end of the session! <br /> <br />

                        P.S. Node.js and Express is sure to give you the foothold you need to land you an interview for your co-ops or future jobs.
                        </p>
                    </AccordionItemBody>
                </AccordionItem>


                <AccordionItem>
                    <AccordionItemTitle>
                        <p>+ Hacking with Amazon Alexa<i> by Thomas Dykstra</i></p>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>During this workshop you’ll learn the basics of how to build skills for Amazon Alexa to run on Alexa devices like the Amazon Tap or Echo. It covers setting up Alexa Skills Kit, developing your first skill, deploying your skill to AWS Lambda, and submitting your skill for publication.
                        </p>
                    </AccordionItemBody>
                </AccordionItem>

            </Accordion>
        </div>

    </div>
)
}
}

export default Mentor
