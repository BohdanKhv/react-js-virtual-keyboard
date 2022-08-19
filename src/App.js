import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Keyboard } from './page';

function App() {
  return (
    <Router>
      <div className="container max-width">
        <Routes>
          <Route path='/' element={<Keyboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
