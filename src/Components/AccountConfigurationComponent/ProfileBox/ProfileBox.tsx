import { FcInfo } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { openProfileOnClick } from '../../../Utils/AuthHelperFunction';
import { useEffect, useState } from 'react';
import { choosePic } from '../../../Utils/CommonHelperFunction';
import './ProfileBox.css';

const ProfileBox = (props: any) => {
    const navigate = useNavigate();
    const [picType, setPicType] = useState<any>();

    const handleClick = (profileId: any) => {
        openProfileOnClick(profileId, navigate);
    };

    useEffect(() => {
        setPicType(choosePic(props.picType));
    }, [props.picType]);

    return (
        <div className="profileBox">
            <section
                className="profileBox_row_1"
                onClick={() => {
                    handleClick(props.profileId);
                }}
            >
                <img src={picType} width="160" height="180" alt="profile_img" />
            </section>
            <section className="profileBox_row_2">
                <span> {props.profileName}</span>
                <span
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IconContext.Provider
                            value={{ size: '2em', color: 'white' }}
                        >
                            <span>
                                <FcInfo />
                            </span>
                        </IconContext.Provider>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IconContext.Provider
                            value={{ size: '2em', color: 'white' }}
                        >
                            <span>
                                <FcInfo />
                            </span>
                        </IconContext.Provider>
                    </motion.div>
                </span>
            </section>
        </div>
    );
};

export default ProfileBox;
