import { useState } from 'react';
import FormToAddProfile from '../Components/AccountConfigurationComponent/FormToAddProfile/FormToAddProfile';
import SelectProfile from '../Components/AccountConfigurationComponent/SelectProfile/SelectProfile';
import SvgBanner from '../Components/AccountConfigurationComponent/SvgBanner/SvgBanner';
import { accountConfigurationPageStyles as styles } from './../Assets/GlobalCss';
const AccountConfigurationPage = () => {
    const [openForm, setOpenForm] = useState(true);
    const toggleForm = () => {
        setOpenForm(!openForm);
    };
    return (
        <div style={styles.div}>
            <section style={styles.outerSection}>
                <section style={styles.innerSection}>
                    <SvgBanner toggleForm={toggleForm} status={openForm} />
                </section>
                <section style={styles.innerSection}>
                    {openForm && <FormToAddProfile />}
                    {!openForm && <SelectProfile />}
                </section>
            </section>
        </div>
    );
};

export default AccountConfigurationPage;
