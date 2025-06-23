import { useContext } from 'react';
import { BookshelfContext } from '../../context/BookshelfContext';

import BookForm from '../../features/book/BookForm/BookForm';
import BookSearch from '../../features/search/BookSearch/BookSearch';

import booksPageStyles from './BooksPage.module.css';
import BookList from '../../features/book/BookList/BookList';

function BooksPage() {
  const { bookshelf } = useContext(BookshelfContext);
  return (
    <div className={`container ${booksPageStyles.booksContainer}`}>
      <h1>📖Book Tracker</h1>
      <h2>🔍Book Search</h2>
      <BookSearch />
      <BookForm />
      <h2>🔖My Bookshelf</h2>
      <BookList results={bookshelf} showButton={false} />
    </div>
  );
}

export default BooksPage;
