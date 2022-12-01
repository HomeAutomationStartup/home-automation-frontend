import { ColorRules, DarkColorRules } from '../../../../Data/Constant';
import UserTestimonial from '../../UserTestimonial/UserTestimonial';
import './UserReview.css';

const UserReview = () => {
    return (
        <div
            className="userReview"
            style={{
                background: DarkColorRules.OuterBackground,
                color: ColorRules[0].HeadingColor,
            }}
        >
            <div
                className="userReview_content"
                style={{ background: DarkColorRules.OuterBackground }}
            >
                <section className="userReview_content_heading">
                    <p style={{ color: ColorRules[0].InfoColor }}>
                        REVIEWS AND FEEDBACK
                    </p>
                    <h1>
                        <span style={{ color: '#00B5FF' }}>Here's</span> what
                        people say about{' '}
                        <span style={{ color: '#00B5FF' }}>Open Bridge.</span>
                    </h1>
                </section>
                <section className="userReview_content_body">
                    <UserTestimonial />
                </section>
            </div>
        </div>
    );
};

export default UserReview;
