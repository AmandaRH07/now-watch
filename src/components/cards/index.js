import React, { useEffect, useContext, useState } from "react";
import { CardConfig } from "./card";
import api from '../../fetch'
import './style.css';
import FilterContext from '../../contexts/filter-context';



export default function Cards() {
  const { filterService, filterType, filterGenre } = useContext(FilterContext);
  const [responseData, setResponseData] = useState([]);

  function GetOptionsParams(filterOption, isNumericFilter) {
    const result = Object.entries(filterOption).map(x => filterOption[x]).toString();

    return isNumericFilter ? result : result.replace(/[^0-9]/g, '');
  }

  const GetData = () => {
    console.log(filterService, filterType, filterGenre);
    const params = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: filterService !== undefined ? GetOptionsParams(filterService, false) : "netflix",
        type: filterType !== undefined ? GetOptionsParams(filterType, false) : "movie",
        genre: GetOptionsParams(filterGenre, true),
        page: '1',
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'a08b4892damsh53c57fca6e1477ap162e77jsn6c2433727c0a',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    if (Object.keys(filterType).length !== 0) {
      api.request(params).then(response => {
        setResponseData(prevState => (
          {
            ...prevState,
            ...response.data
          }
        ))
        return response
      })
        .catch(function (err) {
          return err;
        });
    }
  }

  useEffect(() => {
    GetData()
  }, [filterService, filterType, filterGenre])

  return (
    <div className="cards-conteiner">
      <div className="card-content">
        {/* <CardConfig
          data={responseData.results[1]} /> */}
      </div>
    </div>
  )
}