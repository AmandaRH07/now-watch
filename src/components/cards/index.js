import React, { useEffect, useContext, useState } from "react";
import { CardConfig } from "./card";
import api from '../../fetch'
import FilterContext from '../../contexts/filter-context';
import './style.css';

export default function Cards() {
  const { filterService, filterType, filterGenre } = useContext(FilterContext);
  const [responseData, setResponseData] = useState();

  function GetOptionsServicesParams(filterOption) {
    const defaultOption = "netflix";

    if (filterOption.length >= 4){
      console.log("Número de streamings selecionado é maior do que o permitido, uma adaptação foi feita para suportar a request!")
      filterOption = filterOption.slice(0,3)
    }

    return filterOption.length > 0
      ? filterOption.join(',')
      : defaultOption;
  }

  function GetOptionsTypesParams(filterOption) {
    const allTypes = "all";

    return filterOption.length === 2
      ? allTypes
      : filterOption[0];
  }

  function GetOptionsGenresParams(filterOption) {
    if (filterOption.length > 0) {
      return filterOption.map(opt => opt.replace(/[^0-9]/g, ''))[0]
    }
  }

  const GetData = () => {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/v2/search/basic',
      params: {
        country: 'br',
        services: GetOptionsServicesParams(filterService),
        output_language: 'en',
        show_type: GetOptionsTypesParams(filterType),
        genre: GetOptionsGenresParams(filterGenre),
        show_original_language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': 'b4424f4d74msh370de4b27bdb81dp1b0991jsn8aee88cf726e',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    api.request(options).then(response => {
      setResponseData(prevState => (
        {

          ...prevState,
          ...response.data.result
        }
      ))
      return response
    })
      .catch(function (err) {
        return err;
      });
  }

  useEffect(() => {
    GetData()
  }, [filterService, filterType, filterGenre])

  return (
    <div className="cards-conteiner">
      <div className="card-content">
        {responseData
          &&
          Object.entries(responseData).map((item, index) =>
            <CardConfig
              key={index}
              cardsMapData={item} />
          )
        }
      </div>
    </div>
  )
}