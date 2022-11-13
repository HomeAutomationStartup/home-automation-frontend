import './DeviceInfo.css';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

const DeviceInfo = (props: any) => {
    return (
        <div className="deviceInfo">
            <section className="deviceInfo_heading">
                {props.headingText}
            </section>
            <section className="deviceInfo_details">
                <ul>
                    <li>
                        <h1>Topic:&nbsp;&nbsp;</h1>
                        <h2
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    props.subHeadingText,
                                );
                                toast.success('Copied!');
                            }}
                        >
                            {props.subHeadingText}
                        </h2>
                    </li>
                    <li>
                        <h1>Type:&nbsp;&nbsp;</h1>
                        <h2>{props.deviceType}</h2>
                    </li>
                    <li>
                        <h1>Created:&nbsp;&nbsp;</h1>
                        <h2> {props.created}</h2>
                    </li>
                    <li>
                        <h1>Last Modified:&nbsp;&nbsp;</h1>
                        <h2> {props.lastModified}</h2>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default DeviceInfo;
