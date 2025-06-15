function HomePage() {
  return (
    <>
      <h1>Shelfspace</h1>
      <h2>👋Welcome, dear readers!</h2>
      <p>
        Shelfspace is a book tracking app that keeps track of your reading
        goals. It uses the Open Library API to search for books. You can then
        add, delete, edit, and view the books in your list.
      </p>

      <div>
        <p>📚At-a-glance stats</p>
        <ul>
          <li>Total books: </li>
          <li>Currently reading: </li>
          <li>Finished books: </li>
        </ul>
      </div>

      <p>Progress bar would go here.</p>
    </>
  );
}

export default HomePage;
