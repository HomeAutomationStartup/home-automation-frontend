import { motion } from 'framer-motion';
import './SubUserTestimonialBox.css';

const SubUserTestimonialBox = (props: any) => {
    return (
        <motion.li
            layoutId={props.id}
            whileHover={{
                scale: 0.99,
                boxShadow: '20px 40px 33px rgb(21, 26, 30)',
            }}
            onClick={() => props.setSelectedId(props.id)}
            className="userTestimonial_list_box"
        >
            <motion.h1>{props.title}</motion.h1>
            <motion.p>{props.subtitle}</motion.p>
        </motion.li>
    );
};

export default SubUserTestimonialBox;
