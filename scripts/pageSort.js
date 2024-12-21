import books from "../data/books.js"
let sortingArray = books

let oldestBtn
let newestBtn
let genreDropDownItems

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
};

function updateBooks(bookArray) {
    console.log(bookArray)
}

window.onload = () => {
    oldestBtn = document.getElementById("oldest")
    newestBtn = document.getElementById("newest")
    genreDropDownItems = document.querySelectorAll(".dropelement")

    oldestBtn.addEventListener("click", () => { 
        let sortedArray = quickSort(sortingArray).reverse()
        updateBooks(sortedArray)
    })

    newestBtn.addEventListener("click", () => { 
        let sortedArray = quickSort(sortingArray)
        updateBooks(sortedArray)
    })
    
    genreDropDownItems.forEach(genre => {
        genre.addEventListener("click", (event) => { 
            event.preventDefault()

            let sortedArray = returnGenreBooks("Adventure")
            updateBooks(sortedArray)
        })
    })
}