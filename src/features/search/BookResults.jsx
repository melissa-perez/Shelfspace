import BookList from '../book/BookList/BookList';

function BookResults({ isLoading, results }) {
  return (
    <div>
      {isLoading ? (
        <span>Loading results....</span>
      ) : results.length !== 0 ? (
        <BookList results={results} showButton={true} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default BookResults;
