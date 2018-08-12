import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Thanks = (props) => (
    <div>
        <Helmet>
            <title>Thank you.</title>
            <meta name="description" content="Thanks for Subscribing" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thanks!</h1>
                    </header>
                    <p>Thanks for subscribing to our mailing list! We promise not to spam or share your email address with advertisers.</p>
                    <a href="/" className="special button">Back</a>
               </div>
            </section>
        </div>

    </div>
)

export default Thanks