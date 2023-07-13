import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext()
const FilterProvider = ({ children }) => {
  const [checkboxService, setCheckboxService] = useState({
    apple: false,
    prime: false,
    disney: false,
    hbo: false,
    netflix: false,
    starz: false
  });

  const [checkboxType, setCheckboxType] = useState({
    movie: false,
    series: false,
  });

  const [checkboxGenre, setCheckboxGenre] = useState({
    Acao28: false,
    Animacao16: false,
    Biografia1: false,
    Comedia38: false,
    Documentario99: false,
    Drama18: false,
    FiccaoCientifica878: false,
    Romance10749: false,
    Terror27: false
  });

  const [filterService, setFilterService] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [filterGenre, setFilterGenre] = useState([]);
  const [responseHasMore, setResponseHasMore] = useState();
  const [responseNextCursor, setResponseNextCursor] = useState();

  const [responseData, setResponseData] = useState([]);
  return (
    <FilterContext.Provider
      value={{
        checkboxService,
        setCheckboxService,
        checkboxType,
        setCheckboxType,
        checkboxGenre,
        setCheckboxGenre,
        filterService,
        setFilterService,
        filterType,
        setFilterType,
        filterGenre,
        setFilterGenre,
        responseHasMore,
        setResponseHasMore,
        responseNextCursor,
        setResponseNextCursor,
        responseData,
        setResponseData
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext);
export { FilterProvider, FilterContext }