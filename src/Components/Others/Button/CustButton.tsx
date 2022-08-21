import { motion } from 'framer-motion';
import './CustButton.css';

const CustButton = (props: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="custButton"
        >
            <button
                style={{
                    marginTop: '20px',
                    width: props.width,
                    background: props.backCol,
                    color: props.textCol,
                }}
                type="submit"
                onClick={props.fn}
            >
                {props.label}
            </button>
        </motion.div>
    );
};

export default CustButton;
