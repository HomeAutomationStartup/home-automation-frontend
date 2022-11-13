import { motion } from 'framer-motion';
import { page_2_content_list as Items } from '../../../Data/HomePageConstant';
import LazyLoadImageComp from '../../Others/LazyLoadImageComp/LazyLoadImageComp';
import './UiBanner.css';

const UiBanner = () => {
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

    const Card = ({ image1, image2, image3, h1, p, id }: any) => {
        return (
            <motion.div
                className="uiBanner_card"
                id={id}
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <span className="uiBanner_card_info">
                    <motion.h1 variants={textAnimate}>{h1}</motion.h1>
                    <motion.p variants={textAnimate}>{p}</motion.p>
                </span>

                <motion.div className="uiBanner_image_container">
                    <motion.span
                        className="uiBanner_image_container_img_1"
                        variants={imageAnimate}
                    >
                        <LazyLoadImageComp
                            src={image1}
                            height="100%"
                            width="100%"
                            alt="ui-design"
                        />
                    </motion.span>
                    <motion.span
                        className="uiBanner_image_container_img_2"
                        variants={imageAnimate}
                    >
                        <LazyLoadImageComp
                            src={image2}
                            height="100%"
                            width="100%"
                            alt="ui-design"
                        />
                    </motion.span>
                    <motion.span
                        className="uiBanner_image_container_img_3"
                        variants={imageAnimate}
                    >
                        <LazyLoadImageComp
                            src={image3}
                            height="100%"
                            width="100%"
                            alt="ui-design"
                        />
                    </motion.span>
                </motion.div>
            </motion.div>
        );
    };
    return (
        <div className="uiBanner">
            <div className="uiBanner_card_wrapper">
                {Items.map((item) => (
                    <Card
                        key={item.id}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        h1={item.h1}
                        p={item.p}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default UiBanner;
