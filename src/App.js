import './global.css';
import Home from './components/home';
import FilterContext from './contexts/filter-context';
import { useState } from 'react';

function App() {
  const [checkboxs, setCheckboxs] = useState({
    Netflix: false,
    AmazonPrime: false,
    Hbo: false,
    Disney: false,
    StarPlus: false,
    GloboPlay: false,
    Filmes: false,
    Series: false,
    Acao: false,
    Animacao: false,
    Comedia: false,
    Drama: false,
    FiccaoCientifica: false,
    Romance: false,
    Terror: false,
  });


  return (
    <div className="App">

      <FilterContext.Provider value={{ checkboxs, setCheckboxs}}>
      <Home/>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
