import { useContext } from 'react';
import { BookshelfContext } from '../../../context/BookshelfContext';

import '../../../index.css';
import bookCardStyles from './BookCard.module.css';

function BookCard({ title, author, coverImage, bookKey, showButton }) {
  const { addBookToShelf, deleteBookInShelf } = useContext(BookshelfContext);
  return (
    <div className={`container ${bookCardStyles.card}`}>
      {coverImage !== null ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverImage}-S.jpg`}
          alt={`Book cover image of ${title}`}
        />
      ) : (
        <p className={bookCardStyles.notFound}>Cover image not found.</p>
      )}
      <div className={bookCardStyles.spacing}>
        <h3>{title}</h3>
        <hr />
        <p className={bookCardStyles.author}>{author}</p>
      </div>
      <div className={`container ${bookCardStyles.button}`}>
        {showButton && (
          <div>
            <button
              onClick={() =>
                addBookToShelf({
                  title,
                  author,
                  coverImage,
                  bookKey,
                  status: 'tbr',
                })
              }
            >
              Add to bookshelf
            </button>
            <button
              onClick={() =>
                deleteBookInShelf({
                  bookKey,
                })
              }
            >
              Delete off bookshelf
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookCard;
/*TODO: change showButton to showAdd and showDelete*/
