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
                <li><Link onClick={props.onToggleMenu} to="/schedule">Mentors</Link></li>
                {/* <li><Link onClick={props.onToggleMenu} to="/schedule">Schedule</Link></li> */}

            </ul>
            <ul className="actions vertical">
                <li><a href="/live" className="button fit">Schedule</a></li>
                <li><a href="/live" className="button special fit">Live</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
