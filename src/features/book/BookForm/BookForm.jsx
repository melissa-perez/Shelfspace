import { useContext } from 'react';
import { BookshelfContext } from '../../../context/BookshelfContext';

import bookFormStyles from './BookForm.module.css';

function BookForm({ bookKey, status }) {
  const { updateBookStatusInShelf } = useContext(BookshelfContext);
  return (
    <form>
      <label className={bookFormStyles.label}>Reading Status </label>
      <select
        value={status}
        onChange={(event) =>
          updateBookStatusInShelf(bookKey, event.target.value)
        }
      >
        <option value="tbr">To be read(TBR)</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
    </form>
  );
}

export default BookForm;
