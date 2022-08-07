import Advertisment from './../Components/HomeComponent/Advertisment/Index';
import AuthContainer from './../Components/HomeComponent/AuthContainer/AuthContainer';

const Home = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '2.5fr 1fr',
                gridAutoRows: '100%',
                gridGap: '10px',
            }}
        >
            <section style={{ borderRadius: '0.5rem' }}>
                <Advertisment />
            </section>
            <section style={{ borderRadius: '0.5rem' }}>
                <AuthContainer />
            </section>
        </div>
    );
};

export default Home;
