import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
            <title>Be A Mentor - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" className="gradient">

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
                <div className="inner">
                    <h4>How can you help?</h4>
                    <p>We're looking for mentors to help fill the following roles:</p>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Description</th>
                                    <th>Time Commitment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Technical Mentor</td>
                                    <td>Provide guidance for participants using your expertise.</td>
                                    <td>At least 2 hours anytime between 12:00pm, January 26th and 12:00pm, January 27th.</td>
                                </tr>
                                <tr>
                                    <td>Challenger Mentor</td>
                                    <td>Inspire attendees to come up with innovative ideas. Pitch a project idea to teams during an Idea Generation Session on January 26th from 12PM to 3PM. Answer any questions the team may have about your idea.</td>
                                    <td>12pm - 3pm on Saturday, January 26th. Remain available, either in-person or remotely until noon on January 27th.</td>
                                </tr>
                                <tr>
                                    <td>Judge</td>
                                    <td>Critically analyze and evaluate finished projects at the Project Expo.</td>
                                    <td>3 hours on Sunday, January 27th.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>If you think you could help, please fill the form below! If you have questions, email us at <a href="mailto:relations@deltahacks.com">relations@deltahacks.com</a> and we'd be happy to answer them!</p>
                </div>
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
                                <label>Role *
                                <div className="select-wrapper">
                                    <select name="type" id="type">
                                        <option value="Technical">Technical Mentor</option>
                                        <option value="Challenger">Challenger Mentor</option>
                                        <option value="Judge">Judge</option>
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
                                        <option value="None">None</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Vegan">Vegan</option>
                                        <option value="Halal">Halal</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Kosher">Kosher</option>
                                        <option value="No Beef">No Beef</option>
                                        <option value="Lactose Intolerant">Lactose Intolerant</option>
                                        <option value="Food/Nut Allergy">Food/Nut Allergy</option>
                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="6u 12u(small)">
                                <label>T-Shirt Size *
                                <div className="select-wrapper">
                                    <select name="tshirt" id="tshirt">
                                        <option value="Error">Select a size</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                                </label>
                            </div>

                            <div className="12u">
                            <div className="12u 12u">
                                <label>Why do you want to be a mentor? * (~300 char)<textarea name="why" id="why" placeholder="I really enjoy helping people..." rows="4" required ></textarea></label>
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
