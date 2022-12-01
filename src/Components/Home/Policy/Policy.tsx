import { ColorRules, PolicyStatement } from '../../../Data/Constant';
import Privacy from './../../../Assets/Privacy.svg';
import './Policy.css';

const Policy = () => {
    return (
        <div className="policy">
            <div
                className="policy_column_1"
                style={{ background: ColorRules[0].OuterBackground }}
                // style={{ background: '#008060' }}
            >
                <span
                    className="policy_column_1_img"
                    style={{
                        background: ColorRules[0].InnerBackground,
                    }}
                    // style={{
                    //     background: '#a5e3b9',
                    // }}
                >
                    <img
                        src={Privacy}
                        height="90%"
                        width="90%"
                        alt="privacy_policy_logo"
                        loading="lazy"
                    />
                </span>
            </div>
            <div
                className="policy_column_2"
                style={{ background: ColorRules[0].OuterBackground }}
                // style={{ background: '#008060' }}
            >
                <section className="policy_column_2_container">
                    {PolicyStatement.map((item) => (
                        <section className="policy_column_2_container_info">
                            <span
                                className="policy_column_2_container_info_header"
                                style={{
                                    color: ColorRules[0].HeadingColor,
                                    // color: 'white',
                                }}
                            >
                                <h1>{item.type}</h1>
                            </span>
                            <span
                                className="policy_column_2_container_info_date"
                                style={{
                                    color: ColorRules[0].subHeadingColor,
                                    // color: 'white',
                                }}
                            >
                                <p>{item.date}</p>
                            </span>
                            <span
                                className="policy_column_2_container_info_statement"
                                style={{
                                    color: ColorRules[0].HeadingColor,
                                    // color: 'white',
                                }}
                            >
                                <p>{item.statement}</p>
                            </span>
                        </section>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Policy;
