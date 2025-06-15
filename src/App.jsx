import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
