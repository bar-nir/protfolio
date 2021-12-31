import './App.css';
import Navagation from './components/Navagation';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Education from './components/Education';
import Employment from './components/Employment';
import Contact from './components/Contact.js';
import Hobbies from './components/Hobbies';
function App() {
  return (
    <div>
      <Navagation />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route  path="/Education" element={<Education />} />
        <Route  path="/Employment" element={<Employment />} />
        <Route  path="/Contact" element={<Contact />} />
        <Route  path="/Hobbies" element={<Hobbies />} />
      </Routes>
    </div>

  );
}

export default App;
