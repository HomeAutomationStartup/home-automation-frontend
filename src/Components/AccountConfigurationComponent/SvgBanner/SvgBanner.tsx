import CustButton from '../../Others/Button/CustButton';
import UseProfile from './../../../Assets/UseProfile.svg';
import './SvgBanner.css';

const SvgBanner = (props: any) => {
    return (
        <div className="svgBanner">
            <span className="svgBanner_header">
                <ul>
                    <li>
                        <CustButton
                            fn={props.toggleForm}
                            width="100%"
                            label={
                                props.status ? 'Select profile' : 'Add profile'
                            }
                            backCol="#e2ff00"
                            textCol="black"
                        />
                    </li>
                </ul>
            </span>
            <span className="svgBanner_banner">
                <img src={UseProfile} alt="profile_banner_pics" />
            </span>
        </div>
    );
};

export default SvgBanner;
