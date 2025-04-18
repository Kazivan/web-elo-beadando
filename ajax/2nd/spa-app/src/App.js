import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterApp from './components/CounterApp';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px' }}>
        <Link to="/counter" style={{ marginRight: '10px' }}>Számláló</Link>
        <Link to="/quiz">Kvíz</Link>
      </nav>
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </Router>
  );
}

export default App;
