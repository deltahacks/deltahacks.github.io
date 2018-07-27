import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#one">About DeltaHacks</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sponsors">Sponsors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/team">Our Team</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://my.deltahacks.com" className="button special fit disabled">Dashboard</a></li>
                <li><a href="" className="button fit disabled">Apply</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
