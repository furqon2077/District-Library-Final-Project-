document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const paginationContainer = document.getElementById("pagination");
    const itemsPerPage = 10;
    const totalItems = 40; // Replace with the actual number of items
  
    // Mock data with different image sizes
    const imageData = Array.from({ length: totalItems }, (_, index) => ({
      src: `https://placekitten.com/300/${Math.floor(Math.random() * 300) + 200}`,
      alt: `Image ${index + 1}`,
    }));
  
    let currentPage = 1;
    let currentSort = null;
    let currentFilter = null;
  
    function displayItems(pageNumber) {
      galleryContainer.innerHTML = "";
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      // Apply sorting and filtering
      let filteredData = imageData;
      if (currentFilter) {
        filteredData = filteredData.filter(item => item.alt.includes(currentFilter));
      }
      if (currentSort === 'asc') {
        filteredData.sort((a, b) => a.alt.localeCompare(b.alt));
      } else if (currentSort === 'desc') {
        filteredData.sort((a, b) => b.alt.localeCompare(a.alt));
      }
  
      for (let i = startIndex; i < endIndex && i < filteredData.length; i++) {
        const item = document.createElement("div");
        item.className = "gallery-item";
        
        const img = document.createElement("img");
        img.src = filteredData[i].src;
        img.alt = filteredData[i].alt;
  
        item.appendChild(img);
        galleryContainer.appendChild(item);
      }
    }
  
    function createPaginationButtons() {
      const totalPages = Math.ceil(imageData.length / itemsPerPage);
  
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
  
    // Initial display
    displayItems(currentPage);
    createPaginationButtons();
  });
  