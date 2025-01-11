const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  console.log(myLibrary);
}

const addBook = document.querySelector("#add-book-button");
addBook.addEventListener("click", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  if (pages === null) {
    pages = "?";
  }
  const status = document.querySelector("#status").value;
  const book = new Book(title, author, pages, status);
  addBookToLibrary(book);
});

const display = document.querySelector("#display-library-button");
display.addEventListener("click", displayLibrary);
