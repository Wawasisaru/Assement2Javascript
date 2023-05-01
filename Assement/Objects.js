// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//     isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//     isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//     1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//     isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//     ];
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
// 1951t,1861f,1866t,1925f,-800t
const books = [

    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
      isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
         isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
         isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
]
function getAvailableBooks (books){
    const availableBooks = [];
    for (let i= 0; i< books.length; i++){
        if (books[i].isAvailable){
            availableBooks.push(books[i])
        }
    }
    return availableBooks
}
console.log(getAvailableBooks(books))
    
// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
const books2 = [

    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
      isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
         isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
         isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
]

function getBooksByAuthor (authorName){
    const authorBooks = [];
    for(let i=0; i<books.length;i++){
        if ( books.authorName === authorName){
        authorBooks.push(books);
         }

    }
    return authorBooks
}
console.log(getBooksByAuthor(books2))

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
        
function addNewBook(books){
    
}
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title){
    function checkoutBook(tittle){
        const book = books.find(book => book.tittle === tittle);
        if(book){
            book.isAvailable = false;
            return `THe book ${tittle} is out`
        }else{
            retun `The book ${tittle} is not available`
        }
    }
}
console.log(checkoutBook(books))
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(title) {
    const book = books.find((book) => book.title === title);
    if (!book) {
      return `The book '${title}' does not belong to the library.`;
    }
    book.isAvailable = true;
  }
  console.log(returnBook(books))
  



