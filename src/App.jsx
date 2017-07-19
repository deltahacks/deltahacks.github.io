import React, { Component } from 'react'
import './App.css'
import {TweenMax, TweenLite, Strong} from "gsap"
import Draggable from "gsap/Draggable"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { Dialog, RaisedButton, FlatButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ActionAndroid from 'material-ui/svg-icons/action/android'
import YouTube from 'react-youtube'
import MovieIcon from 'material-ui/svg-icons/av/play-arrow'
import CreateIcon from 'material-ui/svg-icons/content/create'
import imgAd from './img/tshirtad2.png'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            openShirt: false,
            player: null
        }

        this.onReady = this.onReady.bind(this)
    }

    componentDidMount() {
        let illu = document.getElementById("illu");
        let rocket = document.getElementById("rocket"); 
        let redFire = document.getElementById("red_fire"); 
        let yellowFire = document.getElementById("yellow_fire"); 
        let fire = document.getElementById("fire");

        let awaitingParticles = [];

        let xmlns = "http://www.w3.org/2000/svg"; 
        let svgns = "http://www.w3.org/1999/xlink"
        let fireScale = 1;
        let yellowFireScale = 1;
        let rotationSpeed = 0;
        let rocketProperSpeed = .5;
        let autoRotate = true;
        let t=0;


        TweenLite.set(rocket, { svgOrigin:"150, 300", x:"200", rotation:0, scale:.3 });
        TweenLite.set(fire, {svgOrigin:"950, 680" });
        TweenLite.set(yellowFire, {svgOrigin:"950, 680" });

        function fly(p,speed, delay){
          TweenMax.to(p, speed, {opacity:0, y:750-rotationSpeed/3+Math.random()*100, x:955-40+Math.random()*80, scale:4-rotationSpeed/100, fill:"#000000", delay:delay, ease:Strong.easeInOut, onComplete:resetParticle, onCompleteParams:[p]});
        }

        function resetParticle(p){
          TweenMax.set(p,{
            svgOrigin:"0, 0",
            x:955,
            y:730,
            opacity:1,
            scale:2.5,
            fill:"#EA4E39"
          });
          awaitingParticles.push(p);
        }


        function loop(){
          t++;
          let particlesNumber = Math.round(rule3(-rotationSpeed, 0, 1000, 1,3));
          let speedParticles = rule3(-rotationSpeed, 0, 1000, 1.5,.2);
          let fireScaleY = .8 + Math.random()*.3 -rotationSpeed/500;
          fireScaleY = Math.min(fireScaleY,1.5);
          let fireScaleX = 1+rotationSpeed/100;
          fireScaleX = Math.min(Math.max(fireScaleX,.4),1);
          yellowFireScale = .8 + Math.random()*.3;
          //*
          if (autoRotate){
            rotationSpeed += (rocketProperSpeed - rotationSpeed)/30;
            let rocketRotation = rocket._gsTransform.rotation;
            rocketRotation -= rotationSpeed;
            TweenLite.set(rocket, {
              rotation:rocketRotation
            });
          }
          //*/
          TweenLite.set(fire, {
            scaleX:fireScaleX,
            scaleY:fireScaleY
          });
          TweenLite.set(yellowFire, {
            scale:yellowFireScale,
            rotation:-20 + yellowFireScale*20
          });
          requestAnimationFrame(loop);
        }
        loop();

        function rule3(v,vmin,vmax,tmin, tmax){
          let nv = Math.max(Math.min(v,vmax), vmin);
          let dv = vmax-vmin;
          let pc = (nv-vmin)/dv;
          let dt = tmax-tmin;
          let tv = tmin + (pc*dt);
          return tv;
        }

    }

    onReady = (event) => {
        this.setState({player: event.target})
    }

    _handleRecapVideoOpen = () => {
        this.setState({open: true})
    }

    _handleRecapVideoClose = () => {
        this.setState({open: false})
    }

    _handleTshirtContestOpen = () => {
        this.setState({openShirt: true})
    }

    _handleTshirtContestClose = () => {
        this.setState({openShirt: false})
    }

    _refresh = () => {
        this.forceUpdate()
    }

    render() {
        let svg = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 642.1 646.6">
                <g id="moon">
                    <circle fill="#93959E" cx="305.5" cy="350.4" r="135.7" />
                    <circle fill="#D2D3D4" cx="291.1" cy="333.7" r="105.4" />
                    <circle fill="#D2D3D4" cx="346.2" cy="253.8" r="25.4" />
                    <circle fill="#D2D3D4" cx="406.3" cy="325.9" r="24.5" />
                    <circle fill="#D2D3D4" cx="247.8" cy="419.6" r="27.6" />
                    <circle fill="#FAFAFA" cx="338.9" cy="249.5" r="17.7" />
                    <circle fill="#FAFAFA" cx="400.9" cy="323.7" r="19.1" />
                    <circle fill="#FAFAFA" cx="273.5" cy="320.1" r="18.7" />
                    <circle fill="#FAFAFA" cx="245.3" cy="415.9" r="20.7" />
                    <circle fill="#FAFAFA" cx="217.5" cy="282.2" r="7.1" />
                    <circle fill="#FAFAFA" cx="337.5" cy="361.5" r="6.9" />
                    <circle opacity=".52" fill="#D2D3D4" cx="374.5" cy="437.2" r="12.4" />
                </g>
                <g id="astronaut">
                    <ellipse opacity=".19" fill="#1A222D" cx="297.7" cy="225.2" rx="40.7" ry="10" />
                    <circle fill="#9B835C" cx="270.1" cy="179.8" r="4.8" />
                    <circle fill="#9B835C" cx="318.9" cy="202" r="4.8" />
                    <path fill="#86878E" d="M321 184.5c-.7-6.4-10.6-8.2-10.6-8.2s-11.1 1.1-18.1.7c-6.7-.4-9.7 5.5-10 6.1-5 2.9-7.9-4.9-7.9-4.9l-7.9 7.8c6.7 7.9 6.4 10.2 11.1 11.8 2 .7 4.6-.4 7-1.9l.2.9.2 5.7 1.6 17.4h11.6l2.6-15 1.9 15h9.9l3.3-17 7.9-2.2c0 .1-2.1-9.8-2.8-16.2z"
                    />
                    <circle id="head" className="drop" fill="#93959E" cx="300.9" cy="158.7" r="20.2" />
                    <path id="mask" opacity=".57" fill="#1A222D" d="M310.7 169.7c.5-1.4.8-3 .8-4.6 0-7.3-5.9-13.3-13.3-13.3s-13.3 5.9-13.3 13.3c0 1.5.3 3 .7 4.3 4 1.9 13.2 5 25.1.3z" />
                    <g fill="#575C66">
                        <path d="M286.9 217c-2.3.8-3.9 2.4-3.9 4.1 0 2.7 3.5 4.8 7.7 4.8 4.3 0 7.7-2.1 7.7-4.8 0-.7-.3-1.4-.7-2-5.7 2.3-10.8-2.1-10.8-2.1zM313.2 216.3c-2.3 3-8 2.9-10.3 2.7-.3.5-.4 1-.4 1.6 0 2.7 3.3 4.8 7.4 4.8s7.4-2.1 7.4-4.8c0-1.9-1.7-3.5-4.1-4.3zM286.1 217zM313.3 216.2h-.1c-.1.1 0 .1.1 0-.1 0-.1 0 0 0z"
                        />
                    </g>
                    <ellipse fill="#93959E" cx="300.5" cy="190.6" rx="11.1" ry="8.8" />
                    <path fill="#93959E" d="M267.1 153.6h2.4V226h-2.4z" />
                    <ellipse transform="matrix(.9 .436 -.436 .9 103.474 -100.119)" fill="#9B835C" cx="269.8" cy="175.3" rx="3" ry="1.4" />
                    <path fill="#D2D3D4" d="M235.7 143.7h33.8V166h-33.8z" />
                    <g id="deltahacks" className="dh-flag">
                        <polygon fill="#3CBB9D" points="244.167,160.126 245.931,163.09 251.21,154.197 252.974,157.173 256.441,157.149 251.333,147.692 
                            "/>
                        <polygon fill="#D01386" points="245.913,163.09 260.223,163.078 261.874,160.051 251.131,160.106 252.956,157.173 251.205,154.172 
                            "/>
                        <polygon fill="#F1C219" points="251.315,147.692 256.417,157.165 252.956,157.173 251.131,160.106 261.874,160.051 254.742,147.692 
                            "/>
                        <polygon fill="#C31C74" points="250.8,154.846 252.048,156.991 249.77,160.854 261.439,160.843 261.874,160.046 251.132,160.101 
                            252.956,157.168 251.205,154.167 "/>
                        <polygon fill="#D8AD28" points="251.315,147.687 256.417,157.16 252.956,157.168 251.131,160.101 251.96,160.096 253.312,157.829 
                            257.724,157.829 252.187,147.687 "/>
                        <polygon fill="#0AB08F" points="245.564,162.434 245.976,163.127 251.268,154.222 253.019,157.211 256.496,157.211 256.214,156.692 
                            253.599,156.692 251.325,152.469 "/>
                    </g>

                </g>
                <g id="bang">
                    <path fill="#cf1287" d="M301.3 130.2c-.5 0-.9-.2-1.3-.5-.4-.4-.5-.8-.5-1.3s.2-.9.5-1.3c.4-.4.8-.5 1.3-.5s.9.2 1.3.5c.4.4.5.8.5 1.3s-.2.9-.5 1.3c-.4.3-.8.5-1.3.5zm-1.7-17.4h3.4v3.1l-.7 8.7h-1.9l-.7-8.7v-3.1z" />
                    <path fill="none" stroke="#cf1287" d="M314.1 131.7l10.1-9.7M327.7 147.1l10.7-5.4M276.7 124l9.4 10M271.3 138.4l9.3 3.3" />
                </g>

                <g id="rocket">
                <g id="smoke"></g>
                <g id="fire">
                    <path id="red_fire" fill="#EB6736" d="M921,714.8c0-18.3,14.8-33.1,33.1-33.1c18.3,0,33.1,14.8,33.1,33.1
                        c0,18.3-33.1,59.2-33.1,59.2S921,733.1,921,714.8" />
                    <path id="yellow_fire" fill="#ECA643" d="M954.8,690.9c-9.4,0-16.9,7.6-16.9,17c0,9.4,17,44.5,17,44.5s16.9-35.2,16.9-44.6
                        C971.7,698.4,964.1,690.9,954.8,690.9" />
                </g>

                <g id="cosmonaut">

                  <rect id="XMLID_59_" x="929.7" y="608.4" transform="matrix(-1 2.445246e-04 -2.445246e-04 -1 1911.4962 1241.0038)" fill="#059F9F" width="51.9" height="24.5" />
                  <circle id="XMLID_58_" fill="#F2F2F2" cx="936.6" cy="613.6" r="2.6" />
                  <circle id="XMLID_57_" fill="#FF662C" cx="943.1" cy="613.6" r="2.6" />
                  <circle id="XMLID_56_" fill="#F5B547" cx="949.6" cy="613.6" r="2.6" />
                  <path id="XMLID_55_" fill="#059F9F" d="M985.5,598c0,1.9-1.6,3.5-3.5,3.5l-50.2,0c-1.9,0-3.5-1.6-3.5-3.5l0-46.8
                        c0-1.9,1.6-3.5,3.5-3.5l50.2,0c1.9,0,3.5,1.6,3.5,3.5L985.5,598z" />
                  <path id="XMLID_54_" fill="#D8D1C3" d="M981.4,579.2c0,2.1-1.7,3.7-3.7,3.7l-41.5,0c-2,0-3.7-1.7-3.7-3.7l0-19.8
                        c0-2,1.7-3.7,3.7-3.7l41.5,0c2,0,3.7,1.7,3.7,3.7L981.4,579.2z" />
                  <path id="XMLID_43_" fill="#79552D" d="M977.7,555.7l-41.5,0c-2,0-3.7,1.7-3.7,3.7l0,8.7c3.8,2.7,8.4,4.3,13.4,4.3
                        c10.4,0,19.1-6.8,22-16.2c0.9,6.8,6.5,12.1,13.4,12.5l0-9.3C981.4,557.4,979.8,555.7,977.7,555.7" />
                  <path id="XMLID_35_" fill="#79552D" d="M967.3,558.8c0,3.8-2,7.2-5.1,9c5.3-0.6,9.4-5,9.4-10.4c0-0.5-0.1-1-0.1-1.6l-4.6,0
                        C967.1,556.7,967.3,557.7,967.3,558.8" />
                  <path id="XMLID_34_" fill="#79552D" d="M970.2,579.4c-0.6,0-1-0.4-1-1c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7
                        c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C971.2,578.9,970.7,579.4,970.2,579.4z" />
                  <path id="XMLID_33_" fill="#79552D" d="M951.2,579.4c-0.6,0-1-0.4-1-1c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7
                        c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C952.2,578.9,951.8,579.4,951.2,579.4z" />
                  <circle id="XMLID_32_" fill="#F5B547" cx="978.5" cy="593.1" r="2" />
                  <circle id="XMLID_31_" fill="#FF662C" cx="972" cy="593.1" r="2" />
                  <path id="XMLID_30_" fill="#5B5757" d="M985.5,564.4l0,10.1c8.4,1.9,14.7,9.4,14.7,18.4c0,10.4-8.4,18.8-18.8,18.8
                        c-10.4,0-18.8-8.4-18.8-18.8c0-2.8-2.2-5-5-5c-2.8,0-5,2.2-5,5c0,15.9,12.9,28.8,28.8,28.8c15.9,0,28.8-12.9,28.8-28.8
                        C1010.2,578.4,999.5,566.4,985.5,564.4z" />
                  <path id="XMLID_29_" opacity="0.3" fill="#F2F2F2" d="M945,555.8l-12.5,19.4l0,4.1c0,2.1,1.7,3.7,3.7,3.7l7,0l17.5-27.2L945,555.8
                        z" />
                </g>
                <g id="cabin">
                  <path id="XMLID_28_" fill="#f1c315" d="M855.9,722c-16-43-5.9-87.3,21.3-120.3l24.8,66.5c-17.5,6.5-26.2,26.4-19.7,43.9L855.9,722
                        z" />
                  <path id="XMLID_27_" fill="#f1c315" d="M1054.6,721.9c16-43,5.8-87.3-21.5-120.3l-24.7,66.6c17.5,6.5,26.3,26.4,19.8,43.9
                        L1054.6,721.9z" />

                  <rect id="XMLID_26_" x="896.4" y="552" transform="matrix(0.7067 -0.7075 0.7075 0.7067 -122.3782 822.5777)" opacity="0.2" fill="#FFFFFF" width="69" height="13.8" />

                  <rect id="XMLID_25_" x="899.7" y="567.4" transform="matrix(0.7067 -0.7075 0.7075 0.7067 -126.8512 833.3998)" opacity="0.2" fill="#FFFFFF" width="84" height="4.5" />
                  <path id="XMLID_19_" fill="#cf1287" d="M955.5,430.6c-52.1,30.2-87.1,86.5-87,150.9c0,32.5,8.9,62.9,24.4,88.9l125.5-0.1
                        c15.5-26,24.3-56.4,24.3-88.9C1042.6,517,1007.5,460.7,955.5,430.6z M955.6,625.4c-26.2,0-47.5-21.2-47.5-47.5
                        c0-26.2,21.2-47.5,47.5-47.5c26.2,0,47.5,21.2,47.5,47.5C1003.1,604.1,981.8,625.4,955.6,625.4z" />
                  <path id="XMLID_16_" fill="#0E9E9F" d="M959.1,426c-2.2,1.3-4.3,2.6-6.4,3.9l0.1,96.3c2.1-0.3,4.3-0.4,6.4-0.4
                        c26.2,0,47.5,21.2,47.5,47.5c0,8.9-2.5,17.3-6.7,24.4l45.1,0c0.8-6.8,1.2-13.8,1.2-20.8C1046.3,512.3,1011.2,456.1,959.1,426z" />
                  <path id="XMLID_13_" fill="#2B2A2A" d="M955.5,520.8c-32.5,0-58.9,26.4-58.8,58.9c0,32.5,26.4,58.9,58.9,58.8
                        c32.5,0,58.9-26.4,58.8-58.9C1014.4,547.2,988,520.8,955.5,520.8z M955.6,620.5c-22.5,0-40.8-18.2-40.8-40.7
                        c0-22.5,18.2-40.8,40.7-40.8c22.5,0,40.8,18.2,40.8,40.7C996.3,602.2,978.1,620.5,955.6,620.5z" />
                  <g id="XMLID_10_">
                    <path id="XMLID_12_" fill="#FFFFFF" d="M905.3,591.7c-0.4,0-0.8-0.2-1-0.5l-17.2-21.3c-0.5-0.6-0.4-1.4,0.2-1.8
                            c0.6-0.5,1.4-0.4,1.8,0.2l17.2,21.3c0.5,0.6,0.4,1.4-0.2,1.8C905.9,591.6,905.6,591.7,905.3,591.7" />
                    <path id="XMLID_11_" fill="#FFFFFF" d="M887.5,591.7c-0.3,0-0.6-0.1-0.9-0.3c-0.5-0.5-0.6-1.3-0.1-1.8l18.4-21.3
                            c0.5-0.5,1.3-0.6,1.8-0.1c0.5,0.5,0.6,1.3,0.1,1.8l-18.4,21.3C888.2,591.5,887.8,591.7,887.5,591.7" />
                  </g>
                  <circle id="XMLID_9_" fill="#2B2A2A" cx="959.9" cy="442.8" r="4.5" />
                  <circle id="XMLID_8_" fill="#2B2A2A" cx="959.9" cy="475.5" r="4.5" />
                  <circle id="XMLID_7_" fill="#2B2A2A" cx="959.9" cy="508.1" r="4.5" />
                  <circle id="XMLID_6_" fill="#2B2A2A" cx="1039" cy="590.9" r="3.7" />
                  <rect id="XMLID_5_" x="1009.4" y="558.8" fill="#2B2A2A" width="12.7" height="43" />
                  <rect id="XMLID_4_" x="934.3" y="670.4" fill="#2B2A2A" width="42.6" height="4.4" />
                  <circle id="XMLID_3_" fill="#2B2A2A" cx="1044.4" cy="704.2" r="4.5" />
                  <circle id="XMLID_2_" fill="#2B2A2A" cx="867" cy="709" r="4.5" />
                    </g>
                </g>
            </svg>
        )

        const actionsVideo = [
            <FlatButton
                label="Close"
                primary={true}
                labelStyle={{color: "white"}}
                onClick={this._handleRecapVideoClose} />
        ]

        const actionsContest = [
            <FlatButton
                label="Close"
                primary={true}
                labelStyle={{color: "white"}}
                onClick={this._handleTshirtContestClose} />
        ]

        const muiTheme = getMuiTheme(darkBaseTheme)

        return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="dh4-website-bg">
                        <div className="stars"></div>
                        <div className="twinkling"></div>
                        <div className="dh4-stars"></div>
                        <div className="content-container">
                            <div className="center-wrapper">
                                <p className="title">DELTAHACKS 4</p>
                                <p className="date"> Jan 27 - 28, 2018</p>
                                {svg}
                                <div className="button-container">
                                    <RaisedButton
                                        className="recap-video"
                                        label="DH3 Recap"
                                        labelStyle={{color: "white"}}
                                        secondary
                                        icon={<MovieIcon />}
                                        onClick={this._handleRecapVideoOpen} />
                                    <RaisedButton
                                        className="tshirt-contest"
                                        label="T-Shirt Contest"
                                        labelStyle={{color: "white"}}
                                        secondary
                                        icon={<CreateIcon />}
                                        onClick={this._handleTshirtContestOpen} />
                                </div>
                                <Dialog
                                    autoScrollBodyContent={true}
                                    actions={actionsContest}
                                    open={this.state.openShirt}
                                    bodyStyle={{paddingBottom: '5px', display: "flex", overflowY: "auto", justifyContent: "center"}}
                                    onRequestClose={this._handleTshirtContestClose}>
                                    <img className="contestImage" src={imgAd} onLoad={this._refresh} />
                                </Dialog>
                                <Dialog
                                    autoScrollBodyContent={true}
                                    actions={actionsVideo}
                                    open={this.state.open}
                                    bodyStyle={{paddingBottom: '0px', display: "flex", justifyContent: "center"}}
                                    onRequestClose={this._handleRecapVideoClose}>
                                        <YouTube videoId="QC10NjclAaw" onReady={this.onReady} />
                                </Dialog>
                                <p className="sponsors">
                                    Sponsors:
                                    <b/>
                                    <a href="mailto:sponsorship@deltahacks.com"> sponsorship@deltahacks.com</a>
                                </p>
                                <p className="mentors">
                                    Mentors/Judges:
                                    <b/>
                                    <a href="mailto:relations@deltahacks.com"> relations@deltahacks.com</a>
                                </p>
                                <p className className="contact">
                                    Contact Us:
                                    <b/>
                                    <a href="mailto:hello@deltahacks.com"> hello@deltahacks.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
        );
    }
}

export default App;
