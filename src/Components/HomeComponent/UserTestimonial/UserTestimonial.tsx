import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';
import { FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './UserTestimonial.css';

const UserTestimonial = () => {
    const [selectedId, setSelectedId] = useState<any>(null);
    const items = [
        {
            id: '1',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 4,
        },
        {
            id: '2',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 3.8,
        },
        {
            id: '3',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 2.5,
        },
        {
            id: '4',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 1.5,
        },
        {
            id: '5',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '6',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 4.5,
        },
        {
            id: '7',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '8',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '9',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '10',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '11',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
        {
            id: '12',
            subtitle:
                'Variants are pre-defined visual states that a component can be in. By giving a component.',
            title: 'Shubham kumar singh',
            description:
                'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
            dateAndTime: '11:20AM - 29 Nov 2022',
            rating: 5,
        },
    ];
    return (
        <div className="userTestimonial">
            <ul className="userTestimonial_list">
                {selectedId !== null &&
                    items.map((item) => (
                        <motion.li
                            style={{
                                background:
                                    item.id === selectedId
                                        ? 'rgb(255,255,255,0.1)'
                                        : '',
                            }}
                            key={item.id}
                            className="a userTestimonial_list_box_shadow"
                        ></motion.li>
                    ))}

                {selectedId == null &&
                    items.map((item) => (
                        <motion.li
                            layoutId={item.id}
                            key={item.id}
                            whileHover={{
                                scale: 0.99,
                                boxShadow: '20px 40px 33px rgb(21, 26, 30)',
                            }}
                            onClick={() => setSelectedId(item.id)}
                            className="a userTestimonial_list_box"
                        >
                            <motion.h1>{item.title}</motion.h1>
                            <motion.p>{item.subtitle}</motion.p>
                        </motion.li>
                    ))}
            </ul>
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="userTestimonial_list_box_after"
                    >
                        <span className="userTestimonial_list_box_after_content">
                            <section className="userTestimonial_list_box_after_content_col_1">
                                <IconContext.Provider value={{ size: '1.5em' }}>
                                    <span>
                                        <FaQuoteLeft />
                                    </span>
                                </IconContext.Provider>
                            </section>
                            <section className="userTestimonial_list_box_after_content_col_2">
                                <section className="userTestimonial_list_box_after_content_col_2_row_1">
                                    {
                                        items.find((x) => x.id === selectedId)
                                            ?.description
                                    }
                                </section>
                                <section className="userTestimonial_list_box_after_content_col_2_row_2">
                                    <span>
                                        {
                                            items.find(
                                                (x) => x.id === selectedId,
                                            )?.dateAndTime
                                        }
                                    </span>
                                    <span>
                                        <Rating
                                            initialValue={
                                                items.find(
                                                    (x) => x.id === selectedId,
                                                )?.rating
                                            }
                                            ratingValue={0}
                                            readonly={true}
                                        />
                                    </span>
                                </section>
                            </section>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedId(null)}
                                className="userTestimonial_list_box_after_content_closeBtn"
                            >
                                <IconContext.Provider value={{ size: '1.5em' }}>
                                    <span>
                                        <AiOutlineCloseCircle />
                                    </span>
                                </IconContext.Provider>
                            </motion.div>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserTestimonial;
