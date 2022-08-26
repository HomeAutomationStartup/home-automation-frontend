import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './UserTestimonial.css';
import SubUserTestimonialShadow from './SubUserTestimonialShadow/SubUserTestimonialShadow';
import SubUserTestimonialBox from './SubUserTestimonialBox/SubUserTestimonialBox';
import SubUserTestimonialBoxAfter from './SubUserTestimonialBoxAfter/SubUserTestimonialBoxAfter';
import { UserReview as Items } from '../../../Data/Constant';

const UserTestimonial = () => {
    const [selectedId, setSelectedId] = useState<any>(null);

    return (
        <div className="userTestimonial">
            <ul className="userTestimonial_list">
                {selectedId !== null &&
                    Items.map((item) => (
                        <SubUserTestimonialShadow
                            key={item.id}
                            id={item.id}
                            selectedId={selectedId}
                        />
                    ))}

                {selectedId == null &&
                    Items.map((item) => (
                        <SubUserTestimonialBox
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            setSelectedId={setSelectedId}
                        />
                    ))}
            </ul>
            <AnimatePresence>
                {selectedId && (
                    <SubUserTestimonialBoxAfter
                        selectedId={selectedId}
                        key={selectedId}
                        setSelectedId={setSelectedId}
                        items={Items}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserTestimonial;
