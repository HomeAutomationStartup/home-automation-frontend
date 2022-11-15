import { motion } from 'framer-motion';
import './SubUserTestimonialBox.css';

const SubUserTestimonialBox = (props: any) => {
    return (
        <motion.div
            layoutId={props.id}
            whileHover={{
                scale: 0.99,
                boxShadow: '20px 40px 33px rgb(21, 26, 30)',
            }}
            onClick={() => props.setSelectedId(props.id)}
            className="userTestimonial_list_box"
        >
            <span className="userTestimonial_list_box_title">
                &rdquo;
                <b>{props.title}</b>
                &rdquo;
            </span>
            <span className="userTestimonial_list_box_description">
                <p>{props.description}</p>
            </span>
            <span className="userTestimonial_list_box_expand">
                <p style={{ fontSize: '14px' }}>Read more</p>
            </span>
        </motion.div>
    );
};

export default SubUserTestimonialBox;
