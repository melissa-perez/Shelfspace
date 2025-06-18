import '../../../index.css';
import bookCardStyles from './BookCard.module.css';

function BookCard({ title, author, coverImage }) {
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
    </div>
  );
}

export default BookCard;
