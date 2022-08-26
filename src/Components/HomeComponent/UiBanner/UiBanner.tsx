import { motion } from 'framer-motion';
import { BlogList } from './../../../Data/Constant';
import './UiBanner.css';

const UiBanner = (props: any) => {
    const styles = {
        img: {
            height: '100%',
            width: '100%',
        },
    };

    const imageAnimate = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            rotate: [0, 10, 0],
            transition: { type: 'spring', bounce: 0.4, duration: 1 },
        },
    };

    const textAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', bounce: 0.4, duration: 1 },
        },
    };

    const Card = ({ image, h1, h2, p, id, col }: any) => {
        return (
            <motion.div
                className="card"
                id={id}
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <span className="card_infoo">
                    <motion.h2 variants={textAnimate}>{h2}</motion.h2>
                    <motion.p variants={textAnimate}>{p}</motion.p>
                </span>

                <motion.div className="image-container">
                    <motion.span
                        className="image-container_img_1"
                        variants={imageAnimate}
                    >
                        <img src={image} style={styles.img} alt="ui-design" />
                    </motion.span>
                    <motion.span
                        className="image-container_img_2"
                        variants={imageAnimate}
                    >
                        <img src={image} style={styles.img} alt="ui-design" />
                    </motion.span>
                    <motion.span
                        className="image-container_img_3"
                        variants={imageAnimate}
                    >
                        <img src={image} style={styles.img} alt="ui-design" />
                    </motion.span>
                </motion.div>
            </motion.div>
        );
    };
    return (
        <div className="uiBanner">
            <span className="background_info">UI / UX</span>
            <div className="card-wrapper">
                {BlogList.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        h1={item.h1}
                        h2={item.h2}
                        p={item.p}
                        id={item.id}
                        col={props.col}
                    />
                ))}
            </div>
        </div>
    );
};

export default UiBanner;
