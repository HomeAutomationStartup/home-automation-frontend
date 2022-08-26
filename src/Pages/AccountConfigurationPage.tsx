import { useState } from 'react';
import FormToAddProfile from '../Components/AccountConfigurationComponent/FormToAddProfile/FormToAddProfile';
import SelectProfile from '../Components/AccountConfigurationComponent/SelectProfile/SelectProfile';
import SvgBanner from '../Components/AccountConfigurationComponent/SvgBanner/SvgBanner';

const AccountConfigurationPage = () => {
    const [openForm, setOpenForm] = useState(true);
    const styles = {
        div: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
        },
        outerSection: {
            height: '85%',
            width: '90%',
            display: 'grid',
            gridTemplateColumns: '1.5fr 2.5fr',
            gridAutoRows: '100%',
            gridGap: '10px',
            borderRadius: '0.5rem',
        },
        innerSection: {
            borderRadius: '0.5rem',
        },
    };
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
