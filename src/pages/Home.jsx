import { Link } from "react-router-dom";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";
import "../styles/pages/_home.scss";

export default function Home() {
    return (
        <div className="home-page">

            {/* HEADER WITH SLIDER */}
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

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to District Library</h1>
                    <p>
                        Discover thousands of books, loan your favorites, and explore new genres.
                        A world of knowledge awaits you.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/books" className="btn-primary">Browse Books</Link>
                        <Link to="/contact" className="btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* FEATURED BOOKS PREVIEW */}
            <section className="featured">
                <h2>Featured Books</h2>

                <div className="featured-grid">
                    <div className="featured-card">
                        <img src="header3.jpg" alt="Featured 1" />
                        <p>The Great Adventure</p>
                    </div>

                    <div className="featured-card">
                        <img src="header21920x200.jpg" alt="Featured 2" />
                        <p>Mystery of the Woods</p>
                    </div>

                    <div className="featured-card">
                        <img src="header1618x200.jpg" alt="Featured 3" />
                        <p>Coding for Beginners</p>
                    </div>
                </div>

                <Link to="/books" className="btn-view-more">View More</Link>
            </section>

            {/* LIBRARY STATS */}
            <section className="stats">
                <div className="stat-item">
                    <h3>10,000+</h3>
                    <p>Books Available</p>
                </div>

                <div className="stat-item">
                    <h3>500+</h3>
                    <p>Monthly Visitors</p>
                </div>

                <div className="stat-item">
                    <h3>120+</h3>
                    <p>Genres to Explore</p>
                </div>

                <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Online Access</p>
                </div>
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
