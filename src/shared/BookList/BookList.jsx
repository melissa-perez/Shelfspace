import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import BookCard from '../../features/book/BookCard/BookCard';

import '../../index.css';
import bookListStyles from './BookList.module.css';

function BookList({
  results,
  showAddButton,
  showDeleteButton,
  showUpdateForm,
  queryKey,
}) {
  const key = queryKey || 'page';
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 10;
  const rawPage = parseInt(searchParams.get(key) || '1', 10);
  const totalPages = Math.max(1, Math.ceil(results.length / itemsPerPage));
  const currentPage = Math.min(Math.max(rawPage, 1), totalPages);
  const indexOfFirstBook = (currentPage - 1) * itemsPerPage;
  const currentBooks = results.slice(
    indexOfFirstBook,
    indexOfFirstBook + itemsPerPage
  );

  useEffect(() => {
    if (results.length === 0) return;
    if (rawPage !== currentPage) {
      const params = new URLSearchParams(searchParams);
      params.set(key, currentPage.toString());
      setSearchParams(params);
    }
  }, [rawPage, currentPage, key, results, searchParams, setSearchParams]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const params = new URLSearchParams(searchParams);
      params.set(key, (currentPage - 1).toString());
      setSearchParams(params);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set(key, (currentPage + 1).toString());
      setSearchParams(params);
    }
  };

  return (
    <div>
      <ul className={bookListStyles.list}>
        {currentBooks.map((book) => (
          <li key={book.bookKey}>
            <BookCard
              title={book.title}
              status={book.status}
              author={book.author}
              coverImage={book.coverImage}
              bookKey={book.bookKey}
              showAddButton={showAddButton}
              showDeleteButton={showDeleteButton}
              showUpdateForm={showUpdateForm}
            />
          </li>
        ))}
      </ul>

      {results.length > 0 && (
        <div className={`container ${bookListStyles.spacing}`}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={bookListStyles.button}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={bookListStyles.button}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default BookList;