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
          const errorMsg =
            response?.message ||
            'Something went wrong with the request. Try again later.';
          throw new Error(errorMsg);
        }
        const { docs } = await response.json();
        const fetchedBooks = docs.map((book) => {
          const item = {
            title: book.title || 'Untitled',
            author: book.author_name?.[0] || 'Unknown Author',
            cover_i: book.cover_i || null,
          };
          return item;
        });
        setResults(fetchedBooks);
      } catch (error) {
        console.error(error);
        setErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [title]);

  return (
    <>
      <form className={bookSearchStyles.form}>
        <label className={bookSearchStyles.label} htmlFor={'bookInput'}>
          Book Title
        </label>
        <input
          className={bookSearchStyles.input}
          id={'bookInput'}
          type="text"
          value={localTitle}
          onChange={(event) => {
            setLocalTitle(event.target.value);
          }}
          placeholder="via Open Library API..."
        />
        <button
          type="button"
          onClick={() => {
            setLocalTitle('');
            setResults([]);
          }}
        >
          Clear
        </button>
      </form>
      {!isLoading && results.length === 0 && title !== '' && (
        <p>No books found. Try a different search term.</p>
      )}
      <BookResults isLoading={isLoading} results={results} />
    </>
  );
}

export default BookSearch;
