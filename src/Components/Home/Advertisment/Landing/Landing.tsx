import RaspberryPi from './../../../../Assets/RaspberryPi.svg';
import NodeMCU from './../../../../Assets/NodeMCU.svg';
import Arduino from './../../../../Assets/Arduino.svg';
import ConnectDevice from './../../../../Assets/ConnectDevice.svg';
import HomeSecurity from './../../../../Assets/CyberSecurity.svg';
import Visual from './../../../../Assets/Visual.svg';
import './Landing.css';
import { LandingPageTypography } from '../../../../Data/HomePageConstant';
import BrandCanvas from '../../../Others/Canvas/BrandCanvas/BrandCanvas';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing_content">
                {/* ************************first-colon************************** */}
                <section className="landing_content_col_1">
                    <span className="landing_content_col_1_row_1">
                        <img
                            src={Visual}
                            loading="lazy"
                            height="80%"
                            width="80%"
                            alt="landing_img"
                        />
                        <div className="landing_content_col_1_row_1_slider_bck">
                            {LandingPageTypography.page_1.col_1_row_1}
                        </div>
                    </span>
                    <span className="landing_content_col_1_row_2">
                        <BrandCanvas />
                    </span>
                </section>
                {/* ************************second-colon************************** */}
                <section className="landing_content_col_2">
                    <span className="landing_content_col_2_row_1">
                        <img
                            src={ConnectDevice}
                            loading="lazy"
                            height="80%"
                            width="80%"
                            alt="landingUI"
                        />
                        <div className="landing_content_col_2_row_1_slider_bck">
                            {LandingPageTypography.page_1.col_2_row_1}
                        </div>
                    </span>
                    <span className="landing_content_col_2_row_2">
                        <img
                            src={HomeSecurity}
                            loading="lazy"
                            height="80%"
                            width="80%"
                            alt="security"
                        />
                        <div className="landing_content_col_2_row_2_slider_bck">
                            {LandingPageTypography.page_1.col_2_row_2}
                        </div>
                    </span>
                </section>
                {/* ************************third-colon************************** */}
                <section className="landing_content_col_3">
                    <span className="landing_content_col_3_row_1">
                        <img
                            src={RaspberryPi}
                            loading="lazy"
                            height="95%"
                            width="95%"
                            alt="raspberry"
                        />
                    </span>
                    <span className="landing_content_col_3_row_2">
                        <img
                            src={NodeMCU}
                            loading="lazy"
                            height="80%"
                            width="80%"
                            alt="nodemcu"
                        />
                    </span>
                    <span className="landing_content_col_3_row_3">
                        <img
                            src={Arduino}
                            loading="lazy"
                            height="80%"
                            width="80%"
                            alt="arduino"
                        />
                    </span>
                </section>
            </div>
        </div>
    );
};

export default Landing;
