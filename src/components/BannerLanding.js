import React from 'react'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>DeltaHacks V</h1>
            </header>

            <div className="content">
                <p>Jan 26-27, 2019   /   McMaster University</p>
                <a href="#contact" className="button scrolly">Contact Us</a>
                {/* <a href="https://deltahacks.us19.list-manage.com/subscribe/post?u=7ac221f02edc4242db4789d8f&amp;id=7f28a270ff" className="button">Mailing List</a> */}
                {/* <button>Scroll</button> */}
                <br />
                <ul className="icons">
                    <li><a href="https://twitter.com/deltahacks" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/thedeltahacks/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/deltahacks/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/company/deltahacks/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <br />
            </div>


            {/* <a href="/localhackday" className="12u button special">Local Hack Day on Dec 1st</a>  */}
            <a href="/mentor" className="6u button special">Be a Mentor</a>
            <a href="/volunteer" className="6u button ">Volunteer</a>

            {/* <form action="https://deltahacks.us19.list-manage.com/subscribe/post?u=7ac221f02edc4242db4789d8f&amp;id=7f28a270ff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <input type="hidden" name="bot-field" />
                <div className="row uniform">
                    <div className="6u 12u(xsmall)">
                        <label><input type="text" name="NAME" placeholder="Name"/></label>   
                    </div>
                    <div className="6u 12u(xsmall)">
                        <label><input type="email" name="EMAIL" id="email" placeholder="Email" /></label>
                    </div>
                    <div className="12u">
                        <ul className="actions">
                            <li><input type="submit" value="Join Mailing List" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </div>
                </div>
            </form> */}


        </div>
    </section>
)

export default BannerLanding
