import books from "./books.js"
let sortingArray = books

let oldestBtn
let newestBtn
let genreDropDownItems
let currentArray
const bookContainer = document.getElementById("book-display")
let currentGenre

function returnGenreBooks(genre) {
    let genreBookArray = []

    sortingArray.forEach(book => {
        if (book.Genre == genre) {
            genreBookArray.push(book)
        }
    })

    return genreBookArray
}

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
}

window.displayBooks = function (arrayToUse) {
    if (!arrayToUse) { arrayToUse = sortingArray }
    currentArray = arrayToUse

    bookContainer.innerHTML = 
        `
        <div class="book-list">
            ${arrayToUse
                .map(
                    (book, index) => `
                        <div class="book-item" onclick="viewBook(${index})">
                            <img src="${book.Pictures[0]}" alt="${book.Title}">
                            <div class="book-title">${book.Title}</div>
                            <div class="book-genre">${book.Genre}</div>
                        </div>`
                ).join("")}
        </div>
        `

    registerClickEvents()
}

window.viewBook = function (index) {
    const arrayToUse = (currentArray) ? currentArray : sortingArray
    const book = arrayToUse[index]

    bookContainer.innerHTML = 
    `
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
    `
}

window.onload = () => {
    oldestBtn = document.getElementById("oldest")
    newestBtn = document.getElementById("newest")
    genreDropDownItems = document.querySelectorAll(".dropelement")

    oldestBtn.addEventListener("click", () => { 
        let sortedArray = quickSort(currentArray)
        displayBooks(sortedArray)
    })

    newestBtn.addEventListener("click", () => { 
        let sortedArray = quickSort(currentArray).reverse()
        displayBooks(sortedArray)
    })
    
    genreDropDownItems.forEach(genre => {
        genre.addEventListener("click", (event) => { 
            event.preventDefault()

            let sortedArray = returnGenreBooks(genre.innerHTML)
            displayBooks(sortedArray)
        })
    })

    displayBooks(sortingArray)
}
