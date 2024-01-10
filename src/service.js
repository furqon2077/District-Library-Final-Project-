// Function to fetch JSON data from file
async function fetchBooksData() {
    try {
        const response = await fetch('bookdata.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function displayBooks(booksData) {
    // Display the books on the UI
    var contentBlock = document.querySelector('.content-block');
    contentBlock.innerHTML = '';

    booksData.forEach(book => {
        var card = document.createElement('div');
        card.className = 'book-card';

        var image = document.createElement('img');
        image.src = book.src;
        image.alt = book.alt;
        image.width = 50;
        image.height = 50;

        var bookInfo = document.createElement('div');
        bookInfo.className = 'book-info';

        // Check if the book is available for loan
        var inLoanStatus = (book.inLoan.toLowerCase() === 'yes') ? '<strong>Not available</strong>' : '<strong>Available</strong>';

        // Construct HTML based on loan availability
        if (book.inLoan.toLowerCase() === 'yes') {
            bookInfo.innerHTML = `
                <h3>${book.bookName}</h3>
                <p>Genre: <strong>${book.genre}</strong></p>
                <p>Author: ${book.authorName}</p>
                <p>Published Year: ${book.publishedYear}</p>
                <p>In Loan: ${inLoanStatus}</p>
                <p><strong>Loan Start Date:</strong> ${book.loanStartDate}</p>
                <p><strong>Loan End Date:</strong> ${book.loanEndDate}</p>
            `;
        } else {
            bookInfo.innerHTML = `
                <h3>${book.bookName}</h3>
                <p>Genre: <strong>${book.genre}</strong></p>
                <p>Author: ${book.authorName}</p>
                <p>Published Year: ${book.publishedYear}</p>
                <p>In Loan: ${inLoanStatus}</p>
            `;
        }

        card.appendChild(image);
        card.appendChild(bookInfo);
        contentBlock.appendChild(card);
    });
}


function sortBooks(criteria) {
    fetchBooksData().then((booksData) => {
        switch (criteria) {
            case 'genre':
                booksData.sort((a, b) => a.genre.localeCompare(b.genre));
                break;
            case 'bookName':
                booksData.sort((a, b) => a.bookName.localeCompare(b.bookName));
                break;
            case 'authorName':
                booksData.sort((a, b) => a.authorName.localeCompare(b.authorName));
                break;
            case 'inLoan':
                booksData.sort((a, b) => a.inLoan.localeCompare(b.inLoan));
                break;
            case 'loanStartDate':
                booksData.sort((a, b) => new Date(a.loanStartDate) - new Date(b.loanStartDate));
                break;
            case 'loanEndDate':
                booksData.sort((a, b) => new Date(a.loanEndDate) - new Date(b.loanEndDate));
                break;
            default:
                // Default sorting by genre
                booksData.sort((a, b) => a.genre.localeCompare(b.genre));
                break;
        }

        // Update the displayed books
        displayBooks(booksData);
    });
}

function filterAvailableForLoan() {
    fetchBooksData().then((booksData) => {
        const availableForLoan = booksData.filter(book => book.inLoan.toLowerCase() === 'yes');
        displayBooks(availableForLoan);
    });
}

// Initial display of books
fetchBooksData().then((booksData) => {
    displayBooks(booksData);
});
