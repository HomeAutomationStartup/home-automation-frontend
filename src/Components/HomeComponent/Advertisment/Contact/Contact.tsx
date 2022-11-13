import {
    page_4_policy_list,
    page_4_getHelp_list,
    page_4_developers_list,
    page_4_docs_list,
    page_4_socialContact_list,
} from '../../../../Data/HomePageConstant';
import { DarkColorRules } from '../../../../Data/Constant';
import './Contact.css';

const Contact = () => {
    const color_1 = DarkColorRules.InnerBackground;
    return (
        <div className="contact" style={{ background: color_1 }}>
            <section
                className="contact_content"
                style={{ background: color_1 }}
            >
                <section className="contact_content_info">
                    <section className="contact_content_info_contact">
                        <p className="contact_content_info_contact_organization_name">
                            &reg;&nbsp;
                            <span
                                style={{ color: '#E2FF00', lineHeight: '27px' }}
                            >
                                Sparetm
                            </span>
                        </p>
                        <p style={{ lineHeight: '27px' }}>
                            Make this app better by connecting with us &#128512;
                        </p>
                        <ul className="contact_content_info_contact_list">
                            {page_4_socialContact_list.map((item) => (
                                <li key={item?.id}>
                                    <a
                                        href={item?.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {item?.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="contact_content_info_others">
                        <div>
                            <h2 style={{ lineHeight: '27px' }}>DOCS</h2>
                            <ul className="contact_content_info_others_list">
                                {page_4_docs_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ lineHeight: '27px' }}>DEVELOPERS</h2>
                            <ul className="contact_content_info_others_list">
                                {page_4_developers_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ lineHeight: '27px' }}>GET HELP</h2>
                            <ul className="contact_content_info_others_list">
                                {page_4_getHelp_list.map((item) => (
                                    <li key={item?.id}>
                                        <a
                                            href={item?.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {item?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="contact_content_copyright">
                    <ul className="contact_content_copyright_list_row_1">
                        {page_4_policy_list.map((item) => (
                            <li key={item?.id}>
                                <a
                                    href={item?.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item?.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="contact_content_copyright_list_row_2">
                        <li>
                            COPYRIGHT &copy; 2022 OPENBRIDGE INC. <br />
                            ALL RIGHT RESERVED.
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default Contact;
