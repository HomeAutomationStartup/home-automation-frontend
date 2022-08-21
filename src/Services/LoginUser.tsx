import axios from 'axios';
import { Url, RoutePath } from './../Data/Constant';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import { setAccessToken, setAppAdminUser } from '../Utils/AuthHelperFunction';

export const LoginUser = async (data: any, navigate: any) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.post(Url.user_login_url, data, options);
        setAccessToken(response);
        setAppAdminUser(response);
        navigate(RoutePath.accountConfiguration);
    } catch (error) {
        let errorDetails = (error as any)?.response.data.message;
        if (typeof errorDetails === 'object' && errorDetails !== null) {
            Object.keys(errorDetails).forEach(function eachKey(key) {
                toast.error(errorDetails[key]);
            });
        } else {
            toast.error(errorDetails);
        }
    }
};
