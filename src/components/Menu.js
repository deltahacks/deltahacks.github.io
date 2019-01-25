import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner" onClick={props.onToggleMenu} href="javascript:;">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Contact Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#faq">FAQs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsors">Sponsors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mentors">Mentors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/trianglechallenges">&#9651; Challenges</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsorchallenges">Sponsor Challenges</Link></li>

            </ul>
            <ul className="actions vertical">
                <li><a href="/schedule" className="button fit">Schedule</a></li>
                <li><a href="/live" className="button special fit disabled">Live</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
