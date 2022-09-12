import Privacy from './../../../Assets/Privacy.svg';
import './Policy.css';

const Policy = () => {
    return (
        <div className="policy">
            <div className="policy_column_1">
                <img src={Privacy} alt="policy_logo" />
            </div>
            <div className="policy_column_2">
                <section className="policy_column_2_row_1">
                    <h1 style={{ color: 'white', fontSize: '32px' }}>
                        Privacy Policy
                    </h1>
                    <p style={{ color: '#d0f0c0', fontSize: '16px' }}>
                        Last Updated : 26 Jan, 2022
                    </p>
                    <p style={{ color: 'white', fontSize: '24px' }}>
                        This policy will be render from server Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                    </p>
                </section>
                <section className="policy_column_2_row_2">
                    <h1 style={{ color: 'white', fontSize: '32px' }}>
                        Cookie Policy
                    </h1>
                    <p style={{ color: '#d0f0c0', fontSize: '16px' }}>
                        Last Updated : 26 Jan, 2022
                    </p>
                    <p style={{ color: 'white', fontSize: '24px' }}>
                        This policy will be render from server Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Policy;
