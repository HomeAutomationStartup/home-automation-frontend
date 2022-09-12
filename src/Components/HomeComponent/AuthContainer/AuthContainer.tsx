import { useState } from 'react';
import LogIn from './../LogInForm/LogInForm';
import Register from './../RegisterForm/RegisterForm';
import CustButton from '../../Others/Button/CustButton';
import './AuthContainer.css';

const AuthContainer = () => {
    const [openForm, setOpenForm] = useState(false);
    const toggleForm = () => {
        setOpenForm(!openForm);
    };
    return (
        <div className="authContainer">
            <section className="authContainer_btn">
                <CustButton
                    fn={toggleForm}
                    label={openForm ? 'Register' : 'Login'}
                    textCol="black"
                    backCol="#e2ff00"
                    width="150px"
                />
            </section>
            <section className="authContainer_form">
                {openForm && <LogIn />}
                {!openForm && <Register />}
            </section>
        </div>
    );
};

export default AuthContainer;
