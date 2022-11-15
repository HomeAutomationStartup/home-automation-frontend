import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustButton from '../../Others/Button/CustButton';
import { ToastContainer } from 'react-toastify';
import { LoginUser } from '../../../Services/LoginUser';
import { useEffect } from 'react';
import './LogInForm.css';
import { motion } from 'framer-motion';

const LogInForm = (props: any) => {
    const navigate = useNavigate();
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
        register: login,
        formState: { errors: logErrors },
        handleSubmit: handleLogSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onLogSubmit = (data: any) => {
        console.log(data);
        reset();
        LoginUser(data, navigate);
    };
    useEffect(() => {
        //console.count();
    });

    return (
        <div className="formToLogin">
            <section className="formToLogin_form_container">
                <span className="formToLogin_heading">
                    <h1>Hello!</h1>
                    <p>We are really happy to see you again!</p>
                </span>
                <form
                    onSubmit={handleLogSubmit(onLogSubmit)}
                    className="formToLogin_logForm"
                >
                    {/* ***********************UserName field************************* */}
                    <input
                        type="text"
                        className="formToLogin_form_field"
                        placeholder="User Name"
                        style={{
                            marginTop: '1rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...login('userName', {
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
                    {logErrors.userName && (
                        <p style={styles.p}>
                            {(logErrors.userName as any)?.message}
                        </p>
                    )}
                    {/* ***************************Password field************************* */}
                    <input
                        type="password"
                        className="formToLogin_form_field"
                        placeholder="Password"
                        style={{
                            marginTop: '1.5rem',
                            fontSize:
                                'calc(16px + (0 -16) * ((100vw - 1280px) / (1600 - 1280)))',
                            lineHeight: '27px',
                        }}
                        {...login('password', {
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
                    {logErrors.password && (
                        <p style={styles.p}>
                            {(logErrors.password as any)?.message}
                        </p>
                    )}

                    {/* ***************************Submit btn************************** */}
                    {!logErrors.password && !logErrors.userName && (
                        <CustButton
                            label="submit"
                            textCol="black"
                            backCol="#e2ff00"
                            width="150px"
                        />
                    )}
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="formToLogin_toggleBtn"
                        onClick={() => props.toggleLoginForm(false)}
                    >
                        <p> New here! Register</p>
                    </motion.span>
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default LogInForm;
