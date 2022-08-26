import PageNotFoundDark from './../Assets/PageNotFoundDark.svg';
import CustButton from '../Components/Others/Button/CustButton';

const NotFoundPage = () => {
    const styles = {
        div: {
            background: 'rgb(21, 26, 30)',
            display: 'flex',
            borderRadius: '0.5rem',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        img: {
            position: 'absolute',
        },
    };
    return (
        <div style={styles.div}>
            <section style={styles.div}>
                <img src={PageNotFoundDark} alt="notFound_logo" />
            </section>
            <section
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '90%',
                    height: '50%',
                    top: '2rem',
                    fontWeight: '100',
                    color: 'lavender',
                    backdropFilter: 'blur(2px)',
                    zIndex: '1000',
                }}
            >
                <h1
                    style={{
                        fontSize: 'calc(2vw + 2vh + 1vmin)',
                        margin: '1rem',
                    }}
                >
                    Whoops, Page
                </h1>
                <h1
                    style={{
                        fontSize: 'calc(1.5vw + 1.5vh + 1vmin)',
                        margin: '1rem',
                    }}
                >
                    Not Found -{' '}
                    <span
                        style={{
                            color: 'red',
                        }}
                    >
                        404
                    </span>
                </h1>
                <h2
                    style={{
                        fontSize: 'calc(0.5vw + 0.5vh + 1.5vmin)',
                    }}
                >
                    The page you were looking for could not be found. It might
                    have been removed, renamed, or did not exist in the first
                    place.
                </h2>
                <CustButton label="Back" backCol="#00BF87" textCol="black" />
            </section>
        </div>
    );
};

export default NotFoundPage;
