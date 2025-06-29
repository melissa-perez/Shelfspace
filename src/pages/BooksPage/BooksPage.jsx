import { useContext } from 'react';
import { BookshelfContext } from '../../context/BookshelfContext';

import BookSearch from '../../features/search/BookSearch/BookSearch';

import booksPageStyles from './BooksPage.module.css';
import BookList from '../../shared/BookList/BookList';

function BooksPage() {
  const { bookshelf } = useContext(BookshelfContext);
  return (
    <div className={`container ${booksPageStyles.booksContainer}`}>
      <h1>📖Book Tracker</h1>
      <h2>🔍Book Search</h2>
      <BookSearch />
      <h2>🔖My Bookshelf</h2>
      <BookList
        results={bookshelf}
        showAddButton={false}
        showDeleteButton={true}
        showUpdateForm={true}
        queryKey="books2"
      />
    </div>
  );
}

export default BooksPage;
