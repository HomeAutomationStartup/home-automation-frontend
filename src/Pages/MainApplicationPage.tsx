import { getProfileId, logOut } from '../Utils/AuthHelperFunction';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useFetchData } from './../Hooks/useFetchData';
import { IconContext } from 'react-icons';
import { TbLogout } from 'react-icons/tb';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import {
    MdSpaceDashboard,
    MdSettingsSuggest,
    MdOutlineElectricalServices,
    MdSwitchAccount,
} from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { HiCollection } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { Url } from '../Data/Constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { useEffect, useState } from 'react';
import { mainApplicationPageStyles as styles } from './../Assets/GlobalCss';
import ConfirmationBackdropModel from '../Components/Others/FramerMotionBackdrop/ConfirmationBackdropModel/ConfirmationBackdropModel';

const MainApplicationPage = () => {
    const location = useLocation();
    let profileId = getProfileId();
    const navigate = useNavigate();

    /*************************************BACKDROP*************************************/

    const [logoutModelOpen, setLogoutModelOpen] = useState(false);
    const [accountModelOpen, setAccountModelOpen] = useState(false);
    const openLogout = () => {
        setLogoutModelOpen(true);
    };
    const closeLogout = () => {
        setLogoutModelOpen(false);
    };
    const openAccount = () => {
        setAccountModelOpen(true);
    };
    const closeAccount = () => {
        setAccountModelOpen(false);
    };

    /*************************************BACKDROP*************************************/

    const [firstRoomRoute, setFirstRoomRoute] = useState();
    const fetchData = () => {
        return axios.get(Url.profile_fetch_url + profileId);
    };

    const onSuccess = (data: any) => {
        console.log(data);
        toast.success('successfully fetched');
    };
    const onError = (error: any) => {
        toast.error(error.message);
    };
    const status = true;
    const { data } = useFetchData(
        'room',
        fetchData,
        onSuccess,
        onError,
        status,
    );
    let firstRoomRouteValue = data?.data.room[0].roomType;
    useEffect(() => {
        setFirstRoomRoute(firstRoomRouteValue);
    }, [firstRoomRouteValue]);

    const linkList_section_1 = [
        {
            id: 1,
            to: '/app/dashboard',
            icon: <MdSpaceDashboard />,
            currentPath: location.pathname.replace('%20', ''),
            listPath: '/app/dashboard',
        },
        {
            id: 2,
            to: `/app/room/${firstRoomRoute}`,
            icon: <HiCollection />,
            currentPath: `/${location.pathname.split('/')[1]}/${
                location.pathname.split('/')[2]
            }/`,
            listPath: '/app/room/',
        },
        {
            id: 3,
            to: 'app/premium',
            icon: <RiSecurePaymentLine />,
            currentPath: location.pathname.replace('%20', ''),
            listPath: '/app/app/premium',
        },
        // {
        //     id: 4,
        //     to: '/accountconfiguration',
        //     icon: <MdSwitchAccount />,
        //     currentPath: location.pathname,
        //     listPath: '/accountconfiguration',
        // },
    ];

    const linkList_section_2 = [
        {
            id: 1,
            to: 'app/connection',
            icon: <MdOutlineElectricalServices />,
            currentPath: location.pathname.replace('%20', ''),
            listPath: '/app/app/connection',
        },
        {
            id: 2,
            to: 'app/setting',
            icon: <MdSettingsSuggest />,
            currentPath: location.pathname.replace('%20', ''),
            listPath: '/app/app/setting',
        },
    ];

    return (
        <div style={styles.mainDiv}>
            <ul style={styles.outerUl}>
                <li style={{ ...styles.outerList_1, flexDirection: 'column' }}>
                    <span
                        style={{
                            ...styles.navSpan,
                            flexDirection: 'column',
                            height: '69.5%',
                        }}
                    >
                        <ul
                            style={{
                                ...styles.navList,
                                flexDirection: 'column',
                                padding: '1rem 0',
                            }}
                        >
                            <li style={styles.li}>
                                <IconContext.Provider
                                    value={{
                                        size: '2em',
                                        color: 'yellow',
                                    }}
                                >
                                    <IoLogoFreebsdDevil />
                                </IconContext.Provider>
                            </li>
                            {linkList_section_1.map((item: any) => (
                                <li
                                    key={item.id}
                                    style={{
                                        ...styles.li,
                                        borderLeft:
                                            item.currentPath === item.listPath
                                                ? '3px solid #38ff13'
                                                : '',
                                    }}
                                >
                                    <Link to={item.to}>
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                ...styles.motionDiv,
                                                position: 'relative',
                                            }}
                                        >
                                            <IconContext.Provider
                                                value={{
                                                    size: '1.8em',
                                                    color:
                                                        item.currentPath ===
                                                        item.listPath
                                                            ? 'lavender'
                                                            : 'rgb(44, 51, 57)',
                                                }}
                                            >
                                                {item.icon}
                                            </IconContext.Provider>
                                        </motion.div>
                                    </Link>
                                </li>
                            ))}
                            <li
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        accountModelOpen
                                            ? closeAccount()
                                            : openAccount()
                                    }
                                    style={{
                                        ...styles.motionDiv,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            size: '1.8em',
                                            color: 'lavender',
                                        }}
                                    >
                                        <MdSwitchAccount />
                                    </IconContext.Provider>
                                </motion.div>
                            </li>
                        </ul>
                    </span>
                    {/* ***********************************nav section division******************************* */}
                    <span
                        style={{
                            ...styles.navSpan,
                            flexDirection: 'column',
                            height: '29.5%',
                        }}
                    >
                        <ul
                            style={{
                                ...styles.navList,
                                padding: '2rem 0',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            {linkList_section_2.map((item: any) => (
                                <li
                                    key={item.id}
                                    style={{
                                        ...styles.li,
                                        borderLeft:
                                            item.currentPath === item.listPath
                                                ? '3px solid #38ff13'
                                                : '',
                                    }}
                                >
                                    <Link to={item.to}>
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                ...styles.motionDiv,
                                                position: 'relative',
                                            }}
                                        >
                                            <IconContext.Provider
                                                value={{
                                                    size: '1.8em',
                                                    color:
                                                        item.currentPath ===
                                                        item.listPath
                                                            ? 'lavender'
                                                            : 'rgb(44, 51, 57)',
                                                }}
                                            >
                                                {item.icon}
                                            </IconContext.Provider>
                                        </motion.div>
                                    </Link>
                                </li>
                            ))}
                            <li
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        logoutModelOpen
                                            ? closeLogout()
                                            : openLogout()
                                    }
                                    style={{
                                        ...styles.motionDiv,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            size: '1.8em',
                                            color: 'lavender',
                                        }}
                                    >
                                        <TbLogout />
                                    </IconContext.Provider>
                                </motion.div>
                            </li>
                        </ul>
                    </span>
                </li>
                {/* ***********************************app section division******************************* */}
                <li style={styles.outerList_2}>
                    <span
                        style={{
                            ...styles.mainAppContent,
                            flexDirection: 'column',
                        }}
                    >
                        <Outlet context={data} />
                    </span>
                </li>
            </ul>
            {/***********************************BACKDROP*********************************/}

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {accountModelOpen && (
                    <ConfirmationBackdropModel
                        backdropColor="rgb(202, 231, 234, 0.2)"
                        handleClose={closeAccount}
                        text="You want to switch profile, Are you sure?"
                        btn_text="Yes, Open profile"
                        setConfirmation={() =>
                            navigate('/accountconfiguration')
                        }
                    />
                )}
            </AnimatePresence>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {logoutModelOpen && (
                    <ConfirmationBackdropModel
                        backdropColor="rgb(202, 231, 234, 0.2)"
                        handleClose={closeLogout}
                        text="Oh no! You are leaving. Are you sure?"
                        btn_text="Yes, Log me out"
                        setConfirmation={() => logOut(navigate)}
                    />
                )}
            </AnimatePresence>

            {/*************************************BACKDROP*************************************/}
            <ToastContainer />
        </div>
    );
};

export default MainApplicationPage;
