import React, { useEffect, useContext, useState } from "react";
import { CardConfig } from "./card";
import {CaptalizeFirstLetter} from '../../utils' 
import api from '../../fetch'
import FilterContext from '../../contexts/filter-context';
import './style.css';

export default function Cards() {
  const { filterService, filterType, filterGenre } = useContext(FilterContext);
  const [responseData, setResponseData] = useState([]);

  function GetOptionsParams(filterOption, defaultOption) {
    return filterOption !== undefined ? filterOption : defaultOption;
  }

  const GetData = () => {
    const params = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'br',
        service: GetOptionsParams(filterService, "netflix"),
        type: GetOptionsParams(filterType, "movie"),
        genre: GetOptionsParams(filterGenre, "").replace(/[^0-9]/g, ''),
        page: '1',
        output_language: 'en',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'b4424f4d74msh370de4b27bdb81dp1b0991jsn8aee88cf726e',
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
    let typeSelected = undefined;
    if (type === 'movie'){
      typeSelected ="filme";
    }
    else if (type ==='series'){
      typeSelected ="serie";
    }
    else{
      typeSelected ="filme";
    }
    return CaptalizeFirstLetter(typeSelected);
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