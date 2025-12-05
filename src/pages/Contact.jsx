import "../styles/pages/_contact.scss";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider.jsx";
import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact-page">
            <header>
                <HeaderSlider />
            </header>

            {/* NAVIGATION */}
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src="logo3.png" alt="Library Logo" />
                    </Link>
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* BREADCRUMBS */}
        <div className="breadcrumbs">
            <Link to="/">Home</Link> &gt; Contact Us
        </div>

            {/* HERO SECTION (same style as home-page hero) */}
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>
                    We're here to help! Reach out to us for inquiries, support, or general information.
                </p>
            </section>

            {/* CONTACT CARD (same card style as home-page featured sections) */}
            <section className="contact-card">
                <h2>Get in Touch</h2>

                <p>
                    Feel free to contact our team using the details below.
                    We will respond as soon as possible.
                </p>

                <address>
                    <strong>District Library</strong><br />
                    123 Library Street<br />
                    Cityville, State 12345<br />
                    Phone: (123) 456-7890<br />
                    Email: info@districtlibrary.com<br />
                </address>
            </section>

            {/* MAP (same rounded look + shadow like cards) */}
            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>


            {/* FOOTER */}
            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src="logo3.png" alt="Library Logo" />
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/loanservice">Loan Service</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social"></div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024-present District Library. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
