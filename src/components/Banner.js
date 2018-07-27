import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>DeltaHacks V</h1>
            </header>
            <div className="content">
                <p><h3><FontAwesome.FaCalendar /> Jan 26-27, 2019   /   McMaster University</h3></p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
