import { RiAccountCircleLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useLocation, useOutletContext } from 'react-router-dom';
import NavBtn from '../Components/Others/Button/NavBtn';
import { motion } from 'framer-motion';
import DeviceContainer from '../Components/MainApplicationComponent/DeviceContainer/DeviceContainer';

const RoomPage = () => {
    const dataValue = useOutletContext();
    const location = useLocation();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
            }}
        >
            {/* ******************************************NAV SECTION***************************** */}
            <section
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '10%',
                    borderRadius: 'inherit',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        width: '79.7%',
                        height: '100%',
                        borderRadius: 'inherit',
                        background: '#0F0F0F',
                    }}
                >
                    <ul
                        style={{
                            padding: '0',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            listStyle: 'none',
                            gap: '2rem',
                        }}
                    >
                        {(dataValue as any)?.data.room.map((el: any) => (
                            <li key={el.roomId}>
                                <NavBtn
                                    label={el.roomType}
                                    active={
                                        location.pathname.replace('%20', '') ===
                                        `/app/room/${el.roomType
                                            ?.split(' ')
                                            .join('')}`
                                            ? true
                                            : false
                                    }
                                    to={`/app/room/${el.roomType}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        width: '19.7%',
                        height: '100%',
                        borderRadius: 'inherit',
                        background: '#0F0F0F',
                    }}
                >
                    <input
                        placeholder="Search device"
                        style={{
                            height: '70%',
                            width: '70%',
                            borderRadius: 'inherit',
                            paddingLeft: '1rem',
                            background: 'rgb(21, 26, 30)',
                            color: 'lavender',
                        }}
                    />
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IconContext.Provider
                            value={{
                                size: '1.8em',
                                color: 'lavender',
                            }}
                        >
                            <RiAccountCircleLine />
                        </IconContext.Provider>
                    </motion.div>
                </div>
            </section>
            {/* ******************************************NAV SECTION******************************* */}
            {/* ******************************************CONTENT SECTION*************************** */}
            <section
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    width: '100%',
                    height: '88.7%',
                }}
            >
                <DeviceContainer />
            </section>
            {/* ******************************************CONTENT SECTION*************************** */}
        </div>
    );
};

export default RoomPage;
