// From brief time with c# I know that classes are essentially templates for objects.
// Looked up the syntax for this in JS.
// class book {
//   constructor(Name, Author, Description, Pages) {
//     this.Name = Name;
//     this.Author = Author;
//     this.Description = Description;
//     this.Pages = Pages;
//   }
// }

const book1 = {
  Title: "1984",
  Author: "George Orwell",
  Description: "Dystopian Novel",
  Pages: 328,
};

const book2 = {
  Title: "To kill a mockingbird",
  Author: "Harper Lee",
  Description: "Classic Novel",
  Pages: 281,
};

const book3 = {
  Title: "The Great Gatsby",
  Author: "F. Scott Fitzgerald",
  Description: "Tragic novel",
  Pages: 180,
};

const book4 = {
  Title: "House of Leaves",
  Author: "Mark Z. Danielewski",
  Description: "Horror novel",
  Pages: 709,
};

const book5 = {
  Title: "The Hobbit",
  Author: "J.R.R. Tolkien",
  Description: "Fantasy novel",
  Pages: 310,
};

book4.Description = "A very cool book!";
console.log(book4.Description);

let bookShelf = [book1, book2, book3, book4, book5];
