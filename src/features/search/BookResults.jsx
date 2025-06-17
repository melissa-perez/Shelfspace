import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

function BookResults({ isLoading, results }) {
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
      {isLoading ? (
        <span>Loading results....</span>
      ) : results.length !== 0 ? (
        <>
          <ul>
            {currentBooks.map((book, index) => (
              <li key={index}>
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookResults;
