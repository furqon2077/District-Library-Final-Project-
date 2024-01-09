document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const paginationContainer = document.getElementById("pagination");
    const itemsPerPage = 10;
    let bookData = []; // Updated to store the book data
  
    // Fetch the book data from the JSON file
    fetch('bookdata.json')
      .then(response => response.json())
      .then(data => {
        bookData = data;
        initializeGallery();
      })
      .catch(error => console.error('Error fetching book data:', error));
  
    let currentPage = 1;
    let currentSort = null;
    let currentFilter = null;
  
    function displayItems(pageNumber) {
      galleryContainer.innerHTML = "";
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      // Apply sorting and filtering
      let filteredData = bookData;
      if (currentFilter) {
        filteredData = filteredData.filter(book => book.bookName.toLowerCase().includes(currentFilter.toLowerCase()));
      }
      if (currentSort === 'asc') {
        filteredData.sort((a, b) => a.bookName.localeCompare(b.bookName));
      } else if (currentSort === 'desc') {
        filteredData.sort((a, b) => b.bookName.localeCompare(a.bookName));
      }
  
      for (let i = startIndex; i < endIndex && i < filteredData.length; i++) {
        const book = filteredData[i];
        const item = document.createElement("div");
        item.className = "gallery-item";
  
        const img = document.createElement("img");
        img.src = book.src;
        img.alt = book.alt;
  
        const bookInfo = document.createElement("div");
        bookInfo.setAttribute("class", "book-info");
        bookInfo.setAttribute("data-in-loan", book.inLoan);
        
        bookInfo.innerHTML = `
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Book:</strong> ${book.bookName}</p>
          <p><strong>Author:</strong> ${book.authorName}</p>
          <p><strong>Published Year:</strong> ${book.publishedYear}</p>
          <p><strong>In Loan:</strong> ${book.inLoan}</p>
          ${book.inLoan === 'yes' ? `<p class="loan-period"><strong>Loan Period:</strong> ${book.loanStartDate} to ${book.loanEndDate}</p>` : ''}
        `;
        
        // Append the bookInfo element to the document or another container
        document.body.appendChild(bookInfo);
        
  
        item.appendChild(img);
        item.appendChild(bookInfo);
        galleryContainer.appendChild(item);
      }
    }
  
    function createPaginationButtons() {
      const totalPages = Math.ceil(bookData.length / itemsPerPage);
  
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.className = "pagination-button";
        button.textContent = i;
        button.addEventListener("click", function () {
          currentPage = i;
          displayItems(currentPage);
        });
  
        paginationContainer.appendChild(button);
      }
    }
  
    function updateGallery() {
      displayItems(currentPage);
      paginationContainer.innerHTML = "";
      createPaginationButtons();
    }
  
    // Sorting buttons
    const sortAscButton = document.getElementById("sortAsc");
    const sortDescButton = document.getElementById("sortDesc");
  
    sortAscButton.addEventListener("click", function () {
      currentSort = 'asc';
      updateGallery();
    });
  
    sortDescButton.addEventListener("click", function () {
      currentSort = 'desc';
      updateGallery();
    });
  
    // Filtering input
    const filterInput = document.getElementById("filterInput");
    const filterButton = document.getElementById("filterButton");
  
    filterButton.addEventListener("click", function () {
      currentFilter = filterInput.value.trim();
      updateGallery();
    });
  
    function initializeGallery() {
      // Initial display
      displayItems(currentPage);
      createPaginationButtons();
    }
  });
  