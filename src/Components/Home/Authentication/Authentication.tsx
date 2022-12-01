import { useState } from 'react';
import LogInForm from '../../Home/Form/LoginForm';
import RegisterForm from '../../Home/Form/RegistrationForm';
import './Authentication.css';

const Authentication = () => {
    const [openLoginForm, setOpenLoginForm] = useState(false);
    return (
        <div className="authentication_container">
            {openLoginForm && <LogInForm toggleLoginForm={setOpenLoginForm} />}
            {!openLoginForm && (
                <RegisterForm toggleLoginForm={setOpenLoginForm} />
            )}
        </div>
    );
};

export default Authentication;
