import "../../styles/components/_pagination.scss";

export default function Pagination({
                                       totalItems,
                                       itemsPerPage,
                                       currentPage,
                                       onPageChange,
                                   }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    return (
        <div className="pagination-container">
            {Array.from({ length: totalPages }, (_, idx) => (
                <button
                    key={idx}
                    className="pagination-button"
                    onClick={() => {
                        onPageChange(idx + 1);

                        // Scroll to top when page changes
                        setTimeout(() => {
                            window.scrollTo({
                                top: 380,
                                behavior: "smooth",
                            });
                        }, 300);
                    }}
                    style={currentPage === idx + 1 ? { background: "#0056b3" } : {}}
                >
                    {idx + 1}
                </button>
            ))}
        </div>
    );
}
