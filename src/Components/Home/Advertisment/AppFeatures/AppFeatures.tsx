import { motion } from 'framer-motion';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { ColorRules } from '../../../../Data/Constant';
import { LandingPageTypography } from '../../../../Data/HomePageConstant';
import AppFeatureAnimation from '../../AppFeatureAnimation/AppFeatureAnimation';
import ScrollDown from './../../../../Assets/ScrollDown.svg';
// import Shape from './../../../../Assets/Shape.svg';
import './AppFeatures.css';

const AppFeatures = () => {
    const [mode, setMode] = useState<boolean>(false);
    return (
        <div
            className="appFeatures"
            style={{ background: ColorRules[0].InnerBackground }}
        >
            <div className="appFeatures_content">
                <section className="appFeatures_content_heading">
                    <span className="appFeatures_content_heading_row_1">
                        <p style={{ color: ColorRules[0].InfoColor }}>
                            APP FEATURES
                        </p>
                        <h1 style={{ color: ColorRules[0].HeadingColor }}>
                            We created{' '}
                            <span style={{ color: '#00B5FF' }}>
                                modes for every situation.
                            </span>
                            <br />
                            Open bridge adapts to whatever life throws at you.
                        </h1>
                    </span>
                    <span className="appFeatures_content_heading_row_2">
                        <span className="appFeatures_content_heading_row_2_col_1">
                            <h1
                                style={{
                                    color: ColorRules[0].HeadingColor,
                                }}
                            >
                                Switch themes
                            </h1>
                            <ul>
                                <li>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setMode(false)}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                size: '2em',
                                                color: 'grey',
                                            }}
                                        >
                                            <span>
                                                <MdOutlineDarkMode />
                                            </span>
                                        </IconContext.Provider>
                                    </motion.div>
                                </li>
                                <li>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setMode(true)}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                size: '2em',
                                                color: 'lavender',
                                            }}
                                        >
                                            <span>
                                                <MdLightMode />
                                            </span>
                                        </IconContext.Provider>
                                    </motion.div>
                                </li>
                            </ul>
                        </span>
                        <span className="appFeatures_content_heading_row_2_col_2">
                            {!mode && (
                                <span>
                                    <h1
                                        style={{
                                            color: ColorRules[0].HeadingColor,
                                        }}
                                    >
                                        Dark Mode
                                    </h1>
                                    <p
                                        style={{
                                            color: ColorRules[0]
                                                .subHeadingColor,
                                        }}
                                    >
                                        {LandingPageTypography.page_2.dark}
                                    </p>
                                </span>
                            )}
                            {mode && (
                                <span>
                                    <h1
                                        style={{
                                            color: ColorRules[0].HeadingColor,
                                        }}
                                    >
                                        Light Mode
                                    </h1>
                                    <p
                                        style={{
                                            color: ColorRules[0]
                                                .subHeadingColor,
                                        }}
                                    >
                                        {LandingPageTypography.page_2.light}
                                    </p>
                                </span>
                            )}
                        </span>
                    </span>
                </section>
                <section className="appFeatures_content_featureList">
                    <span className="appFeatures_content_featureList_scroll_btn">
                        <img
                            src={ScrollDown}
                            height="4%"
                            width="4%"
                            loading="lazy"
                            alt="scroll_icon"
                        />
                    </span>
                    <span className="appFeatures_content_featureList_background_text">
                        UI / UX
                    </span>
                    {/* <span className="appFeatures_content_featureList_background">
                        <img
                            src={Shape}
                            height="80%"
                            width="80%"
                            loading="lazy"
                            alt="background"
                        />
                    </span> */}
                    <AppFeatureAnimation />
                </section>
            </div>
        </div>
    );
};

export default AppFeatures;
