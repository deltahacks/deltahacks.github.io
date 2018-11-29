import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-info"></span>
                        <h3>Email</h3>
                        <a href="mailto:hello@deltahacks.com">hello@deltahacks.com</a>
                    </div>
                </section> 
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-question"></span>
                        <h3>Get Involved</h3>
                        <span>Want to be a mentor or pose challenges to the hackers? <a href="/mentor">deltahacks.com/mentor</a></span>
                    </div>
                </section>
            </section>

            {/* Below is the code for the contact form. Don't know how to implement it. Maybe revisit. */}
            {/* <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section> */}

            <section className="split">
                
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-bitcoin"></span>
                        <h3>Interested in sponsoring us?</h3>
                        <span><a href="mailto:sponsorship@deltahacks.com">sponsorship@deltahacks.com</a></span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Where We Live</h3>
                        <span>McMaster University, 1280 Main St. W<br />
                        Hamilton, ON <br />
                        Canada</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
