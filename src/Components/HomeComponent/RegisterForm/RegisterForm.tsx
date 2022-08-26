import { useForm } from 'react-hook-form';
import CustButton from '../../Others/Button/CustButton';
import './RegisterForm.css';
import { Url } from './../../../Data/Constant';
import { RegisterUser } from '../../../Services/RegisterUser';
import { ToastContainer } from 'react-toastify';

const RegisterForm = () => {
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
        register: registration,
        formState: { errors: regErrors },
        handleSubmit: handleRegSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onRegSubmit = (data: any) => {
        RegisterUser(Url.user_registration_url, data);
        reset();
    };

    return (
        <div className="registerForm">
            <section className="registerForm_form_container">
                <form
                    onSubmit={handleRegSubmit(onRegSubmit)}
                    className="registerForm_regForm"
                >
                    <input
                        type="text"
                        className="registerForm_form_field"
                        placeholder="User Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

                    <input
                        type="text"
                        className="registerForm_form_field"
                        placeholder="Name"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

                    <input
                        type="password"
                        className="registerForm_form_field"
                        placeholder="Password"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

                    <input
                        type="email"
                        className="registerForm_form_field"
                        placeholder="Email"
                        style={{
                            marginTop: '1rem',
                            fontSize: 'calc(0.5vw + 0.5vh + 1vmin)',
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

                    {!regErrors.email &&
                        !regErrors.password &&
                        !regErrors.name &&
                        !regErrors.userName && (
                            <CustButton
                                label="submit"
                                textCol="black"
                                backCol="#e2ff00"
                            />
                        )}

                    {!regErrors.email &&
                        !regErrors.password &&
                        !regErrors.name &&
                        !regErrors.userName && (
                            <section className="registerForm_appPolicies">
                                <span>Privacy Policy &amp; Cookie Policy</span>
                            </section>
                        )}
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default RegisterForm;
