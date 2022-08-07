import LandingLogoDark from './../../../../Assets/LandingLogoDark.svg';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing">
            <section className="landing_content">
                <img src={LandingLogoDark} alt="Landing_logo" />
            </section>
        </div>
    );
};

export default Landing;
