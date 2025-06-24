import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

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
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 10;
  const rawPage = parseInt(searchParams.get(key) || '1', 10);
  const indexOfFirstBook = (rawPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const currentBooks = results.slice(
    indexOfFirstBook,
    indexOfFirstBook + itemsPerPage
  );
  useEffect(() => {
    if (results.length === 0) return;
    if (totalPages > 0) {
      if (isNaN(rawPage) || rawPage < 1 || rawPage > totalPages) {
        navigate('/');
      }
    }
  }, [rawPage, totalPages, navigate, results]);
  const handlePreviousPage = () => {
    if (rawPage > 1) {
      setSearchParams({ [key]: (rawPage - 1).toString() });
    }
  };

  const handleNextPage = () => {
    if (rawPage < totalPages) {
      setSearchParams({ [key]: (rawPage + 1).toString() });
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
            disabled={rawPage === 1}
            className={bookListStyles.button}
          >
            Previous
          </button>
          <span>
            Page {rawPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={rawPage === totalPages}
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
