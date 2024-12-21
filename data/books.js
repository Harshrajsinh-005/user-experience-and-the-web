/*
    Title is a string
    Author is a string
    Release date is a 4 digit number
    Summary is a string
    Genre is a string from the following (feel free to add more to the list)
        Romance 
        Fantasy
        Science Fiction
        Paranormal
        Mystery
        Horror
        Thriller/Suspense
        Action Adventure
        Historical Fiction
        Contemporary Fiction
    Pictures is an array of strings (URLs) to the image, find shortest link you can please
    Author city is a string with the city of the author, or the capital city of the country they live in
*/

const books = [
    { Title: "Throne of Glass", Author: "Sarah J Maas", ReleaseDate: 2012, Summary: "Celaena competes against twenty-three men in a contest to become the King’s Champion. The winner will serve the king for six years and then be granted their freedom. She must slowly rebuild her body to its former glory from her assassin days after serving as a prisoner and slave for a year.", Genre: "Fantasy", Pictures: ["https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781639730940.jpg", "https://m.media-amazon.com/images/I/81FE1DUxvvL._SY466_.jpg"], AuthorCity: "Pennsylvania" },
    { Title: "", Author: "", ReleaseDate: 1234, Summary: "", Genre: "Adventure", Pictures: ["", ""], AuthorCity: "" }
]

export default books