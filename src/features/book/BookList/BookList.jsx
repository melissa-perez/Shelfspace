import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import BookCard from '../BookCard/BookCard';

import '../../../index.css';
import bookListStyles from './BookList.module.css';

function BookList({
  results,
  showAddButton,
  showDeleteButton,
  showUpdateForm,
}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 10;
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const indexOfFirstBook = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const currentBooks = results.slice(
    indexOfFirstBook,
    indexOfFirstBook + itemsPerPage
  );
  useEffect(() => {
    if (totalPages > 0) {
      if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
        navigate('/');
      }
    }
  }, [currentPage, totalPages, navigate]);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: (currentPage - 1).toString() });
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: (currentPage + 1).toString() });
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
