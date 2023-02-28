import React, { useEffect, useContext, useState } from "react";
import { CardConfig } from "./card";
import api from '../../fetch'
import './style.css';
import FilterContext from '../../contexts/filter-context';
import {CaptalizeFirstLetter} from '../../utils'

export default function Cards() {
  const { filterService, filterType, filterGenre } = useContext(FilterContext);
  const [responseData, setResponseData] = useState([]);

  function GetOptionsParams(filterOption, defaultOpttion) {
    return filterOption !== undefined ? filterOption : defaultOpttion;
  }

  const GetData = () => {
    const params = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: GetOptionsParams(filterService, "netflix"),
        type: GetOptionsParams(filterType, "movie"),
        genre: GetOptionsParams(filterGenre, "").replace(/[^0-9]/g, ''),
        page: '1',
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'a08b4892damsh53c57fca6e1477ap162e77jsn6c2433727c0a',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    api.request(params).then(response => {
      setResponseData(prevState => (
        {

          ...prevState,
          ...response.data.results
        }
      ))
      return response
    })
    .catch(function (err) {
      return err;
    });
  }

  const HandleTypeToShowCard = (type) => {
    let translate = undefined;
    if(type === undefined) {
      translate = "filme"
    }

    translate = type == "serie" ? "série" : "filme"
    return CaptalizeFirstLetter(translate);
  }

  useEffect(() => {
    GetData()
  }, [filterService, filterType, filterGenre])

  return (
    <div className="cards-conteiner">
      <div className="card-content">
        {responseData
          &&
          Object.entries(responseData).map((item) =>
            <CardConfig
              type={HandleTypeToShowCard(filterType)}
              cardsMapData={item} />
          )
        }
      </div>
    </div>
  )
}