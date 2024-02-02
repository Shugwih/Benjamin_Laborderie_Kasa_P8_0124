import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
/*********/
/*       */
/* PAGES */
import Home from './pages/Home/';
import About from './pages/About/';
import Error from './pages/Error/';
import Listings from './pages/Listings/';
/**************/
/*            */
/* COMPONENTS */
import Header from './components/Header/'
import Footer from './components/Footer/'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* First Page */}
        <Route path="/about" element={<About />} />
        <Route path="/listings/:id" element={<Listings />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} /> {/* Catch them all -- wrong URL go to 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
