import { createContext, useState } from 'react';

const BookshelfContext = createContext();

function BookshelfProvider({ children }) {
  const [bookshelf, setBookshelf] = useState(() => {
    const saved = localStorage.getItem('bookshelf');
    return saved ? JSON.parse(saved) : [];
  });
  const addBookToShelf = (book) => {
    const alreadyInShelf = bookshelf.find((b) => b.bookKey === book.bookKey);
    if (alreadyInShelf) {
      window.alert('This book already exists in your bookshelf.');
      return;
    }
    const updated = [...bookshelf, book];
    window.alert('Added book to bookshelf.');
    setBookshelf(updated);
    localStorage.setItem('bookshelf', JSON.stringify(updated));
  };
  const deleteBookInShelf = (bookKeyToDelete) => {
    const updated = bookshelf.filter(
      (book) => book.bookKey !== bookKeyToDelete.bookKey
    );
    window.alert('Removed book from bookshelf.');
    setBookshelf(updated);
  };
  return (
    <BookshelfContext.Provider
      value={{ bookshelf, addBookToShelf, deleteBookInShelf }}
    >
      {children}
    </BookshelfContext.Provider>
  );
}

export { BookshelfContext, BookshelfProvider };
