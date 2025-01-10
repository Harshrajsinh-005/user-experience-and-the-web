import books from "./books.js"
let sortingArray = books

let currentArray
const bookContainer = document.getElementById("book-display")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateEditorsChoice() {
    currentArray = []
    let generatedNumbers = []

    for (let i = 0; i < 3; i++) {
        let randomNum = getRandomInt(0, sortingArray.length)

        if (generatedNumbers.includes(randomNum)) {
            i--
        } else {
            generatedNumbers.push(randomNum)
            currentArray.push(sortingArray[randomNum])
        }
    }

    return currentArray
}

window.displayBooks = function () {
    let arrayToUse = generateEditorsChoice()

    bookContainer.innerHTML = 
        `
        <div class="book-list">
            ${arrayToUse
                .map(
                    (book, index) => `
                        <div class="book-item" onclick="viewBook(${index})">
                            <img src="${book.Pictures[0]}" alt="${book.Title}" role="img">
                            <div class="book-title">${book.Title}</div>
                            <div class="book-genre">${book.Genre}</div>
                        </div>`
                ).join("")}
        </div>
        `
}

window.viewBook = function (index) {
    const arrayToUse = (currentArray) ? currentArray : sortingArray
    const book = arrayToUse[index]

    bookContainer.innerHTML = 
    `
        <div class="book-detail">
            <h1>${book.Title}</h1>
            <img src="${book.Pictures[0]}" alt="${book.Title}" role="img">
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
    displayBooks()
}
