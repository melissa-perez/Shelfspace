import BookList from '../../shared/BookList/BookList';

function BookResults({ isLoading, results }) {
  return (
    <>
      {isLoading ? (
        <span>Loading results....</span>
      ) : results.length !== 0 ? (
        <BookList
          results={results}
          showAddButton={true}
          showDeleteButton={false}
          showUpdateForm={false}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default BookResults;
