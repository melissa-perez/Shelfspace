import BookForm from '../../features/book/BookForm/BookForm';
import BookSearch from '../../features/search/BookSearch/BookSearch';

import booksPageStyles from './BooksPage.module.css';

function BooksPage() {
  return (
    <div className={`container ${booksPageStyles.booksContainer}`}>
      <h1>📖Book Tracker</h1>
      <h2>🔍Book Search</h2>
      <BookSearch />
      <BookForm />
      <h2>🔖My Bookshelf</h2>
    </div>
  );
}

export default BooksPage;
