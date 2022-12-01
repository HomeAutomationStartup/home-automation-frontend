import {
    page_4_policy_list,
    page_4_getHelp_list,
    page_4_developers_list,
    page_4_docs_list,
    page_4_socialContact_list,
} from './../../../../Data/HomePageConstant';
import { ColorRules } from './../../../../Data/Constant';
import './Contact.css';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import InformationBackdropModel from '../../../Others/FramerMotionBackdrop/InformationBackdropModel/InformationBackdropModel';
import useWindowDimensions from '../../../../Hooks/useWindowDimensions';
import WindowBackdropModel from '../../../Others/FramerMotionBackdrop/WindowBackdropModel/WindowBackdropModel';
import Policy from '../../Policy/Policy';

const Contact = () => {
    const { width, height } = useWindowDimensions();

    /*************************************BACKDROP*************************************/

    const [resolutionModelOpen, setResolutionModelOpen] = useState(false);
    // const openResInfo = () => {
    //     setResolutionModelOpen(true);
    // };
    const closeResInfo = () => {
        setResolutionModelOpen(false);
    };

    const [openPrivacyModel, setOpenPrivacyModel] = useState(false);
    // const openPrivacy = () => {
    //     setOpenPrivacyModel(true);
    // };
    const closePrivacy = () => {
        setOpenPrivacyModel(false);
    };

    /*************************************BACKDROP*************************************/

    const color_1 = ColorRules[0].InnerBackground;

    return (
        <div
            className="contact"
            style={{ background: color_1, color: ColorRules[0].HeadingColor }}
        >
            <section className="contact_content">
                <section
                    className="contact_content_row_1"
                    style={{
                        borderBottom: `1px solid ${ColorRules[0].BorderColor}`,
                    }}
                >
                    <section className="contact_content_row_1_col_1">
                        <span>
                            <p>
                                &reg;&nbsp;
                                <span
                                    style={{
                                        color: '#E2FF00',
                                        paddingLeft: '0',
                                    }}
                                >
                                    Sparetm
                                </span>
                            </p>
                            <p>
                                Make this app better by connecting with us
                                &#128512;
                            </p>
                        </span>
                        <span>
                            <ul>
                                {page_4_socialContact_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </span>
                    </section>
                    <section className="contact_content_row_1_col_2">
                        <span>
                            <p>DOCS</p>
                            <ul>
                                {page_4_docs_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </span>
                        <span>
                            <p>DEVELOPERS</p>
                            <ul>
                                {page_4_developers_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </span>
                        <span>
                            <p>GET HELP</p>
                            <ul>
                                {page_4_getHelp_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            // onClick={() =>
                                            //     resolutionModelOpen
                                            //         ? closeResInfo()
                                            //         : openResInfo()
                                            // }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </span>
                    </section>
                </section>
                <section className="contact_content_row_2">
                    <div className="contact_content_row_2_content">
                        <ul>
                            {page_4_policy_list.map((item) => (
                                <li key={item?.id}>
                                    <a
                                        href={item?.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        // onClick={() =>
                                        //     openPrivacyModel
                                        //         ? closePrivacy()
                                        //         : openPrivacy()
                                        // }
                                    >
                                        {item?.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            <li className="contact_content_row_2_content_brand_copyright">
                                COPYRIGHT &copy; 2022 OPENBRIDGE INC. <br />
                                ALL RIGHT RESERVED.
                            </li>
                        </ul>
                    </div>
                </section>
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
                        Open Bridge is under testing and needs user feedback. We
                        need some input on screen resolution and would love to
                        get feedback through email. Your screen width is{' '}
                        <span style={{ color: 'orangered' }}>{width}</span>
                        and your screen height is{' '}
                        <span style={{ color: 'orangered' }}>{height}</span>.
                    </InformationBackdropModel>
                )}
            </AnimatePresence>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {openPrivacyModel && (
                    <WindowBackdropModel
                        backdropColor={ColorRules[0].OuterBorder}
                        handleClose={closePrivacy}
                    >
                        <Policy />
                    </WindowBackdropModel>
                )}
            </AnimatePresence>

            {/***********************************BACKDROP*********************************/}
        </div>
    );
};

export default Contact;
