import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'

class Mentor extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Be A Mentor - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" className="gradient">
            <section id="why" className="spotlights">
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
            </section>

            <section id="signup">
                <section>
                    <iframe width="0" height="0" name="hidden-form"></iframe>  
                    <form id="mentor-signup-form" onSubmit={this.handleSubmit} method="post" target='hidden-form' action="https://script.google.com/a/mcmaster.ca/macros/s/AKfycbzzqgracu41ephczSIgCrJrXR_gTx2d57B-914Sy3Jk7ae_-Po/exec">
                        <input type="hidden" name="bot-field" />
                        <div className="row uniform">

                            <div className="6u 12u(small)">
                                <label>Name *<input type="text" name="name" placeholder="Name" required /></label>   
                            </div>

                            <div className="6u 12u(small)">
                                <label>Email Address *<input type="email" name="email" id="email" placeholder="Email" required /></label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>Phone Number<input type="tel" name="phone" id="phone" placeholder="416-777-7777" /></label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>Type of Mentor *
                                <div className="select-wrapper">
                                    <select name="type" id="type">
                                        <option value="0">Technical Mentor</option>
                                        <option value="1">Challenger Mentor</option>
                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>Expertise *<input type="text" name="expertise" id="expertise" placeholder="Blockchain, VR, C++" /></label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>Organization *<input type="text" name="organization" id="organization" placeholder="McMaster University" /></label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>Dietary Restrictions *
                                <div className="select-wrapper">
                                    <select name="diet" id="diet">
                                        <option value="0">None</option>
                                        <option value="1">Vegetarian</option>
                                        <option value="2">Vegan</option>
                                        <option value="3">Halal</option>
                                        <option value="4">Gluten Free</option>
                                        <option value="5">Kosher</option>
                                        <option value="6">No Beef</option>
                                        <option value="7">Lactose Intolerant</option>
                                        <option value="8">Food/Nut Allergy</option>

                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>T-Shirt Size *
                                <div className="select-wrapper">
                                    <select name="tshirt" id="tshirt">
                                        <option value="">Select a size</option>
                                        <option value="1">S</option>
                                        <option value="2">M</option>
                                        <option value="3">L</option>
                                        <option value="4">XL</option>
                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="12u">
                            <div className="12u 12u">
                                <label>Why do you want to be a mentor? * (300 char)<textarea name="why" id="why" placeholder="I really enjoy helping people..." rows="4" required ></textarea></label>
                            </div>

                            <div className="12u 12u(small)">
                                <input type="checkbox" id="code" name="code" required />
                                <label htmlFor="code">I agree to abide by the MLH Code of Conduct and the MLH Privacy Policy.</label>
                            </div>

                            <ul className="actions">
                                <li><input type="submit" value="Sign up" className="special" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>

                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </div>

    </div>
)
}
}

export default Mentor
