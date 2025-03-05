
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import TrackDetail from './pages/TrackDetail/TrackDetail';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/track/:id" element={<TrackDetail />} />
        </Routes>
    </Router>
);

export default AppRoutes;