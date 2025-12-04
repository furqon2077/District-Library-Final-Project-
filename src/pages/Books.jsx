import { Link } from "react-router-dom";
import Gallery from "../components/Gallery/Gallery";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";

export default function Books() {
    return (
        <div className="books-page">

            {/* HEADER WITH SLIDER */}
            <header>
                <HeaderSlider />
            </header>

            {/* NAV */}
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src="/src/img/desktop/logo3.png" alt="Library Logo" />
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
                <Link to="/">Home</Link> &gt; Category 1 &gt; Subcategory 1.1 &gt; Current Page
            </div>

            {/* CONTENT BLOCK — contains the React gallery */}
            <div className="content-block">
                <Gallery />
            </div>

            {/* FOOTER */}
            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src="/src/img/desktop/logo3.png" alt="Library Logo" />
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/loanservice">Loan Service</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social">{/* future icons */}</div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 District Library. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
