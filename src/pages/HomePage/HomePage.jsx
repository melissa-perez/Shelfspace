import { useContext } from 'react';
import { BookshelfContext } from '../../context/BookshelfContext';

import homePageStyles from './HomePage.module.css';
import '../../../src/index.css';

function HomePage() {
  const { stats } = useContext(BookshelfContext);
  return (
    <div className={`container ${homePageStyles.homeContainer}`}>
      <h1>Shelfspace</h1>
      <h2>👋Welcome, dear readers!</h2>
      <p>
        Shelfspace is a book tracking app that keeps track of your reading
        goals. It uses the Open Library API to search for books. You can then
        add, delete, edit, and view the books in your list.
      </p>
      <div>
        <p>📚At a glance stats</p>
        <ul>
          <li>Total books: {stats.total}</li>
          <li>Currently reading: {stats.reading}</li>
          <li>Books to read: {stats.tbr}</li>
          <li>Finished books: {stats.finished}</li>
        </ul>
      </div>
      <p>Progress bar would go here.</p>
      <img
        className={homePageStyles.hero}
        src="/src/assets/susan-q-yin-books-unsplash.jpg"
        alt="Bookshelfs with books in a library setting"
      />
    </div>
  );
}

export default HomePage;
