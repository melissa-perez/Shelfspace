import { Route, Routes } from 'react-router';

import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
