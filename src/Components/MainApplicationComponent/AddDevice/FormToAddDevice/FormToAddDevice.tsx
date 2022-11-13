import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Url } from '../../../../Data/Constant';
import { PostDataWithoutToken } from '../../../../Services/PostDataWithoutToken';
import { getAppAdminUser } from '../../../../Utils/AuthHelperFunction';
import CustButton from '../../../Others/Button/CustButton';
import './FormToAddDevice.css';
const animatedComponents = makeAnimated();

const FormToAddDevice = () => {
    const { type } = useParams();
    const profileName = 'shubham';
    const admin = getAppAdminUser();
    const [device, setDevice] = useState();
    const {
        register: deviceRegister,
        formState: { errors: devErrors },
        handleSubmit: handleDevSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onDevSubmit = (data: any) => {
        Object.assign(data, { deviceType: device }, { roomType: type });
        console.log(data);
        PostDataWithoutToken(
            Url.devices_creat_url + admin + '&profilename=' + profileName,
            data,
        );
        reset();
    };
    var deviceType = [
        {
            type: 'appliance/fan',
            value: 'appliance/fan',
            label: 'appliance/fan',
        },
        {
            type: 'appliance/light',
            value: 'appliance/light',
            label: 'appliance/light',
        },
        {
            type: 'appliance/switch',
            value: 'appliance/switch',
            label: 'appliance/switch',
        },
    ];

    var addDeviceType = (el: any) => {
        setDevice(el.value);
    };
    const styles = {
        p: {
            color: 'red',
            background: 'rgb(255, 0, 0, 0.1)',
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            borderRadius: '10px',
            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
        },
    };

    return (
        <div className="formToAddDevice">
            <section className="formToAddDevice_form_container">
                <form
                    onSubmit={handleDevSubmit(onDevSubmit)}
                    className="formToAddDevice_devForm"
                >
                    <input
                        type="text"
                        className="formToAddDevice_form_field"
                        placeholder="Device Name"
                        style={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
                        }}
                        {...deviceRegister('showName', {
                            required: 'device name is required',
                            minLength: {
                                value: 2,
                                message: 'device name is too short',
                            },
                            maxLength: {
                                value: 16,
                                message: 'device name is too long',
                            },
                        })}
                    />
                    {devErrors.showName && (
                        <p style={styles.p}>
                            {(devErrors.showName as any)?.message}
                        </p>
                    )}
                    <Select
                        className="formToAddDevice_select"
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={deviceType}
                        onChange={addDeviceType}
                    />

                    {!devErrors.showName && (
                        <CustButton
                            label="Submit"
                            backCol="#e2ff00"
                            textCol="black"
                        />
                    )}
                </form>
            </section>
        </div>
    );
};

export default FormToAddDevice;
