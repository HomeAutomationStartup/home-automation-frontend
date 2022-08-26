import './Landing.css';
import RaspberryPi from './../../../../Assets/RaspberryPi.svg';
import NodeMCU from './../../../../Assets/NodeMCU.svg';
import Arduino from './../../../../Assets/Arduino.svg';
import LandingUI from './../../../../Assets/LandingUI.svg';
import HomeSecurity from './../../../../Assets/HomeSecurity.svg';
import Visual from './../../../../Assets/Visual.svg';
import Rpa from './../../../../Assets/Rpa.svg';
import Automation from './../../../../Assets/Automation.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
    const [count, setCount] = useState(0);
    const [Imgg, setImgg] = useState(Automation);
    const changeImg = (pos: any) => {
        setCount(pos);
    };
    useEffect(() => {
        console.log(count);
        if (count === 0) {
            setImgg(Automation);
        }
        if (count === 1) {
            setImgg(Visual);
        }
        if (count === 2) {
            setImgg(Rpa);
        }
    }, [count]);
    return (
        <div className="landing">
            <ul className="landing_content">
                <li>
                    <span className="landing_content_col_1">
                        <span
                            style={{
                                width: '100%',
                                height: '66.5%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <img
                                src={Imgg}
                                width="369"
                                height="360"
                                alt="landing_img"
                            />
                            <span
                                style={{
                                    width: '30%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    flexDirection: 'row',
                                    paddingTop: '1rem',
                                }}
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="switchBtn"
                                    onClick={() => changeImg(0)}
                                ></motion.span>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="switchBtn"
                                    onClick={() => changeImg(1)}
                                ></motion.span>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="switchBtn"
                                    onClick={() => changeImg(2)}
                                ></motion.span>
                            </span>
                        </span>

                        <span
                            style={{
                                width: '100%',
                                height: '33.5%',
                                color: 'white',
                                display: 'flex',
                                background: 'rgb(255, 255, 255, 0.1)',
                                padding: '1rem',
                                justifyContent: 'center',
                                backdropFilter: 'blur(5px)',
                                flexDirection: 'column',
                            }}
                        >
                            <h1
                                style={{
                                    padding: '0',
                                    margin: '0',
                                    fontSize: '24px',
                                    fontWeight: '100',
                                }}
                            >
                                Connect your devices
                            </h1>

                            <p
                                style={{
                                    fontSize: '16px',
                                }}
                            >
                                hi test your code on the go hi test your code on
                                the go hi test your code on the go hi test your
                                code on the go
                            </p>
                        </span>
                    </span>
                </li>
                <li>
                    <span className="landing_content_col_2_row_1">
                        <span
                            style={{
                                width: '100%',
                                height: '70%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src={LandingUI} alt="landingUI" />
                        </span>

                        <span
                            style={{
                                width: '100%',
                                height: '30%',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                padding: '3rem',
                            }}
                        >
                            <h1
                                style={{
                                    padding: '0',
                                    margin: '0',
                                    fontSize: '24px',
                                    fontWeight: '100',
                                }}
                            >
                                Connect your devices
                            </h1>
                            <p style={{ fontSize: '16px' }}>
                                hi test your code on the go
                            </p>
                        </span>
                    </span>
                    <span className="landing_content_col_2_row_2">
                        <span
                            style={{
                                width: '70%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src={HomeSecurity} alt="security" />
                        </span>
                        <span
                            style={{
                                width: '30%',
                                height: '100%',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                padding: '1rem',
                            }}
                        >
                            <h1 style={{ fontSize: '24px', fontWeight: '100' }}>
                                Put security first
                            </h1>
                        </span>
                    </span>
                </li>
                <li>
                    <span className="landing_content_col_3_row_1">
                        <img
                            src={RaspberryPi}
                            width="170"
                            height="170"
                            alt="raspberry"
                        />
                        <p style={{ color: 'white', fontSize: '16px' }}>
                            Raspberry Pi
                        </p>
                    </span>
                    <span className="landing_content_col_3_row_2">
                        <img src={NodeMCU} alt="nodemcu" />
                        <p style={{ color: 'white', fontSize: '16px' }}>
                            Espressif Systems
                        </p>
                    </span>
                    <span className="landing_content_col_3_row_3">
                        <img src={Arduino} alt="arduino" />
                        <p style={{ color: 'white', fontSize: '16px' }}>
                            Arduino
                        </p>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Landing;
