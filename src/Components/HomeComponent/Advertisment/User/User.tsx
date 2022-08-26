import UserTestimonial from './../../UserTestimonial/UserTestimonial';
import './User.css';

const User = () => {
    const styles = {
        span: {
            color: '#00B5FF',
        },
    };
    return (
        <div className="user">
            <section className="user_content">
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
