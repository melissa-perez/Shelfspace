import { useState } from 'react';

import bookSearchStyles from './BookSearch.module.css';

function BookSearch() {
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="via Open Library API..."
        />
        <button className={bookSearchStyles.button} disabled={title === ''}>
          Search
        </button>
      </form>
    </>
  );
}

export default BookSearch;
