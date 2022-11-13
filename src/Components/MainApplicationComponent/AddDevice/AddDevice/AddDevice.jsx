import FormToAddDevice from './../FormToAddDevice/FormToAddDevice';
import AddDevices from './../../../../Assets/AddDevice.svg';
import './AddDevice.css';

const AddDevice = (props) => {
    return (
        <div
            className="addDevice"
            style={{ background: props.backCol, borderRadius: props.radius }}
        >
            <section className="addDevice_info">
                <img
                    src={AddDevices}
                    alt="addDevice_pics"
                    width="570"
                    height="570"
                />
            </section>
            <section
                className="addDevice_form"
                style={{ borderTopRightRadius: props.radius }}
            >
                <p>Add you device here</p>
                <FormToAddDevice />
            </section>
        </div>
    );
};

export default AddDevice;
