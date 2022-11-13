import { motion } from 'framer-motion';
import './SubUserTestimonialBox.css';

const SubUserTestimonialBox = (props: any) => {
    const MAX_LENGTH =
        props.id === '2' ||
        props.id === '4' ||
        props.id === '9' ||
        props.id === '11'
            ? 190
            : 50;

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
                &ldquo;
                <b>{props.title}</b>
                &rdquo;
            </span>
            <span className="userTestimonial_list_box_description">
                {props.description.length > MAX_LENGTH ? (
                    <p>{`${props.description.substring(0, MAX_LENGTH)}...`}</p>
                ) : (
                    <p>{props.description}</p>
                )}
            </span>

            <p className="userTestimonial_list_box_expand">Read more</p>
        </motion.div>
    );
};

export default SubUserTestimonialBox;
