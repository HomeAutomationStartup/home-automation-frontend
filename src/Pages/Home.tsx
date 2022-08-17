import Advertisment from './../Components/HomeComponent/Advertisment/Index';
import AuthContainer from './../Components/HomeComponent/AuthContainer/AuthContainer';

const Home = () => {
    const styles = {
        div: {
            height: '100%',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '2.5fr 1fr',
            gridAutoRows: '100%',
            gridGap: '10px',
        },
        section: {
            borderRadius: '0.5rem',
        },
    };
    return (
        <div style={styles.div}>
            <section style={styles.section}>
                <Advertisment />
            </section>
            <section style={styles.section}>
                <AuthContainer />
            </section>
        </div>
    );
};

export default Home;
