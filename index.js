const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here
//selecting element by header element
const bookStoreTitle = document.getElementById('header');
console.log("Header element:", bookStoreTitle);

//changing  text to book store name
bookStoreTitle.textContent = bookStore.name;
console.log("Updated header text:", bookStoreTitle.textContent);

const bookList = document.getElementById('book-list');
  console.log("selected book-list element:", bookList);


//looping through the books and creating elements for each book
bookStore.books.forEach(book => {
    console

    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');
    console.log("created li, h3, p, img elements:");

//setting the text content and image source for each book
    bookTitle.textContent = book.title;
    console.log("Set booktitle text to:", book.title);

    bookAuthor.textContent = book.author;
    console.log("Set bookAuthor to:", book.author);

    bookImage.src = book.imageUrl;
    console.log("Set bookImage src to:", book.imageUrl);
    
//appending book elements to booklist
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);
    console.log("Appended title, author, and image to to bookContainer");

   

    //appending bookContainer to bookList
    bookList.appendChild(bookContainer);
    console.log("Appended bookContainer to booklist");
});

console.log("Finished rendering book list", bookStore.books.length);