const myLibrary = [];
let itemNum = 1;

function Book(title, author, pages, status, itemNum) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status ? "Available" : "Not Available";
  this.itemNum = itemNum;
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
  const titleInput = document.querySelector("#title");
  const title = titleInput.value;

  if (title.trim() === "") {
    titleInput.setCustomValidity("Please enter a title.");
    titleInput.reportValidity();
    return;
  }

  const authorInput = document.querySelector("#author");
  const author = authorInput.value;
  if (author.trim() === "") {
    authorInput.setCustomValidity("Please enter an author.");
    authorInput.reportValidity();
    return;
  }
  const pagesInput = document.querySelector("#pages");
  const pages = pagesInput.value;
  if (pages.trim() === "") {
    pagesInput.setCustomValidity("Please enter an author.");
    pagesInput.reportValidity();
    return;
  }

  const statusInput = document.querySelector("#status");
  const status = statusInput.checked;
  if (!status) {
    statusInput.setCustomValidity("Please enter an author.");
    statusInput.reportValidity();
    return;
  }
  const book = new Book(title, author, pages, status, itemNum);
  addBookToLibrary(book);
  card(book); // Pass the book object to the card function
  itemNum++; // Increment itemNum here
});

const display = document.querySelector("#display-library-button");
display.addEventListener("click", displayLibrary);

function card(book) {
  const grandparent = document.getElementById("card");
  const parent = document.createElement("div");
  parent.setAttribute("id", `item${book.itemNum}`);

  const titleElement = document.createElement("h2");
  titleElement.textContent = book.title;
  parent.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.textContent = `by ${book.author}`;
  parent.appendChild(authorElement);

  const pageElement = document.createElement("h4");
  pageElement.textContent = `No of pages: ${book.pages}`;
  parent.appendChild(pageElement);

  const availability = document.createElement("h4");
  availability.textContent = `Availability: ${book.status}`;
  parent.appendChild(availability);

  const children = parent.querySelectorAll("*");
  children.forEach((child) => {
    child.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    child.style.padding = "10px";
    child.style.borderRadius = "10px";
    child.style.marginBottom = "10px";
    child.style.fontSize = "1.2rem";
    child.style.fontWeight = "600";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.display = "flex";
  removeBtn.style.width = "20%";
  removeBtn.style.height = "1%";
  removeBtn.style.borderRadius = "10%";
  removeBtn.style.fontSize = "1rem";
  removeBtn.style.justifyContent = "center";
  removeBtn.style.justifySelf = "center";
  removeBtn.style.gap = "5%";
  removeBtn.setAttribute("id", `rmv${book.itemNum}`);
  removeBtn.addEventListener("click", () => {
    removeItem(`item${book.itemNum}`);
  });

  parent.appendChild(removeBtn);

  grandparent.appendChild(parent);
}

function removeItem(id) {
  const rmvId = document.getElementById(id);
  const grandparent = document.getElementById("card");
  grandparent.removeChild(rmvId);

  const itemNumber = parseInt(id.replace("item", ""));
  const index = myLibrary.findIndex((b) => b.itemNum === itemNumber);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}
