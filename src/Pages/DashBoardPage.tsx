const DashBoardPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem',
                background: 'rgb(21, 26, 30)',
            }}
        >
            <section
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: '3fr 1fr',
                    paddingLeft: '0',
                    listStyle: 'none',
                    overflow: 'hidden',
                    color: 'white',
                    gridGap: '10px',
                }}
            >
                <section
                    style={{
                        borderRadius: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <section
                        style={{
                            background: 'rgb(7, 11, 13)',
                            width: '100%',
                            height: '29.3%',
                            borderRadius: 'inherit',
                        }}
                    ></section>
                    <section
                        style={{
                            background: 'rgb(7, 11, 13)',
                            width: '100%',
                            height: '69.3%',
                            borderRadius: 'inherit',
                        }}
                    ></section>
                </section>
                <section
                    style={{
                        background: 'rgb(7, 11, 13)',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem',
                        color: 'white',
                    }}
                >
                    <section
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '19%',
                            width: '100%',
                            background: 'rgb(173, 216, 230,0.5)',
                            borderRadius: 'inherit',
                        }}
                    >
                        Notification
                    </section>
                    <section
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '19%',
                            width: '100%',
                            background: 'rgb(173, 216, 230,0.5)',
                            borderRadius: 'inherit',
                        }}
                    >
                        Notification
                    </section>
                    <section
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '19%',
                            width: '100%',
                            background: 'rgb(173, 216, 230,0.5)',
                            borderRadius: 'inherit',
                        }}
                    >
                        Notification
                    </section>
                    <section
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '39%',
                            width: '100%',
                            background: 'rgb(173, 216, 230,0.5)',
                            borderRadius: 'inherit',
                        }}
                    >
                        Calendar
                    </section>
                </section>
            </section>
        </div>
    );
};

export default DashBoardPage;
