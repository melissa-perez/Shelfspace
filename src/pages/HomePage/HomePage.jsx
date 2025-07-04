import ProgressStats from '../../features/progress/ProgressStats/ProgressStats';

import homePageStyles from './HomePage.module.css';
import '../../../src/index.css';

function HomePage() {
  return (
    <div className={`container ${homePageStyles.homeContainer}`}>
      <h1>Shelfspace</h1>
      <h2>👋Welcome, dear readers!</h2>
      <p>
        Shelfspace is a book tracking app that keeps track of your reading
        goals. It uses the Open Library API to search for books. You can then
        add, delete, edit, and view the books in your list.
      </p>
      <ProgressStats />
      <img
        className={homePageStyles.hero}
        src="/src/assets/susan-q-yin-books-unsplash.jpg"
        alt="Bookshelfs with books in a library setting"
      />
    </div>
  );
}

export default HomePage;
