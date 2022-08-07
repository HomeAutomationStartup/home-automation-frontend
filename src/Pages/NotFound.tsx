import PageNotFoundDark from './../Assets/PageNotFoundDark.svg';
import GreenButton from '../Components/Others/Button/AuthButton';

const NotFound = () => {
    return (
        <div
            style={{
                // background: "#FFFDD0",
                background: 'rgb(21, 26, 30)',
                display: 'flex',
                borderRadius: '0.5rem',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <section
                style={{
                    position: 'absolute',
                }}
            >
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
                    //   background: "gba(255, 255, 255, 0.6)",
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
                        // textDecoration: "underline",
                    }}
                >
                    The page you were looking for could not be found. It might
                    have been removed, renamed, or did not exist in the first
                    place.
                </h2>
                <GreenButton label="Back" />
            </section>
        </div>
    );
};

export default NotFound;
