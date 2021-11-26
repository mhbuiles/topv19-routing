import { About } from './views/about';
import { Home } from './views/home';
import { List } from './views/list';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="fruit">
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
