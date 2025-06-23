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
  const updateBookStatusInShelf = (bookKeyToUpdate, status) => {
    const bookIndex = bookshelf.findIndex(
      (book) => book.bookKey === bookKeyToUpdate
    );
    if (bookIndex !== -1) {
      const updatedBook = {
        ...bookshelf[bookIndex],
        status: status,
      };
      const updated = [...bookshelf];
      updated[bookIndex] = updatedBook;
      window.alert('Updated book reading status.');
      localStorage.setItem('bookshelf', JSON.stringify(updated));
      setBookshelf(updated);
    } else {
      window.alert('Book not found.');
    }
  };
  const stats = {
    total: bookshelf.length,
    tbr: bookshelf.filter((b) => b.status === 'tbr').length,
    reading: bookshelf.filter((b) => b.status === 'reading').length,
    finished: bookshelf.filter((b) => b.status === 'finished').length,
  };
  return (
    <BookshelfContext.Provider
      value={{
        bookshelf,
        addBookToShelf,
        deleteBookInShelf,
        updateBookStatusInShelf,
        stats
      }}
    >
      {children}
    </BookshelfContext.Provider>
  );
}

export { BookshelfContext, BookshelfProvider };
