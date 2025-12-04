import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import "../../styles/components/_gallery.scss";

export default function Gallery() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [filterText, setFilterText] = useState("");
    const [sortMode, setSortMode] = useState(null);
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const navigate = useNavigate();

    // Fetch bookdata.json
    useEffect(() => {
        fetch("/bookdata.json")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setFilteredBooks(data);
            })
            .catch((err) => console.error("Error loading books:", err));
    }, []);

    // Filtering + sorting logic
    useEffect(() => {
        let updated = [...books];

        // Filter by available
        if (showAvailableOnly) {
            updated = updated.filter((b) => b.inLoan === "no");
        }

        // Filter by search text
        if (filterText.trim() !== "") {
            updated = updated.filter((b) =>
                b.bookName.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        // Sorting
        if (sortMode === "asc") {
            updated.sort((a, b) => a.bookName.localeCompare(b.bookName));
        } else if (sortMode === "desc") {
            updated.sort((a, b) => a.authorName.localeCompare(b.authorName));
        }

        setFilteredBooks(updated);
        setCurrentPage(1);
    }, [books, filterText, sortMode, showAvailableOnly]);

    // Pagination slicing
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBooks = filteredBooks.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Handle loan button
    function handleLoan(bookName) {
        const encoded = encodeURIComponent(bookName);
        navigate(`/loanservice?book=${encoded}`);
    }

    return (
        <div className="gallery-wrapper">

            {/* SEARCH BAR */}
            <SearchBar
                onFilter={(text) => setFilterText(text)}
            />

            {/* SORT BUTTONS */}
            <SortBar
                onSort={(mode) => setSortMode(mode)}
                onAvailable={() => setShowAvailableOnly(!showAvailableOnly)}
            />

            {/* TOP PAGINATION */}
            <Pagination
                totalItems={filteredBooks.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
            />

            {/* GALLERY */}
            <div className="gallery-container">
                {currentBooks.map((book) => (
                    <div key={book.bookName} className="gallery-item">
                        <img src={book.src} alt={book.alt} />

                        <div className="book-info">
                            <p><strong>Genre:</strong> {book.genre}</p>
                            <p><strong>Book:</strong> {book.bookName}</p>
                            <p><strong>Author:</strong> {book.authorName}</p>
                            <p><strong>Published:</strong> {book.publishedYear}</p>

                            {book.inLoan === "yes" ? (
                                <>
                                    <p className="loan-status unavailable">
                                        <strong>Loan:</strong> Unavailable
                                    </p>

                                    <p className="loan-period">
                                        <strong>Period:</strong> {book.loanStartDate} → {book.loanEndDate}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="loan-status available">
                                        <strong>Loan:</strong> Available
                                    </p>

                                    <button
                                        className="LB-available"
                                        onClick={() => handleLoan(book.bookName)}
                                    >
                                        Loan this book
                                    </button>
                                </>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <Pagination
                totalItems={filteredBooks.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}
