import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <section className="contact_content">
                <section className="contact_content_info">
                    <section className="contact_content_info_contact">
                        <h1>
                            &reg;{' '}
                            <span style={{ color: '#E2FF00' }}>Sparetm</span>
                        </h1>
                        <p>
                            Make this app better by connecting with us &#128512;
                        </p>
                        <ul className="contact_content_info_contact_list">
                            <li>
                                <a
                                    href="https://github.com/HomeAutomationStartup"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="contact_content_info_others">
                        <div>
                            <h2>DOCS</h2>
                            <ul className="contact_content_info_others_list">
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>DEVELOPERS</h2>
                            <ul className="contact_content_info_others_list">
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>GET HELP</h2>
                            <ul className="contact_content_info_others_list">
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="contact_content_copyright">
                    <ul className="contact_content_copyright_list_row_1">
                        <li>
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                PRIVACY POLICY
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                COOKIE POLICY
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ABOUT
                            </a>
                        </li>
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
