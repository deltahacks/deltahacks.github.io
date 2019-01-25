import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import mentor from '../assets/images/mentor.jpg'
import def from '../assets/images/mentors/default.png'
import Chamu from '../assets/images/mentors/Chamu Rajasekera.jpg'
import Natalie from '../assets/images/mentors/Natalie Chin.jpg'
import Zichen from '../assets/images/mentors/Zichen Jiang.jpg'
import Umme from '../assets/images/mentors/Umme Salma.jpg'
import Ocean from '../assets/images/mentors/Ocean Cheung.jpg'
import Nelson from '../assets/images/mentors/Nelson Su.jpg'
import Danilo from '../assets/images/mentors/Danilo Joksimovic.jpg'
import Thomas from '../assets/images/mentors/Thomas Dykstra.jpg'
import Hassan from '../assets/images/mentors/Hassan Jasim.jpg'
import Kevin from '../assets/images/mentors/Kevin Pei.jpg'
import Hamid from '../assets/images/mentors/Hamid Yuksel.jpg'
import Avin from '../assets/images/mentors/Avin Regmi.jpg'
import Shehryar from '../assets/images/mentors/Shehryar Assad.jpg'
import Chinmay from '../assets/images/mentors/Chinmay Patel.jpg'
import Jason from '../assets/images/mentors/Jason Fok.jpg'
import Rajat from '../assets/images/mentors/Rajat Arora.jpg'
import Simon0 from '../assets/images/mentors/Simon Fan.jpg'
import Mustafa from '../assets/images/mentors/Mustafa Ismail.jpg'
import Sujan from '../assets/images/mentors/Sujan Kandeepan.jpg'
import Prasann from '../assets/images/mentors/Prasann Pandya.jpg'
import Ishmeet from '../assets/images/mentors/Ishmeet Singh.jpg'
import Jawadur from '../assets/images/mentors/Jawadur Rashid.jpg'
import Raymond from '../assets/images/mentors/Raymond Chen.jpg'
import Matthew from '../assets/images/mentors/Matthew Black.jpg'
import Robert from '../assets/images/mentors/Robert Skaljin.jpg'
import Ezzeldin from '../assets/images/mentors/Ezzeldin Tahoun.jpg'
import Tancred from '../assets/images/mentors/Tancred Yip.jpg'
import Simon1 from '../assets/images/mentors/Simon Gyorkos.jpg'
import Yiguo from '../assets/images/mentors/Yiguo Sun.jpg'
import Zheng from '../assets/images/mentors/Zheng Zheng.jpg'
import Damien from '../assets/images/mentors/Damien Tran.jpg'
import Tim from '../assets/images/mentors/Tim Mitra.jpg'
import Jillian from '../assets/images/mentors/Jillian Rivard.jpg'
import LJA from '../assets/images/mentors/LJA Bolongaita.jpg'
import Raj from '../assets/images/mentors/Raj Kumar.jpg'

//import mentors from '../assets/images/mentors'

class Mentors extends React.Component {
    handleSubmit(event){
        alert("Form submitted. Thank you for your interest in DeltaHacks!");   
        // setTimeout(document.getElementById("mentor-signup-form").reset(), 5000);
    }

    render() {
        return (
    <div>
        <Helmet>
            <title>Mentors - DeltaHacks V</title>
            <meta name="description" content="Sign up to be a mentor here!" />
        </Helmet>
        
        <div id="main" >

            {/* <section id="why" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={mentor} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Want to be a mentor?</h3>
                            </header>
                            <p>Mentors are an irreplaceable part of the hackathon ecosystem. It's a great way to give back to the community.

                                <br /><br />As a Technical Mentor, you'll assist hackers with using new technologies, helping them learn what you already excel at!

                                <br /><br />At DeltaHacks, we Hack for Change. As a Challenger Mentor, you'll be able to provide a problem to hackers and guide them while they look for a solution! The possibilities are endless.
                            </p>
                            <ul className="actions">
                                <li><Link to="#signup" className="button down scrolly">Count me in!</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section> */}

            <section id="description">
                <div className="box">
                    <h1>Mentors</h1>
                    <p><span className="image left"><img src={Chamu} alt="" /></span><h3><br/>Chamu Rajasekera</h3><code>AR/VR,CG,NodeJS,React,Full Stack Web,C/C++,Python,Raspberry Pi,Arduino</code></p>
                    <p><span className="image left"><img src={Natalie} alt="" /></span><h3><br/>Natalie Chin</h3><code>Blockchain - Ethereum/State Channels</code></p>
                    <p><span className="image left"><img src={Zichen} alt="" /></span><h3><br/>Zichen Jiang</h3><code>Database, full stack</code></p>
                    <p><span className="image left"><img src={Umme} alt="" /></span><h3><br/>Umme Salma Gadriwala</h3><code>Python, Full-stack, C#, C, Java, Blockchain, Cryptography</code></p>
                    <p><span className="image left"><img src={Ocean} alt="" /></span><h3><br/>Ocean Cheung</h3><code>iOS, Programming</code></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h3><br/>Jaison Loodu</h3><code>Back-End Development, Java, Databases</code></p>
                    <p><span className="image left"><img src={Nelson} alt="" /></span><h3><br/>Nelson Su</h3><code>C++, C, Java, Web Dev, Software Testing (Manual & Automated)</code></p>
                    <p><span className="image left"><img src={Danilo} alt="" /></span><h3><br/>Danilo Joksimovic</h3><code>Web development, infrastructure, VR</code></p>
                    <p><span className="image left"><img src={Thomas} alt="" /></span><h3><br/>Thomas Dykstra</h3><code>Python, UNIX, Assembly, Java, C++</code></p>
                    <p><span className="image left"><img src={Hassan} alt="" /></span><h3><br/>Hassan Jasim</h3><code>C, C++, Java, Python, html, Django, react native, Visual Basic, Bash, NASM</code></p>
                    <p><span className="image left"><img src={Kevin} alt="" /></span><h3><br/>Kevin Pei</h3><code>Full Stack FE & BE, DevOps, Reason/OCaml</code></p>
                    <p><span className="image left"><img src={Hamid} alt="" /></span><h3><br/>Hamid Yuksel</h3><code>iOS (Swift), Angular, HTML/CSS, Java, JS, UX design</code></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h3><br/>Fangyu Wu</h3><code>C++, NodeJS, SQL, Microsoft Auzre Cloud</code></p>
                    <p><span className="image left"><img src={Avin} alt="" /></span><h3><br/>Avin Regmi</h3><code>AI</code></p>
                    <p><span className="image left"><img src={Shehryar} alt="" /></span><h3><br/>Shehryar Assad</h3><code>C, Java</code></p>
                    <p><span className="image left"><img src={Chinmay} alt="" /></span><h3><br/>Chinmay Patel</h3><code>Blockchain, Software Development, Creating Developer tools for Blockchain ecosystems</code></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h3><br/>Pedrum Mohammadi-Shemirani</h3><code>R, SQL, machine learning, statistics, data science</code></p>
                    <p><span className="image left"><img src={Jason} alt="" /></span><h3><br/>Jason Fok</h3><code>iOS, Rails, Machine Learning</code></p>
                    <p><span className="image left"><img src={Rajat} alt="" /></span><h3><br/>Rajat Arora</h3><code>Java, Node.js(ES6/7), angular 6, vue.js, MongoDB, MySQL, Python, sikitlearn, Aws, terraform, ci/cd</code></p>
                    <p><span className="image left"><img src={Simon0} alt="" /></span><h3><br/>Simon Fan</h3><code>Machine Learning, Cloud hosting/compute platforms, Python, C++, Backend, Databases</code></p>
                    <p><span className="image left"><img src={Mustafa} alt="" /></span><h3><br/>Mustafa Ismail</h3><code>VR, C</code></p>
                    <p><span className="image left"><img src={Sujan} alt="" /></span><h3><br/>Sujan Kandeepan</h3><code>Java, Python, C#, JavaScript, .NET, Full-Stack Web Dev, Android, Databases</code></p>
                    <p><span className="image left"><img src={Prasann} alt="" /></span><h3><br/>Prasann Pandya</h3><code>Deep Learning, Machine Learning,  Python</code></p>
                    <p><span className="image left"><img src={Ishmeet} alt="" /></span><h3><br/>Ishmeet Singh</h3><code>Python, C, C++, Html, CSS, Javascript</code></p>
                    <p><span className="image left"><img src={Jawadur} alt="" /></span><h3><br/>Jawadur Rashid</h3><code>Android</code></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h3><br/>Rajeeban Raveendran</h3><code>C++</code></p>
                    <p><span className="image left"><img src={Raymond} alt="" /></span><h3><br/>Raymond chen</h3><code>Node js and Python</code></p>
                    <p><span className="image left"><img src={Matthew} alt="" /></span><h3><br/>Matthew Black</h3><code>Blockchain</code></p>
                    <p><span className="image left"><img src={Robert} alt="" /></span><h3><br/>Robert Skaljin</h3><code>Chatbots, AI, Mobile</code></p>
                    <p><span className="image left"><img src={Ezzeldin} alt="" /></span><h3><br/>Ezzeldin Tahoun</h3><code>Cyber Security, Blockchain, Data Science, IoT </code></p>
                    <p><span className="image left"><img src={Tancred} alt="" /></span><h3><br/>Tancred Yip</h3><code>Iot, Project Managment, Idea Generation</code></p>
                    <p><span className="image left"><img src={Simon1} alt="" /></span><h3><br/>Simon Gyorkos</h3><code>Java, Python, Django, PHP, Laravel, Vue.js, Angular</code></p>
                    <p><span className="image left"><img src={def} alt="" /></span><h3><br/>Mikhail Adrenkov</h3><code>Android, C++, FPGAs, Go, Java, OpenGL, Python</code></p>
                    <p><span className="image left"><img src={Yiguo} alt="" /></span><h3><br/>Yiguo Sun</h3><code>Programming in C++, QML, Java, Python; Algorithms Design</code></p>
                    <p><span className="image left"><img src={Zheng} alt="" /></span><h3><br/>Zheng Zheng</h3><code>Databases, C++, C, Hadoop, Data Mining</code></p>
                    <p><span className="image left"><img src={Damien} alt="" /></span><h3><br/>Damien Tran</h3><code>C, C++, Neural Networks, TLS/SSL, Web Development, Machine Learning<br/></code></p>
                    <p><span className="image left"><img src={Tim} alt="" /></span><h3><br/>Tim Mitra</h3><code>iOS</code></p>
                    <p><span className="image left"><img src={Jillian} alt="" /></span><h3><br/>Jillian Rivard</h3><code>Chatbot Design (DialogFlow, IBM Watson)</code></p>
                    <p><span className="image left"><img src={LJA} alt="" /></span><h3><br/>LJA Bolongaita</h3><code>Product design, UI/UX</code></p>
                    <p><span className="image left"><img src={Raj} alt="" /></span><h3><br/>Raj Kumar</h3><code>Java</code></p>
                    {/* <p><span className="image left"><img src={mentor} alt="" /></span><h3><br/></h3><code></code></p> */}
                </div>
            </section>


        </div>
    </div>
)
}
}

export default Mentors
