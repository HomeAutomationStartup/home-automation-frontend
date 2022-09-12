import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustButton from '../../Others/Button/CustButton';
import { ToastContainer } from 'react-toastify';
import { LoginUser } from '../../../Services/LoginUser';
import { useEffect } from 'react';
import './LogInForm.css';

const LogInForm = () => {
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
        register: login,
        formState: { errors: logErrors },
        handleSubmit: handleLogSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onLogSubmit = (data: any) => {
        reset();
        LoginUser(data, navigate);
    };
    useEffect(() => {
        //console.count();
    });
    return (
        <div className="loginForm">
            <section className="loginForm_form_container">
                <form
                    onSubmit={handleLogSubmit(onLogSubmit)}
                    className="loginForm_logForm"
                >
                    <input
                        type="text"
                        className="loginForm_form_field"
                        placeholder="User Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

                    <input
                        type="password"
                        className="loginForm_form_field"
                        placeholder="Password"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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
                    {!logErrors.password && !logErrors.userName && (
                        <CustButton
                            label="Login"
                            textCol="black"
                            backCol="#e2ff00"
                            width="150px"
                        />
                    )}
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default LogInForm;
