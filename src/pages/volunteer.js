import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import volunteer from '../assets/images/volunteer.jpg'

class Volunteer extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");
        // setTimeout(document.getElementById("volunteer-signup-form").reset(), 5000);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Volunteer - DeltaHacks V</title>
                    <meta name="description" content="Sign up to be a volunteer here!" />
                </Helmet>
                
                <div id="main" className="gradient2">
                    <section id="why" className="spotlights">
                        <section>
                            <Link to="#" className="image">
                                <img src={volunteer} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Help us by volunteering!</h3>
                                    </header>
                                    <p>
                                        Volunteers are the people that keep DeltaHacks running on the weekend of the event.
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
                            <form id="volunteer-signup-form" onSubmit={this.handleSubmit} method="post" target='hidden-form' action="https://script.google.com/macros/s/AKfycbyA4Vl3vhjYBRstmeW5-HhEHBiK8Oyyq6N1P-E3Ps0F0VBYgZU/exec">
                                <input type="hidden" name="bot-field" />
                                <div className="row uniform">

                                    <div className="6u 12u(small)">
                                        <label>Name<input type="text" name="name" placeholder="Name" required /></label>   
                                    </div>

                                    <div className="6u 12u(small)">
                                        <label>Email Address<input type="email" name="email" id="email" placeholder="Email" required /></label>
                                    </div>

                                    <div className="6u 12u(small)">
                                        <label>Phone Number<input type="tel" name="phone" id="phone" placeholder="416-777-7777" /></label>
                                    </div>

                                    <div className="6u 12u(small)">
                                        <label>Faculty/Major<input type="text" name="faculty" id="faculty" placeholder="Software Engineering" /></label>
                                    </div>

                                    <div className="6u 12u(small)">
                                        <label>Dietary Restrictions
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
                                        <label>T-Shirt Size
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

                                    <div className="12u 12u(small)">
                                    <p>Volunteers wanted for Friday night from 7PM - 9PM and Saturday 8AM - Sunday 7PM.</p>
                                        <label>I'm not available to volunteer between ...<input type="text" name="busy" id="busy" placeholder="1PM to 4PM on Saturday" /></label>
                                    </div>

                                    <div className="12u">
                                    <div className="12u 12u">
                                        <label>What prompted you to volunteer? (300 char)<textarea name="why" id="why" placeholder="I really enjoy helping people..." rows="4" required></textarea></label>
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

export default Volunteer
