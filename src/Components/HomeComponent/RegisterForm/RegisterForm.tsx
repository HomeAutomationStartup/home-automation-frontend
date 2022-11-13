import { useForm } from 'react-hook-form';
import CustButton from '../../Others/Button/CustButton';
import { Url } from './../../../Data/Constant';
import { RegisterUser } from '../../../Services/RegisterUser';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import WindowBackdropModel from '../../Others/FramerMotionBackdrop/WindowBackdropModel/WindowBackdropModel';
import { useState } from 'react';
import Policy from '../Policy/Policy';
import './RegisterForm.css';

const RegisterForm = (props: any) => {
    const [modelOpen, setModelOpen] = useState(false);
    const open = () => {
        setModelOpen(true);
    };
    const close = () => {
        setModelOpen(false);
    };
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
        register: registration,
        formState: { errors: regErrors },
        handleSubmit: handleRegSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onRegSubmit = (data: any) => {
        console.log(data);
        RegisterUser(Url.user_registration_url, data);
        reset();
    };

    return (
        <div className="formToRegister">
            <section className="formToRegister_form_container">
                <form
                    onSubmit={handleRegSubmit(onRegSubmit)}
                    className="formToRegister_regForm"
                >
                    {/* ****************************UserName field********************************* */}

                    <input
                        type="text"
                        className="formToRegister_form_field"
                        placeholder="Username"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...registration('userName', {
                            required: 'user name is required',
                            minLength: {
                                value: 2,
                                message: 'user name is too short',
                            },
                            maxLength: {
                                value: 16,
                                message: 'user name is too long',
                            },
                        })}
                    />
                    {regErrors.userName && (
                        <p style={styles.p}>
                            {(regErrors.userName as any)?.message}
                        </p>
                    )}
                    {/* ************************************Name field************************************ */}
                    <input
                        type="text"
                        className="formToRegister_form_field"
                        placeholder="Full Name"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...registration('name', {
                            required: 'name is required',
                            minLength: {
                                value: 2,
                                message: 'name is too short',
                            },
                            maxLength: {
                                value: 26,
                                message: 'name is too long',
                            },
                        })}
                    />
                    {regErrors.name && (
                        <p style={styles.p}>
                            {(regErrors.name as any)?.message}
                        </p>
                    )}

                    {/* ****************************Password field*************************** */}

                    <input
                        type="password"
                        className="formToRegister_form_field"
                        placeholder="Password"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...registration('password', {
                            required: 'password is required',
                            minLength: {
                                value: 8,
                                message: 'password is too short',
                            },
                            maxLength: {
                                value: 16,
                                message: 'password is too long',
                            },
                        })}
                    />
                    {regErrors.password && (
                        <p style={styles.p}>
                            {(regErrors.password as any)?.message}
                        </p>
                    )}
                    {/* ************************************Email field************************************ */}
                    <input
                        type="email"
                        className="formToRegister_form_field"
                        placeholder="Email"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...registration('email', {
                            required: 'email is required',
                        })}
                    />
                    {regErrors.email && (
                        <p style={styles.p}>
                            {(regErrors.email as any)?.message}
                        </p>
                    )}

                    {/* ******************************Submit btn***************************** */}

                    {!regErrors.email &&
                        !regErrors.password &&
                        !regErrors.name &&
                        !regErrors.userName && (
                            <CustButton
                                label="submit"
                                textCol="black"
                                backCol="#e2ff00"
                                width="150px"
                            />
                        )}

                    {/* *****************************Policy info***************************** */}
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="formToRegister_toggleBtn"
                        onClick={() => props.toggleLoginForm(true)}
                    >
                        <p>Have an account? Log in</p>
                    </motion.span>
                    {!regErrors.email &&
                        !regErrors.password &&
                        !regErrors.name &&
                        !regErrors.userName && (
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="formToRegister_appPolicies"
                                onClick={() => (modelOpen ? close() : open())}
                            >
                                <p>Privacy Policy &amp; Cookie Policy</p>
                            </motion.span>
                        )}
                </form>
            </section>
            {/*************************************BACKDROP*************************************/}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modelOpen && (
                    <WindowBackdropModel
                        backdropColor="#070B0D"
                        handleClose={close}
                    >
                        <Policy />
                    </WindowBackdropModel>
                )}
            </AnimatePresence>

            {/*************************************BACKDROP*************************************/}
            <ToastContainer />
        </div>
    );
};

export default RegisterForm;
