import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}