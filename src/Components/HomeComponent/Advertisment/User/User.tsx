import { DarkColorRules } from '../../../../Data/Constant';
import UserTestimonial from './../../UserTestimonial/UserTestimonial';
import './User.css';

const User = () => {
    const color_1 = DarkColorRules.OuterBackground;
    const styles = {
        span: {
            color: '#00B5FF',
        },
    };
    return (
        <div className="user" style={{ background: color_1 }}>
            <section className="user_content" style={{ background: color_1 }}>
                <section className="user_content_header">
                    <p>REVIEWS AND FEEDBACK</p>
                    <h1>
                        <span style={styles.span}>Here's</span> what people say
                        about <span style={styles.span}>Open Bridge.</span>
                    </h1>
                </section>
                <section className="user_content_banner">
                    <UserTestimonial />
                </section>
            </section>
        </div>
    );
};

export default User;
