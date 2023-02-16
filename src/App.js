import './global.css';
import Home from './components/home';
import FilterContext from './contexts/filter-context';
import { useState } from 'react';

function App() {
  const [checkboxService, setCheckboxService] = useState({
    Netflix: false,
    AmazonPrime: false,
    Hbo: false,
    Disney: false,
    StarPlus: false
  });

  const [checkboxType, setCheckboxType] = useState({
    movie: false,
    series: false,
  });

  const [checkboxGenre, setCheckboxGenre] = useState({
    Acao: false,
    Animacao: false,
    Comedia: false,
    Drama: false,
    FiccaoCientifica: false,
    Romance: false,
    Terror: false,

  });

  const [filter, setFilter] = useState([]);

  return (
    <div className="App">

      <FilterContext.Provider
        value={{
          checkboxService,
          setCheckboxService,
          checkboxType,
          setCheckboxType,
          checkboxGenre,
          setCheckboxGenre,
          filter,
          setFilter
        }}>
        <Home />
      </FilterContext.Provider>
    </div>
  );
}

export default App;
