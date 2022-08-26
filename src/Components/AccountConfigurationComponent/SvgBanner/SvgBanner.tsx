import { useEffect } from 'react';
import { AccountConfiguration } from '../../../Data/Constant';
import CustButton from '../../Others/Button/CustButton';
import UseProfile from './../../../Assets/UseProfile.svg';
import './SvgBanner.css';

const SvgBanner = (props: any) => {
    useEffect(() => {
        // console.count();
    });
    return (
        <div className="svgBanner">
            <span className="svgBanner_header">
                <ul>
                    <li>
                        <CustButton
                            fn={props.toggleForm}
                            width="200px"
                            label={
                                props.status ? 'Select profile' : 'Add profile'
                            }
                            backCol="#e2ff00"
                            textCol="black"
                        />
                    </li>
                    <li>
                        {props.status
                            ? AccountConfiguration.banner_heading_to_add_profile
                            : AccountConfiguration.banner_heading_to_select_profile}
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
