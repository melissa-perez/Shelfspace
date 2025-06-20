import { createContext, useState } from 'react';

const BookshelfContext = createContext();

function BookshelfProvider({ children }) {
  const [bookshelf, setBookshelf] = useState(() => {
    const saved = localStorage.getItem('bookshelf');
    return saved ? JSON.parse(saved) : [];
  });
  const addBookToShelf = (book) => {
    const alreadyInShelf = bookshelf.find((b) => b.key === book.key);
    if (alreadyInShelf) {
      window.alert('This book already exists in your bookshelf.');
      return;
    }

    const updated = [...bookshelf, book];
    setBookshelf(updated);
    localStorage.setItem('bookshelf', JSON.stringify(updated));
  };
  return (
    <BookshelfContext.Provider value={{ bookshelf, addBookToShelf }}>
      {children}
    </BookshelfContext.Provider>
  );
}

export { BookshelfContext, BookshelfProvider };
