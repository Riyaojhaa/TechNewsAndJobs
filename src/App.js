import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Technology from './components/Technology';
import { Routes, Route , Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route  exact path="/jobs" element={<Jobs />} />
        <Route  exact path="/technology" element={<Technology />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
