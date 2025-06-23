import { Route, Routes } from 'react-router';
import { BookshelfProvider } from './context/BookshelfContext';

import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="appContainer">
        <BookshelfProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BookshelfProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
