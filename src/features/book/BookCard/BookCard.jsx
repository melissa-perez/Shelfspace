import { useContext } from 'react';
import { BookshelfContext } from '../../../context/BookshelfContext';

import Button from '../../../shared/Button/Button';
import BookForm from '../BookForm/BookForm';

import '../../../index.css';
import bookCardStyles from './BookCard.module.css';

function BookCard({
  title,
  author,
  coverImage,
  bookKey,
  status,
  showAddButton,
  showDeleteButton,
  showUpdateForm,
}) {
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
        {showAddButton && (
          <Button
            title={'Add to bookshelf'}
            handler={() =>
              addBookToShelf({
                title,
                author,
                coverImage,
                bookKey,
                status: 'tbr',
              })
            }
          />
        )}
        {showDeleteButton && (
          <Button
            title={'Remove from bookshelf'}
            handler={() => deleteBookInShelf(bookKey)}
          />
        )}
        {showUpdateForm && <BookForm bookKey={bookKey} status={status} />}
      </div>
    </div>
  );
}

export default BookCard;
