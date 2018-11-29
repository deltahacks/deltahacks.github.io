import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner" onClick={props.onToggleMenu} href="javascript:;">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Contact Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#faq">FAQs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/team">Our Team</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/apply">myDeltaHacks</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/mentor" className="button special fit">Be a Mentor</a></li>
                <li><a href="#" className="button fit">Volunteer</a></li>
                <li><a href="https://my.deltahacks.com" className="button fit disabled">Apply</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
