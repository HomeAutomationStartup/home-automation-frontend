import { useEffect, useState } from 'react';
import LogIn from './../LogInForm/LogInForm';
import Register from './../RegisterForm/RegisterForm';
import './AuthContainer.css';
import { DarkColorRules } from '../../../Data/Constant';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import { AnimatePresence, motion } from 'framer-motion';
import InformationBackdropModel from '../../Others/FramerMotionBackdrop/InformationBackdropModel/InformationBackdropModel';
import { MdHighlightAlt } from 'react-icons/md';
import { VscColorMode } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

const AuthContainer = () => {
    const color_1 = DarkColorRules.OuterBackground;
    const color_2 = DarkColorRules.InnerBackground;
    const [openLoginForm, setOpenLoginForm] = useState(false);
    const { width, height } = useWindowDimensions();

    /*************************************BACKDROP*************************************/

    const [resolutionModelOpen, setResolutionModelOpen] = useState(false);
    const openResInfo = () => {
        setResolutionModelOpen(true);
    };
    const closeResInfo = () => {
        setResolutionModelOpen(false);
    };

    /*************************************BACKDROP*************************************/
    useEffect(() => {
        //console.count();
    });

    return (
        <div className="authContainer" style={{ background: color_1 }}>
            <section
                className="authContainer_btn"
                style={{ background: color_2 }}
            >
                <section className="authContainer_btn_col_1"></section>
                <section className="authContainer_btn_col_2">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IconContext.Provider
                            value={{
                                size: '2em',
                                color: 'lavender',
                            }}
                        >
                            <span>
                                <VscColorMode />
                            </span>
                        </IconContext.Provider>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            resolutionModelOpen ? closeResInfo() : openResInfo()
                        }
                    >
                        <IconContext.Provider
                            value={{
                                size: '2em',
                                color: 'lavender',
                            }}
                        >
                            <span>
                                <MdHighlightAlt />
                            </span>
                        </IconContext.Provider>
                    </motion.div>
                </section>
            </section>
            <section
                className="authContainer_form"
                style={{ background: color_2 }}
            >
                {openLoginForm && <LogIn toggleLoginForm={setOpenLoginForm} />}
                {!openLoginForm && (
                    <Register toggleLoginForm={setOpenLoginForm} />
                )}
            </section>

            {/***********************************BACKDROP*********************************/}

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {resolutionModelOpen && (
                    <InformationBackdropModel
                        backdropColor="rgb(202, 231, 234, 0.2)"
                        handleClose={closeResInfo}
                    >
                        This Application is currently in testing, so we need
                        your device resolution to make it even more better so
                        that it can run in all screen sizes. Your screen width
                        is <span style={{ color: 'orangered' }}>{width}</span>
                        and your screen height is{' '}
                        <span style={{ color: 'orangered' }}>{height}</span>.
                    </InformationBackdropModel>
                )}
            </AnimatePresence>

            {/***********************************BACKDROP*********************************/}
        </div>
    );
};

export default AuthContainer;
