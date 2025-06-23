import { useContext } from 'react';
import { BookshelfContext } from '../../../context/BookshelfContext';

function ProgressStats() {
  const { stats } = useContext(BookshelfContext);
  return (
    <div>
      <p>📚At a glance stats</p>
      <ul>
        <li>Total books: {stats.total}</li>
        <li>Currently reading: {stats.reading}</li>
        <li>Books to read: {stats.tbr}</li>
        <li>Finished books: {stats.finished}</li>
      </ul>
    </div>
  );
}

export default ProgressStats;
