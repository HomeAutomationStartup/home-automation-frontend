import { GiCeilingLight } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Url } from '../../../Data/Constant';
import { FcInfo } from 'react-icons/fc';
import { PatchDataWithoutToken } from '../../../Services/PatchDataWithoutToken';
import InformationBackdropModel from './../../Others/FramerMotionBackdrop/InformationBackdropModel/InformationBackdropModel';
import DeviceInfo from './../../MainApplicationComponent/DeviceInfo/DeviceInfo';
import './Device.css';

const Device = (props) => {
    /*************************************BACKDROP*************************************/

    const [infoModelOpen, setInfoModelOpen] = useState(false);
    const openInfoModel = () => {
        setInfoModelOpen(true);
    };
    const closeInfoModel = () => {
        setInfoModelOpen(false);
    };

    /*************************************BACKDROP*************************************/
    const [isOn, setIsOn] = useState(false);
    const [status, setStatus] = useState();
    const [lastModifiedTimeStamp, setLastModifiedTimeStamp] = useState();
    const toggleSwitch = () => {
        setIsOn(!isOn);
        PatchDataWithoutToken(Url.device_status_url + props.id, {
            status: !isOn,
            statusDetail: '',
        }).then((response) => {
            setLastModifiedTimeStamp(response.lastUpdatedAt);
            setStatus(response.status);
        });
    };
    useEffect(() => {
        setStatus(props.status);
        setIsOn(props.status);
    }, [props.status]);

    return (
        <div
            style={{ background: status ? '#b1d8d5' : '#2a3942' }}
            className="device"
        >
            <section className="device_status">
                <span>
                    <IconContext.Provider
                        value={{
                            size: '3em',
                            color: status ? 'black' : '#b1d8d5',
                        }}
                    >
                        <GiCeilingLight />
                    </IconContext.Provider>
                </span>
                <span>
                    <div
                        className="switch"
                        data-ison={isOn}
                        onClick={toggleSwitch}
                    >
                        <motion.div
                            className="handle"
                            layout
                            transition={spring}
                        />
                    </div>
                </span>
            </section>
            <section className="device_info">
                <div className="device_info_row_1">
                    <span
                        style={{
                            color: status ? 'black' : '#b1d8d5',
                        }}
                    >
                        {props.showName}
                    </span>
                    <span
                        style={{
                            color: status ? 'black' : '#b1d8d5',
                        }}
                    >
                        {props.deviceName}
                    </span>
                </div>
                <div className="device_info_row_2">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            infoModelOpen ? closeInfoModel() : openInfoModel()
                        }
                    >
                        <IconContext.Provider
                            value={{ size: '2em', color: 'white' }}
                        >
                            <span>
                                <FcInfo />
                            </span>
                        </IconContext.Provider>
                    </motion.div>
                </div>
            </section>
            {/***********************************BACKDROP*********************************/}

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {infoModelOpen && (
                    <InformationBackdropModel
                        backdropColor="rgb(202, 231, 234, 0.2)"
                        handleClose={closeInfoModel}
                    >
                        <DeviceInfo
                            headingText="Click on topic to copy"
                            subHeadingText={props.deviceTopic}
                            created={props.created}
                            lastModified={lastModifiedTimeStamp}
                            deviceType={props.deviceType}
                        />
                    </InformationBackdropModel>
                )}
            </AnimatePresence>

            {/***********************************BACKDROP*********************************/}
        </div>
    );
};
const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};

export default Device;
