import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import YouTube from 'react-youtube'

import '../assets/scss/layout/_sponsor.scss'

//images
import Microsoft from '../assets/images/sponsors/Microsoft_logo.svg'
import TD from '../assets/images/sponsors/TD_logo.svg'
import RBC from '../assets/images/sponsors/RBC_logo.svg'
import CIBC from '../assets/images/sponsors/CIBC_logo.svg'
import MLH from '../assets/images/sponsors/mlh_logo.svg'
import MacEng from '../assets/images/sponsors/mac_eng_logo.png'
import MacLib from '../assets/images/sponsors/mac_library_logo.png'
import MES from '../assets/images/sponsors/mes_logo.png'
import IF from  '../assets/images/sponsors/if_logo.png'
import CSE from '../assets/images/sponsors/cse_logo.svg'
import Rogers from '../assets/images/sponsors/rogers_logo.png'
import Loyalty from '../assets/images/sponsors/loyaltyone_logo.png'
import Synopsys from '../assets/images/sponsors/synopsys_logo.png'
import FDM from '../assets/images/sponsors/fdm_logo.png'
import Pinks from '../assets/images/sponsors/pinks_logo.png'
import BitAlino from '../assets/images/sponsors/bitalino_logo.png'
import ObieAi from '../assets/images/sponsors/obie_logo.png'
import StickerMule from '../assets/images/sponsors/stickermule_logo.png'
import Wolfram from '../assets/images/sponsors/wolfram_logo.png'
import Hypercare from '../assets/images/sponsors/hypercare_logo.png'
import Balsamiq from '../assets/images/sponsors/balsamiq_logo.svg'
import AM from '../assets/images/sponsors/am_logo.svg'
import StickerYou from '../assets/images/sponsors/stickeryou_logo.png'
import MSE from '../assets/images/sponsors/mse_logo.jpg'
import CanCart from '../assets/images/sponsors/canadacartage_logo.png'
import Forge from '../assets/images/sponsors/forge_logo.png'
import Sketch from '../assets/images/sponsors/sketch_logo.svg'
import Maplesoft from '../assets/images/sponsors/maplesoft_logo.png'
import CoinBerry from '../assets/images/sponsors/coinberry_logo.png'
import SoftHamil from '../assets/images/sponsors/softwarehamilton_logo.png'
import Comotion from '../assets/images/sponsors/comotion_logo.svg'

const BGvideoOptions = {
    height: '500',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay:1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop - DOESN'T WORK - used onEnd function
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0,
        enablejsapi: 0
    }
};

const Sponsors = (props) => (
    <div>
        <Helmet>
            <title>Sponsors :: DeltaHacks V</title>
            <meta name="description" content="Sponsors :: DeltaHacks V" />
        </Helmet>

          {/* Code for background video below this*/}
          <div className="video-background">
                <div className="video-foreground">
                    <YouTube
                        videoId="tJA4XoCAs1Y"
                        opts={BGvideoOptions}
                        className="video-iframe"
                        onReady={function(e) {
                            e.target.mute();
                          }}
                        onEnd={function(e) {
                            e.target.playVideo();
                        }}
                    />
                </div>
            </div>
            {/* Code for background video ends here */}
        
        <div id="main" className="alt">
        <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>Our Sponsors</h3><br />
                    </header>

            Powered By:
            {/* Platinum */}
            <div className="box alt">
                <div className="boxcontent powered">
                    <a href="https://www.microsoft.com" target="_blank"><img className="logos microsoft" src={Microsoft} alt="Microsoft" /></a><br />
                </div>
            </div>   

            Supported By:
            {/* Gold+ */}
            <div className="box alt">
                <div className="boxcontent sponsored">
                    <a href="https://www.innovationfactory.ca" target="_blank"><img className="logos IF" src={IF} alt="Innovation Factory" /></a>
                    <a href="https://www.canadacartage.com/" target="_blank"><img className="logos cancart" src={CanCart} alt="Canada Cartage" /></a>

                </div>
            </div>    

            <hr />

            {/* Gold */}
            <div className="box alt">
                <div className="boxcontent gold">
                    <a href="https://www.td.com" target="_blank"><img className="logos td" src={TD} alt="TD Canada Trust"/></a>
                </div>
            </div>  

            {/* Silver */}
            <div className="box alt">
                <div className="boxcontent silver">
                    <a href="https://www.cibc.com" target="_blank"><img className="logos cibc" src={CIBC} alt="CIBC"/></a>
                    <a href="https://www.rbcroyalbank.com" target="_blank"><img className="logos rbc" src={RBC} alt="RBC"/></a>
                    <a href="https://www.eng.mcmaster.ca/materials" target="_blank"><img className="logos mse" src={MSE} alt="Materials Science and Engineering"/></a>
                </div>
            </div>

            {/* Copper */}
            <div className="box alt">
                <div className="boxcontent copper"> 
                    <a href="https://www.cse-cst.gc.ca/en" target="_blank"><img className="logos cse" src={CSE} alt="CSE"/></a>
                    <a href="https://www.loyalty.com" target="_blank"><img className="logos loyaltyone" src={Loyalty} alt="Loyalty One"/></a>
                    <a href="https://www.synopsys.com" target="_blank"><img className="logos synopsys" src={Synopsys} alt="Synopsys"/></a>
                </div>
            </div>    

            {/* Base */}
            <div className="box alt">
                <div className="boxcontent base">
                    <a href="https://www.fdmgroup.com" target="_blank"><img className="logos fdm" src={FDM} alt="FDM Group"/></a>
                    <a href="https://corporate.arcelormittal.com/" target="_blank"><img className="logos am" src={AM} alt="Arcelor Mittal"/></a>
                    <a href="https://www.rogers.com" target="_blank"><img className="logos rogers" src={Rogers} alt="Rogers"/></a>
                    <a href="https://theforge.mcmaster.ca/" target="_blank"><img className="logos forge" src={Forge} alt="The Forge"/></a>
                    <a href="https://coinberry.com/" target="_blank"><img className="logos coinberry" src={CoinBerry} alt="Coinberry"/></a>
                </div>
            </div>

            {/* In Kind */}
            In-kind:
            <div className="box alt">
                <div className="boxcontent inkind">
                    <a href="https://www.bitalino.com" target="_blank"><img className="logos bitalino" src={BitAlino} alt="Bit Alino"/></a>
                    <a href="https://www.hypercare.com" target="_blank"><img className="logos hypercare" src={Hypercare} alt="Hypercare"/></a>
                    <a href="https://www.sketchapp.com/" target="_blank"><img className="logos sketch" src={Sketch} alt="Sketch"/></a>
                    <a href="https://www.stickeryou.com/" target="_blank"><img className="logos stickeryou" src={StickerYou} alt="Sticker You"/></a>
                    <a href="https://balsamiq.com/" target="_blank"><img className="logos balsamiq" src={Balsamiq} alt="Balsamiq"/></a>
                    <a href="https://www.maplesoft.com/" target="_blank"><img className="logos maplesoft" src={Maplesoft} alt="Maplesoft"/></a>
                    <a href="https://www.obie.ai" target="_blank"><img className="logos obie" src={ObieAi} alt="Obie Ai"/></a>
                    <a href="http://www.comotiongroup.ca/comotion-on-king/" target="_blank"><img className="logos comotion" src={Comotion} alt="Comotion On King"/></a>
                    <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank"><img className="logos stickermule" src={StickerMule} alt="Sticker Mule"/></a>
                    <a href="https://www.wolfram.com" target="_blank"><img className="logos wolfram" src={Wolfram} alt="Wolfram"/></a>
                </div>
            </div>

            {/* Food */}
            Food:
            <div className="box alt">
                <div className="boxcontent food">
                    <a href="https://www.facebook.com/pinksburgers/" target="_blank"><img className="logos pinks" src={Pinks} alt="Pinks Burgers"/></a>
                </div>
            </div>

            Partners:
            <div className="box alt">
                <div className="boxcontent partners">
                    <a href="https://mlh.io" target="_blank"><img className="logos mlh" src={MLH} alt="Major League Hacking" /></a>
                    <a href="" target="_blank"><img className="logos softhamil" src={SoftHamil} alt="Software Hamilton"/></a>
                    <a href="https://www.eng.mcmaster.ca/" target="_blank"><img className="logos maceng" src={MacEng} alt="McMaster Engineering" /></a>
                    <a href="https://library.mcmaster.ca/" target="_blank"><img className="logos maclib" src={MacLib} alt="McMaster Libraries" /></a>
                    <a href="http://www.macengsociety.ca/" target="_blank"><img className="logos mes" src={MES} alt="McMaster Engineering Society" /></a>
                </div>
            </div>              
            
            </div>
            </section>  
        </div>        
    </div>
)

export default Sponsors