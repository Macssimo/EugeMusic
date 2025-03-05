import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import CallbackPage from './pages/CallbackPage';
import LoginPage from './pages/LoginPage';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import './assets/styles/theme.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar token al cargar
  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Manejar logout
  const handleLogout = () => {
    localStorage.removeItem('spotify_token');
    setToken(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          {!token ? (
            <Routes>
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="*" element={<LoginPage />} />
            </Routes>
          ) : (
            <>
              <Header onLogout={handleLogout} />
              <Navbar />
              
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home token={token} />} />
                  <Route path="/search" element={<Search token={token} />} />
                  <Route path="/library" element={<Library token={token} />} />
                  <Route path="/callback" element={<Navigate to="/" />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>

              <Footer />
            </>
          )}
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;