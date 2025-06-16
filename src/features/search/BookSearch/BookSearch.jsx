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
      console.log(url);
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
        console.log(response);
        const { docs } = await response.json();
        console.log(docs);
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
          }}
        >
          Clear
        </button>
      </form>
      {isLoading ? <p>Loading results....</p> : <></>}
    </>
  );
}

export default BookSearch;
