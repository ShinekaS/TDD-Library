class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  // --checking out a library book-- class has a constructor method that initializes two empty arrays---
  class Library {
    constructor() {
      this.inventory = [];
      this.checkedOutBooks = [];
    }
  // --adding a book into inventory--
    addBook(book) {
      this.inventory.push(book);
    }
  // --decrementing, removing / book checkout--
    issueBook(book) {
      const index = this.inventory.indexOf(book);
      if (index !== -1) {
        this.inventory.splice(index, 1);
        this.checkedOutBooks.push(book);
      }
    }
  
    acceptReturnedBook(book) {
      const index = this.checkedOutBooks.indexOf(book);
      if (index !== -1) {
        this.checkedOutBooks.splice(index, 1);
        this.inventory.push(book);
      }
    }
  
    displayInventory() {
      return [...this.inventory];
    }
  }
  
  module.exports = {
    Book,
    Library,
  };
  