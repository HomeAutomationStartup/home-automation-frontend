import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { RoomNames } from '../../../Data/Constant';
import { PostDataWithToken } from '../../../Services/Interceptor';
import { Url } from './../../../Data/Constant';
import { ToastContainer } from 'react-toastify';
import { HeaderMessage } from './../../../Data/Constant';
import CustButton from '../../Others/Button/CustButton';
import './FormToAddProfile.css';
import { useNavigate } from 'react-router-dom';
const animatedComponents = makeAnimated();

const FormToAddProfile = () => {
    const navigate = useNavigate();
    const styles = {
        p: {
            color: 'red',
            background: 'rgb(255, 0, 0, 0.1)',
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            borderRadius: '10px',
            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

    const onProSubmit = (data: any) => {
        Object.assign(data, { room: room });
        PostDataWithToken({
            url: Url.user_create_profile,
            method: 'post',
            data: data,
            navigate,
        });
        reset();
    };

    var addRooms = (el: any) => {
        setRoom(el);
    };
    return (
        <div className="formToAddProfile">
            <section className="form-container">
                <form
                    onSubmit={handleProSubmit(onProSubmit)}
                    className="proForm"
                >
                    {!(room.length > 6) &&
                        !proErrors.profileName &&
                        !proErrors.cityName &&
                        !proErrors.countryName && (
                            <span className="proForm_header">
                                <h1>
                                    {
                                        HeaderMessage.accountConfiguration_form_header
                                    }
                                </h1>
                                <p>
                                    {
                                        HeaderMessage.accountConfiguration_form_subHeader
                                    }
                                </p>
                            </span>
                        )}

                    <input
                        type="text"
                        className="form_field"
                        placeholder="Profile Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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
                        className="form_field"
                        placeholder="City Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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
                        className="form_field"
                        placeholder="Country Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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
                        <p className="roomInformation">
                            {
                                HeaderMessage.accountConfiguration_room_form_header
                            }
                        </p>
                    ) : (
                        <p className="roomWarning">Max 6 rooms can be Added</p>
                    )}

                    <Select
                        className="select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={RoomNames}
                        onChange={addRooms}
                    />

                    {!(room.length < 1) &&
                        !(room.length > 6) &&
                        !proErrors.profileName &&
                        !proErrors.cityName &&
                        !proErrors.countryName && (
                            <CustButton
                                label="Submit"
                                backCol="#e2ff00"
                                textCol="black"
                            />
                        )}
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default FormToAddProfile;