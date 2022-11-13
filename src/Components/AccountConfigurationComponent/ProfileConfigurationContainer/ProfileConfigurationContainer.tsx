import './ProfileConfigurationContainer.css';
import { DarkColorRules } from '../../../Data/Constant';
import { ImProfile } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { AiFillEdit, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { useState } from 'react';
import FormToAddProfile from '../FormToAddProfile/FormToAddProfile';
import SelectProfile from '../SelectProfile/SelectProfile';

const ProfileConfigurationContainer = () => {
    const addProfileInstructions = [
        {
            id: 1,
            msg: 'Your profile name is your identification. It is used to build a unique digital profile about you specifically.',
        },
        {
            id: 2,
            msg: 'We need city name and country name to access current weather data for your location.',
        },
        {
            id: 3,
            msg: 'By adding rooms to your profile, you can differenciate between same type of devices.',
        },
        {
            id: 4,
            msg: 'After you create a profile, it can easily be edited if information needs to be changed by clicking on Edit section.',
        },
    ];
    const [switchProfileScreen, setSwitchProfileScreen] = useState(false);

    return (
        <div className="profileConfigurationContainer">
            <div className="profileConfigurationContainer_container">
                <section className="profileConfigurationContainer_container_column_1">
                    <section
                        style={{ background: DarkColorRules.OuterBackground }}
                        className="profileConfigurationContainer_container_column_1_nav"
                    >
                        <ul>
                            <li onClick={() => setSwitchProfileScreen(false)}>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconContext.Provider
                                        value={{ size: '2em', color: 'grey' }}
                                    >
                                        <span>
                                            <AiOutlineAppstoreAdd />
                                        </span>
                                    </IconContext.Provider>
                                </motion.span>
                                <span>
                                    <p
                                        style={{
                                            fontSize:
                                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                                        }}
                                    >
                                        Add
                                    </p>
                                </span>
                            </li>
                            <li onClick={() => setSwitchProfileScreen(true)}>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconContext.Provider
                                        value={{ size: '2em', color: 'grey' }}
                                    >
                                        <span>
                                            <ImProfile />
                                        </span>
                                    </IconContext.Provider>
                                </motion.span>
                                <span>
                                    <p
                                        style={{
                                            fontSize:
                                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                                        }}
                                    >
                                        Select
                                    </p>
                                </span>
                            </li>
                            <li>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconContext.Provider
                                        value={{ size: '2em', color: 'grey' }}
                                    >
                                        <span>
                                            <AiFillEdit />
                                        </span>
                                    </IconContext.Provider>
                                </motion.span>
                                <span>
                                    <p
                                        style={{
                                            fontSize:
                                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                                        }}
                                    >
                                        Edit
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="profileConfigurationContainer_container_column_2">
                    {!switchProfileScreen && (
                        <section className="profileConfigurationContainer_container_column_2_form">
                            <section className="profileConfigurationContainer_container_column_2_form_column_1">
                                <div
                                    style={{
                                        background:
                                            DarkColorRules.OuterBackground,
                                    }}
                                    className="profileConfigurationContainer_container_column_2_form_column_1_row_1"
                                >
                                    <p
                                        style={{
                                            fontSize:
                                                'calc(18px + (7 -18) * ((100vw - 1280px) / (1600 - 1280)))',
                                            lineHeight: '27px',
                                        }}
                                    >
                                        What do we use instructions for?
                                    </p>
                                </div>
                                <div
                                    style={{
                                        background:
                                            DarkColorRules.OuterBackground,
                                    }}
                                    className="profileConfigurationContainer_container_column_2_form_column_1_row_2"
                                >
                                    <ul>
                                        {addProfileInstructions.map((item) => (
                                            <li key={item.id}>
                                                <p
                                                    style={{
                                                        fontSize:
                                                            'calc(14px + (3 -14) * ((100vw - 1280px) / (1600 - 1280)))',
                                                        lineHeight: '27px',
                                                    }}
                                                >
                                                    {item.msg}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                            <section
                                style={{
                                    background: DarkColorRules.OuterBackground,
                                }}
                                className="profileConfigurationContainer_container_column_2_form_column_2"
                            >
                                <span
                                    style={{
                                        background: 'red',
                                        width: '100%',
                                        height: '100%',
                                        color: 'black',
                                    }}
                                >
                                    <FormToAddProfile />
                                </span>
                            </section>
                        </section>
                    )}
                    {switchProfileScreen && (
                        <section
                            style={{
                                background: DarkColorRules.OuterBackground,
                            }}
                            className="profileConfigurationContainer_container_column_2_profile"
                        >
                            <SelectProfile />
                        </section>
                    )}
                    {/* add edit component */}
                </section>
            </div>
        </div>
    );
};

export default ProfileConfigurationContainer;
