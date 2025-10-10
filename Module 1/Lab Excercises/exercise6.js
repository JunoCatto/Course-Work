// From brief time with c# I know that classes are essentially templates for objects.

class book {
  constructor(name, author, description, pages) {
    this.name = "";
    this.author = "";
    this.description = "";
    this.pages = 0;
  }
}

let book1 = new book("1984", "George Orwell", "Dystopian novel", 328);
let book2 = new book(
  "To kill a mockingbird",
  "Harper Lee",
  "Classic novel",
  281
);
let book3 = new book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Tragic novel",
  180
);
let book4 = new book(
  "House of Leaves",
  "Mark Z. Danielewski",
  "Horror novel",
  709
);
let book5 = new book("The Hobbit", "J.R.R. Tolkien", "Fantasy novel", 310);

book4.description = "A very cool book!";
console.log(book4.description);

let bookShelf = [book1, book2, book3, book4, book5];
