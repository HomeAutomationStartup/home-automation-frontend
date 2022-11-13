import { motion } from 'framer-motion';
import './CustButton.css';

const CustButton = (props: any) => {
    const status = props.status;
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
                    background: status
                        ? 'rgb(226, 255, 0, 0.1)'
                        : props.backCol,
                    color: props.textCol,
                }}
                type="submit"
                disabled={status}
                onClick={props.fn}
            >
                {props.label}
            </button>
        </motion.div>
    );
};

export default CustButton;
