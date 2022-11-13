import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../../Hooks/useFetchData';
import ProfileBox from '../ProfileBox/ProfileBox';
import './SelectProfile.css';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { AccountConfiguration, Url } from '../../../Data/Constant';
import LoadingFade from '../../Others/LoadingAnimation/LoadingFade/LoadingFade';
import axios from 'axios';
import { getAppAdminUser } from '../../../Utils/AuthHelperFunction';
import { searchItem } from '../../../Utils/CommonHelperFunction';

const SelectProfile = () => {
    let ADMIN = getAppAdminUser();
    let [queryResult, setQueryResult] = useState([]);

    /*{----------------------------------------------------------------------------------------------------------}*/

    const fetchData = () => {
        return axios.get(Url.profiles_fetch_url + ADMIN);
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

    const dataArray = (data as any)?.data;

    const keys = [
        'profileName',
        'cityName',
        'countryName',
        'createdAt',
        'picType',
    ];

    let searchResults: any = null;
    const handleOnSearch = (obj: any) => {
        searchResults = searchItem(keys, dataArray).search<any>(
            obj.target.value,
        );
        setQueryResult(searchResults);
    };

    const characterResult =
        Array.isArray(queryResult) && queryResult.length
            ? queryResult.map((result: { item: any }) => result.item)
            : dataArray;

    /*{----------------------------------------------------------------------------------------------------------}*/

    useEffect(() => {
        // console.count();
    });

    return (
        <div className="selectProfile">
            <span className="selectProfile_search">
                <input
                    type="text"
                    placeholder="search with profile name, city, country..."
                    onKeyDown={handleOnSearch}
                />
            </span>
            <span
                style={{
                    width: '100%',
                    height: '82%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
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
                        <LoadingFade />
                    </span>
                )}

                {!isLoading &&
                    (dataArray.length === 0 ? (
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
                            {characterResult.map((el: any) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    key={el.profileId}
                                >
                                    <ProfileBox
                                        profileName={el.profileName}
                                        profileId={el.profileId}
                                        picType={el.picType}
                                    />
                                </motion.li>
                            ))}
                        </ul>
                    ))}
            </span>
        </div>
    );
};

export default SelectProfile;
