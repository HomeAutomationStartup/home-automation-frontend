import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

export const PatchDataWithoutToken = async (url: any, data: any) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.patch(url, data, options);
        toast.success(response.data.message);
        return response.data;
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
