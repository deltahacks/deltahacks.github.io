import Snap from '../assets/images/contests/snapchat.jpg'
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Insta from '../assets/images/contests/instagram.jpg'
import Snap from '../assets/images/contests/snapchat.jpg'


import mentor from '../assets/images/mentor.jpg'
import def from '../assets/images/mentors/default.png'
import Chamu from '../assets/images/mentors/Chamu Rajasekera.jpg'
import Natalie from '../assets/images/mentors/Natalie Chin.jpg'
import Zichen from '../assets/images/mentors/Zichen Jiang.jpg'
import Umme from '../assets/images/mentors/Umme Salma.jpg'
import Ocean from '../assets/images/mentors/Ocean Cheung.jpg'
import Nelson from '../assets/images/mentors/Nelson Su.jpg'
import Danilo from '../assets/images/mentors/Danilo Joksimovic.jpg'
import Thomas from '../assets/images/mentors/Thomas Dykstra.jpg'
import Hassan from '../assets/images/mentors/Hassan Jasim.jpg'
import Kevin from '../assets/images/mentors/Kevin Pei.jpg'
import Hamid from '../assets/images/mentors/Hamid Yuksel.jpg'
import Avin from '../assets/images/mentors/Avin Regmi.jpg'
import Shehryar from '../assets/images/mentors/Shehryar Assad.jpg'
import Chinmay from '../assets/images/mentors/Chinmay Patel.jpg'
import Jason from '../assets/images/mentors/Jason Fok.jpg'
import Rajat from '../assets/images/mentors/Rajat Arora.jpg'
import Simon0 from '../assets/images/mentors/Simon Fan.jpg'
import Mustafa from '../assets/images/mentors/Mustafa Ismail.jpg'
import Sujan from '../assets/images/mentors/Sujan Kandeepan.jpg'
import Prasann from '../assets/images/mentors/Prasann Pandya.jpg'
import Ishmeet from '../assets/images/mentors/Ishmeet Singh.jpg'
import Jawadur from '../assets/images/mentors/Jawadur Rashid.jpg'
import Raymond from '../assets/images/mentors/Raymond Chen.jpg'
import Matthew from '../assets/images/mentors/Matthew Black.jpg'
import Robert from '../assets/images/mentors/Robert Skaljin.jpg'
import Ezzeldin from '../assets/images/mentors/Ezzeldin Tahoun.jpg'
import Tancred from '../assets/images/mentors/Tancred Yip.jpg'
import Simon1 from '../assets/images/mentors/Simon Gyorkos.jpg'
import Yiguo from '../assets/images/mentors/Yiguo Sun.jpg'
import Zheng from '../assets/images/mentors/Zheng Zheng.jpg'
import Damien from '../assets/images/mentors/Damien Tran.jpg'
import Tim from '../assets/images/mentors/Tim Mitra.jpg'
import Jillian from '../assets/images/mentors/Jillian Rivard.jpg'
import LJA from '../assets/images/mentors/LJA Bolongaita.jpg'
import Raj from '../assets/images/mentors/Raj Kumar.jpg'

//import mentors from '../assets/images/mentors'

class Mentors extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Mentors - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" className="alt gradient3">
            <section id="one">
                <div className="inner">
                
                <header className="major">
                        <h2>DeltaHacks V :: DEL-LITTY-HACKS CHALLENGES</h2>
                </header>
        <div>

            {/* <section id="why" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={mentor} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Want to be a mentor?</h3>
                            </header>
                            <p>Mentors are an irreplaceable part of the hackathon ecosystem. It's a great way to give back to the community.

                                <br /><br />As a Technical Mentor, you'll assist hackers with using new technologies, helping them learn what you already excel at!

                                <br /><br />At DeltaHacks, we Hack for Change. As a Challenger Mentor, you'll be able to provide a problem to hackers and guide them while they look for a solution! The possibilities are endless.
                            </p>
                            <ul className="actions">
                                <li><Link to="#signup" className="button down scrolly">Count me in!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section> */}

            <section id="description">
                <div>
                        <p> Hey hackers! We know you love hacking, but we also know sitting on your asses for hours at a time debugging can be mind-numbing. So we’ve come up with some challenges to get you up and about, discovering the campus and hopefully meeting more people! 
                       </p>
                      <p> We’ll have you guys taking pictures of things around McMaster (don’t worry, we won’t make you walk out in the cold too much!) and either sending them to us through Snapchat or posting them on your Instagram with a hashtag.

                       </p>

                       <p> To sweeten the deal, we’ve got prizes!!!! The first place winners on Snapchat and Instagram respectively will win a Google Home mini, and one more will go to a random winner, regardless of when you submitted. 
                       </p>

                   <p><b>DEADLINE:</b> The deadline for posting will be Sunday Jan 27th at 12pm. </p>

                       <h3>RULES:</h3>
                        <ol>
                            <li>Must be following us on Instagram (or Snapchat if that’s where you’ll be taking your photos)</li>
                            <li>All photos must be either
                                <ul> 
                                <li>Posted on your Instagram story, with @deltahacks tagged & make sure your profile is public! </li>
                                 <img src={Insta}/>
                                        <p> OR </p>
                                <li>Posted on your Snapchat story, with @deltahacks tagged & make sure you add us!
                                </li>
                                <img src={Snap}/>
                                
                                </ul> 

                            </li>

                        <li>All photos must be unique (no reposting!!!)</li>
                        <li>One contest entry per person </li>
                        <li>DM us (on Snapchat or Instagram) as soon as you’re finished to make sure you place correctly!</li>

                        </ol>
                
                        <h2>Scavenger Hunt</h2>
                        <p><b> Remember to tag @deltahacks in every post!</b></p>
                        <ol>
                            <li>Take a picture with your nametag and post it on your story.
</li>
                            <li>Take a picture with your teammates and post it!
</li>
                            <li>Attend a workshop, take a picture and story it!</li>
                            <li>Take a picture of you doing the cup stacking competition and story it!</li>
                            <li>Take a picture with one of the organizers (white DH shirt, black DH jacket) and story it with their name!                     <br />

                                Tell them how well they’re doing and give them some feedback about the event!
                            </li>
                            <li>Take a picture with the DeltaHacks 5 banner and post it!</li>   
                            <li>Take a picture of you and your team hacking away and POST!</li> 
                            <li>Take a selfie in the DH5 shirt and post it on your story!</li>
                            <li>Take a selfie of you eating a meal and story it!</li>
                            <li>Snap a picture with one of our sponsors and STORY IT!</li>
                        </ol>
                    
                </div>
            </section>


        </div>
        </div>
        </section>
        </div>
    </div>
)
}
}

export default Mentors
