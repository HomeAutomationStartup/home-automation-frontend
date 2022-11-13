import { ProfileConfigurationPageStyles as styles } from './../Assets/GlobalCss';
import ProfileConfigurationContainer from '../Components/AccountConfigurationComponent/ProfileConfigurationContainer/ProfileConfigurationContainer';
import { ToastContainer } from 'react-toastify';

const AccountConfigurationPage = () => {
    return (
        <div style={styles.div}>
            <ProfileConfigurationContainer />
            <ToastContainer />
        </div>
    );
};

export default AccountConfigurationPage;
