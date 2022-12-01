import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ColorRules } from '../../../Data/Constant';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../../Services/LoginUser';
import CustButton from '../../Others/Button/CustButton';
import './Form.css';

const Form = (props: any) => {
    const navigate = useNavigate();

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
        <div
            className="form"
            style={{ background: ColorRules[0].OuterBackground }}
        >
            <form
                onSubmit={handleLogSubmit(onLogSubmit)}
                className="form_container login_form_center"
                style={{
                    background: ColorRules[0].InnerBackground,
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{ color: ColorRules[0].HeadingColor }}
                    className="form_heading"
                >
                    <h1>Hello!</h1>
                    <p>We are really happy to see you again!</p>
                </span>

                {/* ***********************UserName field************************* */}

                <input
                    type="text"
                    className="form_field"
                    placeholder="User Name"
                    style={{
                        background: ColorRules[0].formBackground,
                        color: ColorRules[0].HeadingColor,
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
                    <p className="form_error">
                        {(logErrors.userName as any)?.message}
                    </p>
                )}

                {/* ***************************Password field************************* */}

                <input
                    type="password"
                    className="form_field"
                    placeholder="Password"
                    style={{
                        background: ColorRules[0].formBackground,
                        color: ColorRules[0].HeadingColor,
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
                    <p className="form_error">
                        {(logErrors.password as any)?.message}
                    </p>
                )}

                {/* ***************************Submit btn************************** */}

                {!logErrors.password && !logErrors.userName && (
                    <CustButton
                        label="Sign in"
                        textCol="black"
                        backCol="#e2ff00"
                        width="150px"
                    />
                )}
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="form_toggleBtn"
                    style={{ color: ColorRules[0].subHeadingColor }}
                >
                    <p onClick={() => props.toggleLoginForm(false)}>
                        New here! Register
                    </p>
                </motion.span>
            </form>
        </div>
    );
};

export default Form;
