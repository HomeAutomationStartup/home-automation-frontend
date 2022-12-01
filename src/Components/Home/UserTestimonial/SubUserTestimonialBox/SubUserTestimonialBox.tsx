import { motion } from 'framer-motion';
import './SubUserTestimonialBox.css';

const SubUserTestimonialBox = (props: any) => {
    return (
        <motion.div
            layoutId={props.id}
            whileHover={{
                scale: 1,
                // boxShadow: '20px 40px 33px rgb(21, 26, 30)',
                color: 'black',
                background: 'lavender',
            }}
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
                <p onClick={() => props.setSelectedId(props.id)}>Read more</p>
            </span>
        </motion.div>
    );
};

export default SubUserTestimonialBox;
