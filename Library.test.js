const { Book} = require('./library');
const { Library} = require('./library');

// --test #1 adds a book to the library--

test('addBook adds a book to the inventory', () => {
  const library = new Library();
  const book = new Book('Title 1', 'Author 1');
  library.addBook(book);
  expect(library.inventory).toContain(book);
});

// test('issueBook moves a book from inventory to checkedOutBooks', () => {
//   const library = new Library();
//   const book = new Book('Title 1', 'Author 1');
//   library.addBook(book);
//   library.issueBook(book);
//   expect(library.inventory).not.toContain(book);
//   expect(library.checkedOutBooks).toContain(book);
// });

// test('acceptReturnedBook moves a book from checkedOutBooks to inventory', () => {
//   const library = new Library();
//   const book = new Book('Title 1', 'Author 1');
//   library.addBook(book);
//   library.issueBook(book);
//   library.acceptReturnedBook(book);
//   expect(library.checkedOutBooks).not.toContain(book);
//   expect(library.inventory).toContain(book);
// });

// test('displayInventory returns a copy of the inventory', () => {
//   const library = new Library();
//   const book1 = new Book('Title 1', 'Author 1');
//   const book2 = new Book('Title 2', 'Author 2');
//   library.addBook(book1);
//   library.addBook(book2);
//   const inventory = library.displayInventory();
//   expect(inventory).toContain(book1);
//   expect(inventory).toContain(book2);
//   expect(inventory).not.toBe(library.inventory);
// });
