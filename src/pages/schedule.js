import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'

class Mentor extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Schedule - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" className="gradient">

            <section id="description">
                <div className="inner">
                    <h2>DeltaHacks V :: Schedule</h2>
                    <div className="table-wrapper">
                        {/* SATURDAY */}
                        <h4>SATURDAY : JAN 26, 2019</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>TIME</th>
                                    <th>EVENT</th>
                                    <th>VENUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9:30 AM - 11:00 AM</td>
                                    <td>Registration & Breakfast</td>
                                    <td><a href="https://goo.gl/maps/dYT67hzPPX52"><u>Thode Library</u></a> <i>Lobby</i></td>
                                </tr>

                                <tr>
                                    <td>11:00 AM - 12:00 PM</td>
                                    <td>Opening Ceremony</td>
                                    <td>JHE 376 / JHE 264 <i>(overflow)</i></td>
                                </tr>

                                <tr>
                                    <td>12:00 PM</td>
                                    <td>Hacking Begins</td>
                                    <td>Thode Library <i>1st & 2nd Floor</i></td>
                                </tr>

                                <tr>
                                    <td>12:00 PM - 1:30 PM</td>
                                    <td>Group Formation/Idea Generation</td>
                                    <td>Thode Library <i>MakerSpace</i></td>
                                </tr>

                                <tr>
                                    <td>12:30 PM - 2:00 PM</td>
                                    <td>Lunch</td>
                                    <td>Thode Library <i>1st Floor</i></td>
                                </tr>


                                <tr>
                                    <td>1:00 PM - 7:00 PM</td>
                                    <td>Workshops</td>
                                    <td>Thode Makerspace & ABB B118</td>
                                </tr>

                                <tr>
                                    <td>2:30 PM - 3:00 PM</td>
                                    <td>Fire Drill</td>
                                    <td>AN Bournes Science Building</td>
                                </tr>

                                <tr>
                                    <td>7:00 PM - 9:00 PM</td>
                                    <td>Dinner</td>
                                    <td>Thode Library <i>1st Floor</i></td>
                                </tr>
                            </tbody>
                        </table>

                        {/* SUNDAY */}
                        <h4>SUNDAY : JAN 27, 2019</h4>
                        <table >
                            <thead>
                                <tr>
                                    <th>TIME</th>
                                    <th>EVENT</th>
                                    <th>VENUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12:00 AM - 1:00 AM</td>
                                    <td>Midnight Snack</td>
                                    <td>Thode Library <i>Lobby</i></td>
                                </tr>

                                <tr>
                                    <td>8:00 AM - 10:00 AM</td>
                                    <td>Breakfast</td>
                                    <td>Thode Library <i>Lobby</i></td>
                                </tr>

                                <tr>
                                    <td>11:30 AM - 1:30 PM</td>
                                    <td>Lunch</td>
                                    <td>Thode Library <i>Lobby</i></td>
                                </tr>

                                <tr>
                                    <td>12:00 PM</td>
                                    <td>Submissions Due</td>
                                    <td>DevPost</td>
                                </tr>

                                <tr>
                                    <td>1:00 PM</td>
                                    <td>Hacking Ends</td>
                                    <td>Thode Library <i>1st & 2nd Floor</i></td>
                                </tr>

                                <tr>
                                    <td>1:30 PM - 3:30 PM</td>
                                    <td>Project Expo</td>
                                    <td>Thode Library <i>2nd Floor</i></td>
                                </tr>

                                <tr>
                                    <td>3:30 PM - 5:30 PM</td>
                                    <td>Closing Ceremony, Project Demos, & Prizes</td>
                                    <td>JHE 376 / JHE 264 <i>(overflow)</i></td>
                                </tr>

                                <tr>
                                    <td>5:45 PM</td>
                                    <td>Buses Depart</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </div>
)
}
}

export default Mentor
