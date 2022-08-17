import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './UiLook.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import UiBanner from '../../UiBanner/UiBanner';

const UiLook = () => {
    const [mode, setMode] = useState<boolean>(false);
    return (
        <div className="uiLook">
            <section className="uiLook_content">
                <section className="uiLook_content_header">
                    <p>APP UI DESIGN</p>
                    <h1>
                        We created{' '}
                        <span style={{ color: '#C70CC4' }}>
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
                                <p>Dark Mode</p>
                                <p>
                                    Inspired by the very original Open Bridge
                                    designed back in 2016, this theme balances
                                    both contrast and performance.
                                </p>
                            </span>
                        )}
                        {mode && (
                            <span>
                                <p>Sun Mode </p>
                                <p>
                                    This mode was created to give you the best
                                    possible contrast in bright environments and
                                    even direct sunlight.
                                </p>
                            </span>
                        )}
                    </span>
                </section>
                <section className="uiLook_content_banner">
                    <UiBanner
                        col={mode ? 'rgb(34, 38, 42)' : 'rgb(21, 26, 30)'}
                    />
                </section>
            </section>
        </div>
    );
};

export default UiLook;
