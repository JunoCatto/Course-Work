// From brief time with c# I know that classes are essentially templates for objects.
// Looked up the syntax for this in JS.
class book {
  constructor(Name, Author, Description, Pages) {
    this.Name = Name;
    this.Author = Author;
    this.Description = Description;
    this.Pages = Pages;
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

book4.Description = "A very cool book!";
console.log(book4.Description);

let bookShelf = [book1, book2, book3, book4, book5];
