import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";
import "../styles/pages/_loanService.scss";

export default function LoanService() {
    const [searchParams] = useSearchParams();
    const [bookName, setBookName] = useState("");

    // Form state (React-controlled inputs)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phoneNumber: "",
        loanConfirmation: false,
    });

    // Pre-fill book name from ?book= query param
    useEffect(() => {
        const name = searchParams.get("book");
        if (name) setBookName(decodeURIComponent(name));
    }, [searchParams]);

    // Handle all form inputs
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Basic validation
        if (!form.loanConfirmation) {
            alert("You must confirm the loan request.");
            return;
        }

        // You can send this to a backend later
        const loanData = {
            ...form,
            bookName,
        };

        console.log("Loan Submitted:", loanData);
        alert("Your loan request has been submitted!");
    }

    return (
        <div className="loanservice-page">

            {/* HEADER WITH SLIDER */}
            <header>
                <HeaderSlider />
            </header>

            {/* NAVIGATION */}
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
                <Link to="/">Home</Link> &gt; Loan Request
            </div>

            {/* LOAN FORM */}
            <div className="loan-form-container">
                <h2>Loan Request Form</h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            required
                            value={form.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            required
                            value={form.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={form.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Name:</label>
                        <input type="text" value={bookName} readOnly />
                    </div>

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="loanConfirmation"
                                checked={form.loanConfirmation}
                                onChange={handleChange}
                            />
                            &nbsp; I confirm that I want to loan this book for 10 days.
                        </label>
                    </div>

                    <button type="submit">Submit Loan Request</button>
                </form>
            </div>

            {/* FOOTER */}
            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src="/src/img/desktop/logo3.png.png" alt="Library Logo" />
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
                    <p>&copy; 2024 District Library. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
