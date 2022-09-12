import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NavBtn.css';

const NavBtn = (props: any) => {
    return (
        <Link to={props.to}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                    className={
                        props.active === true
                            ? 'nav_btn nav_btn_active'
                            : 'nav_btn'
                    }
                >
                    {props.label}
                </button>
            </motion.div>
        </Link>
    );
};

export default NavBtn;
