import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Url } from '../../../Data/Constant';
import { useFetchData } from '../../../Hooks/useFetchData';
import { getAppAdminUser } from '../../../Utils/AuthHelperFunction';
import CommonGridDisplay from '../../Others/CommonGridDisplay/CommonGridDisplay';
import AddDevice from '../AddDevice/AddDevice/AddDevice';
import Device from '../Device/Device';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import './DeviceContainer.css';
import { AnimatePresence, motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FcRefresh } from 'react-icons/fc';
import { IoMdAddCircle } from 'react-icons/io';
import WindowBackdropModel from '../../Others/FramerMotionBackdrop/WindowBackdropModel/WindowBackdropModel';

const DeviceContainer = () => {
    /*************************************BACKDROP*************************************/

    const [addDeviceModelOpen, setAddDeviceModelOpen] = useState(false);
    const openAddDevice = () => {
        setAddDeviceModelOpen(true);
    };
    const closeAddDevice = () => {
        setAddDeviceModelOpen(false);
    };

    /*************************************BACKDROP*************************************/

    const { type } = useParams();
    const admin = getAppAdminUser();
    let profileName = 'shubham';
    const fetchData = () => {
        return axios.get(
            Url.devices_fetch_url +
                '?admin=' +
                admin +
                '&profilename=' +
                profileName +
                '&roomtype=' +
                type,
        );
    };

    const onSuccess = (data: any) => {
        console.log(data);
    };
    const onError = (error: any) => {
        toast.error(error.message);
    };
    const status = false;
    const { data, refetch } = useFetchData(
        'device',
        fetchData,
        onSuccess,
        onError,
        status,
    );
    const [reFreshDevice, setReFreshDevice] = useState(false);
    const fetchDeviceHandler = () => {
        setReFreshDevice(!reFreshDevice);
    };
    useEffect(() => {
        refetch();
    }, [type, reFreshDevice]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="deviceContainer">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    width: '100%',
                    height: '10%',
                    background: 'rgb(236,232,138,0.1)',
                    borderTopLeftRadius: '0.6rem',
                    borderTopRightRadius: '0.6rem',
                }}
            >
                <span>
                    Total device{' '}
                    <span
                        style={{
                            fontSize: '24px',
                        }}
                    >
                        {data?.data.length}
                    </span>
                </span>
                <span>
                    Device active{' '}
                    <span
                        style={{
                            fontSize: '24px',
                            color: 'green',
                        }}
                    >
                        8
                    </span>
                </span>
                <span>
                    Device Inactive{' '}
                    <span
                        style={{
                            fontSize: '24px',
                            color: 'red',
                        }}
                    >
                        4
                    </span>
                </span>
                <span>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => fetchDeviceHandler()}
                    >
                        <IconContext.Provider
                            value={{
                                size: '1.8em',
                            }}
                        >
                            <FcRefresh />
                        </IconContext.Provider>
                    </motion.div>
                </span>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '90%',
                    backgroundColor: '#0F0F0F',
                    paddingTop: '0.5rem',
                    borderBottomLeftRadius: '0.6rem',
                    borderBottomRightRadius: '0.6rem',
                }}
            >
                {data?.data.length === 0 && <AddDevice />}
                {data?.data.length !== 0 && (
                    <CommonGridDisplay het="74.8vh">
                        {data?.data.length !== 0 &&
                            data?.data.map((item: any) => (
                                <Device
                                    key={item.deviceId}
                                    showName={item.showName}
                                    deviceName={item.deviceName}
                                    status={item.status}
                                    id={item.deviceId}
                                    deviceTopic={item.deviceTopic}
                                    created={item.createdAt}
                                    deviceType={item.deviceType}
                                />
                            ))}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '190px',
                                height: '170px',
                                borderRadius: '2rem',
                                marginRight: '10px',
                                color: 'black',
                                padding: '1rem',
                                background: 'rgb(41, 57, 66, 0.2)',
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                    addDeviceModelOpen
                                        ? closeAddDevice()
                                        : openAddDevice()
                                }
                            >
                                <IconContext.Provider
                                    value={{
                                        size: '5rem',
                                        color: 'lavender',
                                    }}
                                >
                                    <IoMdAddCircle />
                                </IconContext.Provider>
                            </motion.div>
                        </div>
                    </CommonGridDisplay>
                )}
            </div>
            {/***********************************BACKDROP*********************************/}

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {addDeviceModelOpen && (
                    <WindowBackdropModel
                        backdropColor="rgb(202, 231, 234, 0.2)"
                        handleClose={closeAddDevice}
                    >
                        <AddDevice backCol="#0F0F0F" radius="0.6rem" />
                    </WindowBackdropModel>
                )}
            </AnimatePresence>

            {/***********************************BACKDROP*********************************/}
            <ToastContainer />
        </div>
    );
};

export default DeviceContainer;
