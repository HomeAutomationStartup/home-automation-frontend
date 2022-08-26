import './ProfileBox.css';
import { FcInfo } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

const ProfileBox = (props: any) => {
    return (
        <div className="profileBox">
            <section className="profileBox_row_1">{props.profileName}</section>
            <section className="profileBox_row_2">
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
            </section>
        </div>
    );
};

export default ProfileBox;
