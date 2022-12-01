import { DarkColorRules } from '../../../../Data/Constant';
import './InformationBackdropModelContent.css';

const InformationBackdropModelContent = (props: any) => {
    return (
        <div
            className="informationBackdropModelContent"
            style={{ background: DarkColorRules.InnerBackground }}
        >
            <p>
                {props.content}{' '}
                <span style={{ color: 'orangered' }}>{props.value}</span>.
            </p>
        </div>
    );
};

export default InformationBackdropModelContent;
