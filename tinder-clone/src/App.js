import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import "./App.css";
import Switch from '@mui/material/Switch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          
          <Route
            path="/chat"
            element={<h1>i m chatpage</h1>}
          />

          <Route
            path="/"
            element={<TinderCards />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{/* header */}
        {/* tinder cards */}
        {/* buttons below cards */}
      
      {/* chat screen - header lo chat button nokkaka osthadi  */}
      {/* individual chat screen */}