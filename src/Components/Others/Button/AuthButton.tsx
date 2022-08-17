import { motion } from 'framer-motion';
import './AuthButton.css';

const AuthButton = (props: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="authButton"
        >
            <button
                style={{ marginTop: '20px' }}
                type="submit"
                onClick={props.fn}
            >
                {props.label}
            </button>
        </motion.div>
    );
};

export default AuthButton;
