import { useState, useEffect } from 'react';
import BookResults from '../BookResults';
import bookSearchStyles from './BookSearch.module.css';

function BookSearch() {
  const [title, setTitle] = useState('');
  const [localTitle, setLocalTitle] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      setTitle(localTitle);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [localTitle, setTitle]);

  useEffect(() => {
    if (title === '') return;

    const fetchBooks = async () => {
      setIsLoading(true);
      const url = `https://openlibrary.org/search.json?title=${title}`;
      const options = {
        method: 'GET',
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(
            'Something went wrong with the request. Try again later.'
          );
        }
        const { docs } = await response.json();
        const fetchedBooks = docs.map((book) => ({
          bookKey: book.key,
          title: book.title || 'Untitled',
          author: book.author_name?.[0] || 'Unknown Author',
          coverImage: book.cover_i || null,
        }));
        setResults(fetchedBooks);
        setErrorMessage('');
      } catch (error) {
        console.error('Fetch error:', error);
        const message =
          typeof error === 'string'
            ? error
            : error?.message || 'An unknown error occurred';
        setErrorMessage(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [title]);

  return (
    <div className={bookSearchStyles.searchContainer}>
      <form
        className={bookSearchStyles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={bookSearchStyles.label} htmlFor={'bookInput'}>
          Book Title
        </label>
        <input
          className={bookSearchStyles.input}
          id={'bookInput'}
          type="text"
          value={localTitle}
          onChange={(event) => setLocalTitle(event.target.value)}
          placeholder="via Open Library API..."
        />
        <button
          className={bookSearchStyles.button}
          type="button"
          onClick={() => {
            setTitle('');
            setLocalTitle('');
            setResults([]);
          }}
        >
          Clear
        </button>
      </form>

      {!isLoading && results.length === 0 && title !== '' && (
        <p className={bookSearchStyles.errorMessage}>
          🚫 No books found. Try a different book title.
        </p>
      )}

      {typeof errorMessage === 'string' && errorMessage && (
        <div>
          <p className={bookSearchStyles.errorMessage}>
            An error occurred: {errorMessage}
          </p>
          <button
            type="button"
            className={bookSearchStyles.button}
            onClick={() => setErrorMessage('')}
          >
            Dismiss Error Message
          </button>
        </div>
      )}

      <BookResults isLoading={isLoading} results={results} />
    </div>
  );
}

export default BookSearch;
