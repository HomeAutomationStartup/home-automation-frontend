import RaspberryPi from './../../../../Assets/RaspberryPi.svg';
import NodeMCU from './../../../../Assets/NodeMCU.svg';
import Arduino from './../../../../Assets/Arduino.svg';
import ConnectDevice from './../../../../Assets/ConnectDevice.svg';
import HomeSecurity from './../../../../Assets/CyberSecurity.svg';
import Visual from './../../../../Assets/Visual.svg';
import './Landing.css';
import { LandingPageTypography } from '../../../../Data/HomePageConstant';
import BrandCanvas from '../../../Others/Canvas/BrandCanvas/BrandCanvas';
import LazyLoadImageComp from '../../../Others/LazyLoadImageComp/LazyLoadImageComp';

const Landing = () => {
    const styles = {
        span_1: {
            width: '100%',
            height: '31.5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1.5rem',
        },

        span_2: {
            width: '100%',
            height: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };
    return (
        <div className="landing">
            <ul className="landing_content">
                {/* firstcolumn */}
                <li>
                    <section className="landing_content_col_1">
                        <span className="landing_content_col_1_row_1_slider">
                            <LazyLoadImageComp
                                // src={Automation}
                                src={Visual}
                                // src={Rpa}
                                height="80%"
                                width="80%"
                                alt="landing_img"
                            />

                            <div className="landing_content_col_1_row_1_slider_bck">
                                {LandingPageTypography.page_1.col_1_row_1}
                            </div>
                        </span>
                        <span
                            style={{
                                width: '100%',
                                height: '33%',
                                borderRadius: '1.5rem',
                                backdropFilter: 'blur(5px)',
                            }}
                        >
                            <BrandCanvas />
                        </span>
                    </section>
                </li>
                {/* secondcolumn */}
                <li>
                    <section className="landing_content_col_2">
                        <span className="landing_content_col_2_row_1_slider">
                            <LazyLoadImageComp
                                src={ConnectDevice}
                                height="80%"
                                width="80%"
                                alt="landingUI"
                            />
                            <div className="landing_content_col_2_row_1_slider_bck">
                                {LandingPageTypography.page_1.col_2_row_1}
                            </div>
                        </span>
                        <span className="landing_content_col_2_row_2_slider">
                            <LazyLoadImageComp
                                src={HomeSecurity}
                                height="80%"
                                width="80%"
                                alt="security"
                            />
                            <div className="landing_content_col_2_row_2_slider_bck">
                                {LandingPageTypography.page_1.col_2_row_2}
                            </div>
                        </span>
                    </section>
                </li>
                {/* thirdcolumn */}
                <li>
                    <section className="landing_content_col_3">
                        <span
                            style={{
                                ...styles.span_1,
                                flexDirection: 'column',
                                background: '#6db5ca',
                            }}
                        >
                            <span style={styles.span_2}>
                                <LazyLoadImageComp
                                    src={RaspberryPi}
                                    height="100%"
                                    width="100%"
                                    alt="raspberry"
                                />
                            </span>
                        </span>
                        <span
                            style={{
                                ...styles.span_1,
                                flexDirection: 'column',
                                background: '#b8d8e0',
                            }}
                        >
                            <span style={styles.span_2}>
                                <LazyLoadImageComp
                                    src={NodeMCU}
                                    height="80%"
                                    width="80%"
                                    alt="nodemcu"
                                />
                            </span>
                        </span>
                        <span
                            style={{
                                ...styles.span_1,
                                flexDirection: 'column',
                                background: '#94b0b7',
                            }}
                        >
                            <span style={styles.span_2}>
                                <LazyLoadImageComp
                                    src={Arduino}
                                    height="80%"
                                    width="80%"
                                    // aspect-ratio="16/9"
                                    alt="arduino"
                                />
                            </span>
                        </span>
                    </section>
                </li>
            </ul>
        </div>
    );
};

export default Landing;
