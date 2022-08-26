import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useFetchData } from '../../../Hooks/useFetchData';
import ProfileBox from '../ProfileBox/ProfileBox';
import './SelectProfile.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { AccountConfiguration, Url } from '../../../Data/Constant';
import LoadingCircle from '../../Others/LoadingAnimation/LoadingCircle/LoadingCircle';
import axios from 'axios';

const SelectProfile = () => {
    /*{----------------------------------------------------------------------------------------------------------}*/

    const fetchData = () => {
        return axios.get(Url.user_get_profile);
    };
    const onSuccess = (data: any) => {
        toast.success('successfully fetched');
    };
    const onError = (error: any) => {
        toast.error(error.message);
    };
    const status = true;
    const { isLoading, data } = useFetchData(
        'profile',
        fetchData,
        onSuccess,
        onError,
        status,
    );

    /*{----------------------------------------------------------------------------------------------------------}*/

    useEffect(() => {
        // console.count();
    });
    return (
        <div className="selectProfile">
            {isLoading && (
                <span
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <LoadingCircle />
                </span>
            )}

            {!isLoading &&
                ((data as any)?.data.data.length === 0 ? (
                    <p
                        style={{
                            color: 'red',
                            background: 'rgb(255, 0, 0, 0.1)',
                            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
                            borderRadius: '10px',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
                        }}
                    >
                        {AccountConfiguration.select_profile_error}
                    </p>
                ) : (
                    <ul>
                        {(data as any)?.data.data.map((el: any) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                key={el.profileId}
                            >
                                <ProfileBox profileName={el.profileName} />
                            </motion.li>
                        ))}
                    </ul>
                ))}

            <ToastContainer />
        </div>
    );
};

export default SelectProfile;
