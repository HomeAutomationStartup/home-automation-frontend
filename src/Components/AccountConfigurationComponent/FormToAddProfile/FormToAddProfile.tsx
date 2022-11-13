import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
    AccountConfigurationPicsType,
    AccountConfigurationRoomNames,
} from '../../../Data/Constant';
import { Url } from './../../../Data/Constant';
import { AccountConfiguration } from './../../../Data/Constant';
import CustButton from '../../Others/Button/CustButton';
import './FormToAddProfile.css';
import { PostDataWithoutToken } from '../../../Services/PostDataWithoutToken';
import { getAppAdminUser } from '../../../Utils/AuthHelperFunction';
const animatedComponents = makeAnimated();

const FormToAddProfile = () => {
    let ADMIN = getAppAdminUser();
    const styles = {
        p: {
            color: 'red',
            background: 'rgb(255, 0, 0, 0.1)',
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            borderRadius: '10px',
            fontSize:
                'calc(14px + (2 -14) * ((100vw - 1280px) / (1600 - 1280)))',
            lineHeight: '27px',
        },
    };
    const {
        register: profileRegister,
        formState: { errors: proErrors },
        handleSubmit: handleProSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const [room, setRoom] = useState([]);
    const [pic, setPic] = useState();

    const onProSubmit = (data: any) => {
        Object.assign(data, { room: room }, { picType: pic });
        // Object.assign(data, { room: room });
        PostDataWithoutToken(Url.profile_creation_url + ADMIN, data);
        reset();
    };

    var addRooms = (el: any) => {
        setRoom(el);
    };
    var addPics = (el: any) => {
        setPic(el.picType);
    };
    useEffect(() => {
        // console.count();
    });
    return (
        <div className="formToAddProfile">
            <section className="formToAddProfile_form_container">
                <form
                    onSubmit={handleProSubmit(onProSubmit)}
                    className="formToAddProfile_proForm"
                >
                    {!(room.length > 6) &&
                        !proErrors.profileName &&
                        !proErrors.cityName &&
                        !proErrors.countryName && (
                            <span className="formToAddProfile_proForm_header">
                                <h1
                                    style={{
                                        fontSize:
                                            'calc(24px + (10 -24) * ((100vw - 1280px) / (1600 - 1280)))',
                                        lineHeight: '27px',
                                    }}
                                >
                                    {AccountConfiguration.form_header}
                                </h1>
                                <p
                                    style={{
                                        fontSize:
                                            'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                                        lineHeight: '27px',
                                    }}
                                >
                                    {AccountConfiguration.form_subHeader}
                                </p>
                            </span>
                        )}

                    <input
                        type="text"
                        className="formToAddProfile_form_field"
                        placeholder="profile name"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...profileRegister('profileName', {
                            required: 'profile name is required',
                            minLength: {
                                value: 2,
                                message: 'profile name is too short',
                            },
                            maxLength: {
                                value: 8,
                                message: 'profile name is too long',
                            },
                        })}
                    />
                    {proErrors.profileName && (
                        <p style={styles.p}>
                            {(proErrors.profileName as any)?.message}
                        </p>
                    )}

                    <input
                        type="text"
                        className="formToAddProfile_form_field"
                        placeholder="city name"
                        style={{
                            marginTop: '2rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...profileRegister('cityName', {
                            required: 'city name is required',
                            minLength: {
                                value: 2,
                                message: 'city name is too short',
                            },
                            maxLength: {
                                value: 58,
                                message: 'city name is too long',
                            },
                        })}
                    />
                    {proErrors.cityName && (
                        <p style={styles.p}>
                            {(proErrors.cityName as any)?.message}
                        </p>
                    )}

                    <input
                        type="text"
                        className="formToAddProfile_form_field"
                        placeholder="country name"
                        style={{
                            marginTop: '2rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...profileRegister('countryName', {
                            required: 'country name is required',
                            minLength: {
                                value: 2,
                                message: 'country name is too short',
                            },
                            maxLength: {
                                value: 56,
                                message: 'country name is too long',
                            },
                        })}
                    />
                    {proErrors.countryName && (
                        <p style={styles.p}>
                            {(proErrors.countryName as any)?.message}
                        </p>
                    )}
                    {!(room.length > 6) ? (
                        <p className="formToAddProfile_roomInformation">
                            {AccountConfiguration.select_room_header}
                        </p>
                    ) : (
                        <p
                            style={styles.p}
                            className="formToAddProfile_roomWarning"
                        >
                            {AccountConfiguration.select_room_error}
                        </p>
                    )}

                    <Select
                        className="formToAddProfile_select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={AccountConfigurationRoomNames}
                        onChange={addRooms}
                    />
                    <Select
                        className="formToAddProfile_select"
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        options={AccountConfigurationPicsType}
                        onChange={addPics}
                    />

                    {!(room.length < 1) &&
                        !(room.length > 6) &&
                        !proErrors.profileName &&
                        !proErrors.cityName &&
                        !proErrors.countryName && (
                            //     <span className="formToAddProfile_submit_btn">
                            //         <CustButton
                            //             label="Submit"
                            //             backCol="#e2ff00"
                            //             textCol="black"
                            //         />
                            // </span>
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

export default FormToAddProfile;
