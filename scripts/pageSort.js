import books from "../data/books.js"; // Import the books data
let sortingArray = books; // Array to hold books for sorting/filtering
let oldestBtn, newestBtn, genreDropDownItems, currentArray;

const bookContainer = document.getElementById("book-display"); // Book container element

// Function to filter books by genre
function returnGenreBooks(genre) {
    return sortingArray.filter(book => book.Genre === genre);
}

// QuickSort function for sorting by release date
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].ReleaseDate < pivot.ReleaseDate) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// Function to display the list of books
window.displayBooks = function (arrayToUse) {
    if (!arrayToUse) {
        arrayToUse = sortingArray;
    }
    currentArray = arrayToUse;

    bookContainer.innerHTML = `
        <div class="book-list">
            ${arrayToUse
                .map(
                    (book, index) => `
                        <div class="book-item" onclick="viewBook(${index})">
                            <img src="${book.Pictures[0]}" alt="${book.Title}">
                            <div class="book-title">${book.Title}</div>
                            <div class="book-genre">${book.Genre}</div>
                        </div>
                    `
                )
                .join("")}
        </div>
    `;
};

// Function to display a single book's details
window.viewBook = function (index) {
    const arrayToUse = currentArray || sortingArray;
    const book = arrayToUse[index];

    bookContainer.innerHTML = `
        <div class="book-detail">
            <h1>${book.Title}</h1>
            <img src="${book.Pictures[0]}" alt="${book.Title}">
            <p><strong>Author:</strong> ${book.Author}</p>
            <p><strong>Genre:</strong> ${book.Genre}</p>
            <p><strong>Release Date:</strong> ${book.ReleaseDate}</p>
            <p><strong>Author's City:</strong> ${book.AuthorCity}</p>
            <p><strong>Summary:</strong> ${book.Summary}</p>
            <button class="back-button" onclick="displayBooks()">Back to List</button>
        </div>
    `;
};

// Initialize the page functionality
window.onload = () => {
    oldestBtn = document.getElementById("oldest");
    newestBtn = document.getElementById("newest");
    genreDropDownItems = document.querySelectorAll(".dropcontent a");

    // Event listener for sorting by oldest release date
    oldestBtn.addEventListener("click", () => {
        let sortedArray = quickSort(sortingArray);
        displayBooks(sortedArray);
    });

    // Event listener for sorting by newest release date
    newestBtn.addEventListener("click", () => {
        let sortedArray = quickSort(sortingArray).reverse();
        displayBooks(sortedArray);
    });

    // Event listeners for filtering by genre
    genreDropDownItems.forEach(genreItem => {
        genreItem.addEventListener("click", (event) => {
            event.preventDefault();
            let genre = genreItem.innerHTML.trim();
            let filteredArray = returnGenreBooks(genre);
            displayBooks(filteredArray);
        });
    });

    // Initial display of books
    displayBooks(sortingArray);
};
