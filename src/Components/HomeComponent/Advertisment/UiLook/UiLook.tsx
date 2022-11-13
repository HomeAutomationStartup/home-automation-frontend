import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Shape from './../../../../Assets/Shape.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import UiBanner from '../../UiBanner/UiBanner';
import ScrollDown from './../../../../Assets/ScrollDown.svg';
import './UiLook.css';
import { DarkColorRules } from '../../../../Data/Constant';
import LazyLoadImageComp from '../../../Others/LazyLoadImageComp/LazyLoadImageComp';
import { LandingPageTypography } from '../../../../Data/HomePageConstant';

const UiLook = () => {
    const [mode, setMode] = useState<boolean>(false);
    const color_1 = DarkColorRules.InnerBackground;
    return (
        <div className="uiLook" style={{ background: color_1 }}>
            <section className="uiLook_content" style={{ background: color_1 }}>
                <section className="uiLook_content_header">
                    <p>APP UI DESIGN</p>
                    <h1>
                        We created{' '}
                        <span style={{ color: '#00B5FF' }}>
                            modes for every situation.
                        </span>
                        <br />
                        Open bridge adapts to whatever life throws at you.
                    </h1>
                </section>
                <section className="uiLook_content_mode">
                    <span className="uiLook_content_mode_child_1">
                        <p>Switch themes</p>
                        <ul>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setMode(false)}
                                >
                                    <IconContext.Provider
                                        value={{ size: '2em', color: 'grey' }}
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
                    <span className="uiLook_content_mode_child_2">
                        {!mode && (
                            <span>
                                <h1>Dark Mode</h1>
                                <p>{LandingPageTypography.page_2.dark}</p>
                            </span>
                        )}
                        {mode && (
                            <span>
                                <h1>Light Mode </h1>
                                <p>{LandingPageTypography.page_2.light}</p>
                            </span>
                        )}
                    </span>
                </section>
                <section className="uiLook_content_banner">
                    <span className="uiLook_content_banner_scroll">
                        <LazyLoadImageComp
                            src={ScrollDown}
                            height="15%"
                            width="15%"
                            alt="scroll_icon"
                        />
                    </span>

                    <span className="uiLook_content_banner_background">
                        <LazyLoadImageComp
                            src={Shape}
                            height="80%"
                            width="80%"
                            alt="banner_background"
                        />
                    </span>
                    <span className="background_info">UI / UX</span>
                    <UiBanner />
                </section>
            </section>
        </div>
    );
};

export default UiLook;
