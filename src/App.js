import './global.css';
import Home from './components/home';
import {FilterProvider} from './contexts/filter-context';
import Router from './router';

const App = () => {
  return (
    <div className="App">
      <FilterProvider>
        <Router>
          <Home />
        </Router>
      </FilterProvider>
    </div>
  );
}

export default App;
