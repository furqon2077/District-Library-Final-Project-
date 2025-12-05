import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import "../../styles/components/_gallery.scss";

export default function Gallery() {
    const [books, setBooks] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [sortMode, setSortMode] = useState(null);
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;
    const navigate = useNavigate();

    /** LOAD DATA */
    useEffect(() => {
        fetch(import.meta.env.BASE_URL + "bookdata.json")
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.error("Error loading books:", err));
    }, []);

    /** FILTER + SORT BOOKS */
    const filteredBooks = useMemo(() => {
        let result = [...books];

        // Filter available only
        if (showAvailableOnly) {
            result = result.filter((b) => b.inLoan === "no");
        }

        // Search filter
        if (filterText.trim()) {
            const query = filterText.toLowerCase();
            result = result.filter((b) => b.bookName.toLowerCase().includes(query));
        }

        // Sorting
        if (sortMode) {
            result.sort((a, b) =>
                sortMode === "asc"
                    ? a.bookName.localeCompare(b.bookName)
                    : b.bookName.localeCompare(a.bookName)
            );
        }

        return result;
    }, [books, filterText, sortMode, showAvailableOnly]);

    /** PAGINATION */
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

    /** HANDLE LOAN */
    const handleLoan = (bookName) => {
        navigate(`/loanservice?book=${encodeURIComponent(bookName)}`);
    };

    /** RESET PAGE ON FILTER CHANGE */
    useEffect(() => {
        setCurrentPage(1);
    }, [filterText, sortMode, showAvailableOnly]);

    return (
        <div className="gallery-wrapper">

            {/* SEARCH BAR */}
            <SearchBar onFilter={setFilterText} />

            {/* SORT + FILTER */}
            <SortBar
                onSort={setSortMode}
                onAvailable={() => setShowAvailableOnly((prev) => !prev)}
            />

            {/* TOP PAGINATION */}
            <Pagination
                totalItems={filteredBooks.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />

            {/* GALLERY GRID */}
            <div className="gallery-container">
                {currentBooks.map((book) => (
                    <div key={book.id} className="gallery-item">
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

            {/* BOTTOM PAGINATION */}
            <Pagination
                totalItems={filteredBooks.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
