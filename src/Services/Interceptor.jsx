import axios from 'axios';
import { getAccessToken, logOut } from './../Utils/AuthHelperFunction';
import { RootUrl } from './../Data/Constant';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

const client = axios.create({
    baseURL: RootUrl.authMS,
});

export const PostDataWithToken = async ({ ...options }) => {
    const accessToken = getAccessToken();
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    try {
        const response = await client(options);
        toast.success(response.data.message);
    } catch (error) {
        let errorDetails = error.response.data.message;

        if (errorDetails.includes('expired')) {
            toast.error(errorDetails);
            logOut(options.navigate);
        } else if (typeof errorDetails === 'object' && errorDetails !== null) {
            Object.keys(errorDetails).forEach(function eachKey(key) {
                toast.error(errorDetails[key]);
            });
        } else {
            toast.error(errorDetails);
        }
    }
};
