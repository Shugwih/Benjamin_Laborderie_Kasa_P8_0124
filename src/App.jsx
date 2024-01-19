import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* First Page */}
        <Route path="/About" element={<About />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="*" element={<Error />} /> {/* Catch them all -- wrong URL go to 404 */}
      </Routes>
    </Router>
  );
}

export default App;
