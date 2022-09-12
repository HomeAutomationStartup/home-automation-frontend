//import { BiSearchAlt2 } from 'react-icons/bi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useParams, useOutletContext, useLocation } from 'react-router-dom';
import NavBtn from '../Components/Others/Button/NavBtn';
import { motion } from 'framer-motion';

const RoomPage = () => {
    const dataValue = useOutletContext();
    const { type } = useParams();
    const location = useLocation();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
            }}
        >
            <section
                style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                    height: '8%',
                    borderRadius: 'inherit',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* ***************************************************************** */}
                <section
                    style={{
                        width: '79.7%',
                        height: '100%',
                        borderRadius: 'inherit',
                        background: 'rgb(7, 11, 13)',
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
                </section>
                <section
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        width: '19.7%',
                        height: '100%',
                        borderRadius: 'inherit',
                        background: 'rgb(7, 11, 13)',
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
                </section>
                {/* **************************************************************** */}
            </section>
            <section
                style={{
                    display: 'flex',
                    padding: '1rem',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '91%',
                    borderRadius: 'inherit',
                    background: 'rgb(7, 11, 13)',
                }}
            >
                we are in {type}
            </section>
        </div>
    );
};

export default RoomPage;
