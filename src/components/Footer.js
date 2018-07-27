import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/deltahacks" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/thedeltahacks/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/deltahacks/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/company/deltahacks/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; DeltaHacks<br />
                Design: <a href="http://abhayraj.net/">Abhayraj Jain</a> | <a href="http://danrooks.ca/">Daniel Rooks</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
