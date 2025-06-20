import heroStyles from './HomePage.module.css';
import '../../../src/index.css';
function HomePage() {
  return (
    <div className={`container ${heroStyles.homeContainer}`}>
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
          <li>Total books: </li>
          <li>Currently reading: </li>
          <li>Finished books: </li>
        </ul>
      </div>
      <p>Progress bar would go here.</p>
      <img className={heroStyles.hero} src="susan-q-yin-books-unsplash.jpg" />
    </div>
  );
}

export default HomePage;
